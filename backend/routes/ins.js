const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const Ins = require('../models/Institutes');
const router = express.Router();
const multer = require('multer');
const mongodb = require('mongodb')
const uploads = multer();
const crypto = require('crypto')
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');

//GridFs
const conn = mongoose.connection;
let gfs;
conn.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'uploadsIns' })
})

//ROUTE 1: Get all the Ins details except userto whom the ins belongs using : GET "/api/ins/fetchins". Login required
router.get('/fetchins', async (req, res) => {
  const ins = await Ins.find().select("-user");
  res.json(ins);
});

//ROUTE 2: Get the Ins details of the particular user using : GET "/api/ins/fetchinstouser". Login required
router.get('/fetchinstouser', fetchuser, async (req, res) => {
  const Uins = await Ins.find({ user: req.user.user.id });
  res.json(Uins);
});

//ROUTE 3: Add a new Ins details of the particular user using : POST "/api/ins/addins". Login required
router.post('/addins', fetchuser, uploads.fields([
  { name: 'images.instituteImage', maxCount: 10 },
  { name: 'images.galleryImage', maxCount: 10 },
  { name: 'images.phImage', maxCount: 10 },
  { name: 'images.coImage', maxCount: 10 }
]), async (req, res) => {

  try {
    const { tempType } = req.body;
    const contentData = {};
   
    // Process images
    if (req.files) {
      contentData.images = {};
      for (const key in req.files) {
        const files = req.files[key];
        const upkey = key.slice(7);
        contentData.images[upkey] = [];
        for (const file of files) {
          const uploadStream = gfs.openUploadStream(file.originalname, { contentType: file.mimetype });
          uploadStream.end(file.buffer);
          const fileId = new mongoose.Types.ObjectId(uploadStream.id.toString());
          
          contentData.images[upkey].push(fileId);
        }
      }
    }
    const titles = req.body;
    if (titles) {
      contentData.title = {};
      for (const key in titles) {
        if (key.startsWith('title.')) {
          const upkey = key.slice(6)
          contentData.title[upkey] = JSON.parse(titles[key]);
        }
      }
    }

    // Process descriptions
    const descriptions = req.body;
    if (descriptions) {
      contentData.description = {};
      for (const key in descriptions) {
        if (key.startsWith('description.')) {
          const upkey = key.slice(12)
          contentData.description[upkey] = JSON.parse(descriptions[key]);
        }
      }
    }
    // Process contacts
    const contacts = req.body;
    if (contacts) {
      contentData.contact = {};
      for (const key in contacts) {
        if (key.startsWith('contact.')) {
          const upkey = key.slice(8)
          contentData.contact[upkey] = JSON.parse(contacts[key]);
        }
      }
    }

    // Create a new Nins document
    const ninsData = new Ins({
      user: req.user.user.id,
      tempType,
      contentData
    });

    // Save the Nins document
    const result = await ninsData.save();

    res.status(200).json({ message: 'Data saved successfully', result });
  } catch (err) {
    console.error('Error occurred in /addins route:', err);
    res.status(500).json({ error: 'An error occurred', details: err.message });
  }
});

//ROUTE 4: Update an exixting Ins details of the particular user using : PUT "/api/ins/updateins". Login required
router.put('/updateins/:id', fetchuser, async (req, res) => {

  const { title, description } = req.body;//taking info from user and storing it in variable object,s properties
  try {
    const newIns = {};// creating an empty Ins field that will be later filled with the updated ins user sends
    if (title) { newIns.title = title };//checking if user sent new updated title. if yes, then assigned it to the empty field created above
    if (description) { newIns.description = description };//checking if user sent new updated description. if yes, then assigned it to the empty field created above

    // following are codes to prevent from hackers and wont be triggered by normal users
    //check if the ins with sent id(from user) exists
    let Inss = await Ins.findById(req.params.id);
    if (!Inss) {
      return res.status(404).send("Not Found")
    }
    //checks if 'requesting' user's id and userid in the ins database field match. If not someone is trying to update others Ins field
    if (Inss.user.toString() !== req.user.user.id) {
      return res.status(401).send("Not allowed")
    }
    //update the field of the particular ins through their ins id from the endpoint
    Inss = await Ins.findByIdAndUpdate(req.params.id, { $set: newIns }, { new: true });
    res.json(Inss);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Server Error' });
  }
}); 

//ROUTE 5: Delete an existing Ins of the particular user using : DELETE "/api/ins/deleteins". Login required
router.delete('/deleteins/:id', fetchuser, async (req, res) => {
  try {
    // following are codes to prevent from hackers and wont be triggered by normal users
    //check if the ins with sent id(from user) exists
    let Inss = await Ins.findById(req.params.id);
    if (!Inss) {
      return res.status(404).send("Not Found")
    }
    //checks if 'requesting' user's id and userid in the ins database field match. If not someone is trying to update others Ins field
    //Allow deletion only if user owns the ins
    if (Inss.user.toString() !== req.user.user.id) {
      return res.status(401).send("Not allowed")
    }
       //delete the field of the particular ins through their ins id from the endpoint
      const ins = await Ins.findByIdAndDelete(req.params.id);
  
      // Delete the associated images from GridFS
      const conn = mongoose.connection;
      const gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'uploadsIns' });
  
      const deletePromises = Object.entries(ins.contentData.images).flatMap(([key, imageIds]) => {
        return imageIds.map(id => gfs.delete(id));
      });
  
      await Promise.all(deletePromises);
  
      res.json({ "Success": "Institutes and associated images are now deleted" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Server Error' });
    }
});

// ROUTE 6: Get an image from the GridFS bucket using : GET "/api/ins/image/:id"
router.get('/images', async (req, res) => {
  try {
    const ids = req.query.ids ? req.query.ids.split(',').map(id => new mongodb.ObjectId(id)) : [];
   

    const imageDataArray = [];

    for (const id of ids) {
      const downloadStream = gfs.openDownloadStream(id);

      const chunks = [];
      downloadStream.on('data', chunk => chunks.push(chunk));
      downloadStream.on('error', err => {
        console.error('Error occurred while retrieving image:', err);
      });
      downloadStream.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const imageData = {
          id: id.toString(),
          data: buffer.toString('base64'),
        };
        imageDataArray.push(imageData);
      });
    }

    // Wait for all image data to be processed
    await new Promise(resolve => setTimeout(resolve, 100));

    res.status(200).json(imageDataArray);
  } catch (err) {
    console.error('Error occurred in /images route:', err);
    res.status(500).json({ error: 'An error occurred', details: err.message });
  }
});

module.exports = router;