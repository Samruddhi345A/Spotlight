const express = require('express'); 
const fetchuser = require('../middleware/fetchuser');
const Business = require('../models/Business');
const router = express.Router();
const multer = require('multer');
const mongodb = require('mongodb')
const upload = multer();
const crypto = require('crypto')
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');

//GridFs
const conn = mongoose.connection;
let gfs;
conn.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'uploads' })
})

//ROUTE 1: Get all the Business details except userto whom the business belongs using : GET "/api/buz/fetchbuzz". Login required
router.get('/fetchbuzz', async (req, res) => {
  const buz = await Business.find().select("-user");
  res.json(buz);
});

//ROUTE 2: Get the Business details of the particular user using : GET "/api/buz/fetchbuztouser". Login required
router.get('/fetchbuztouser', fetchuser, async (req, res) => {
try{
  const Ubuz = await Business.find({ user: req.user.user.id });
  res.json(Ubuz);
}catch(err){}
});

//ROUTE 3: Add a new Business details of the particular user using : POST "/api/buz/addbuz". Login required
router.post('/addbuz', fetchuser, upload.fields([
  { name: 'images.galleryImage', maxCount: 10 },
  { name: 'images.chooseImage', maxCount: 10 },
  { name: 'images.shopImage', maxCount: 10 },
  { name: 'images.blogImage', maxCount: 10 },
  { name: 'images.exploreImage', maxCount: 10 },
  { name: 'images.extraImage', maxCount: 10 }
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

    // Create a new Nbuz document
    const nbuzData = new Business({
      user: req.user.user.id,
      tempType,
      contentData
    });

    // Save the Nbuz document
    const result = await nbuzData.save();

    res.status(200).json({ message: 'Data saved successfully', result });
  } catch (err) {
    console.error('Error occurred in /addbuz route:', err);
    res.status(500).json({ error: 'An error occurred', details: err.message });
  }
});

//ROUTE 4: Update an exixting Business details of the particular user using : PUT "/api/buz/updatebuz". Login required
router.put('/updatebuz/:id', fetchuser, async (req, res) => {

  const { title, description } = req.body;//taking info from user and storing it in variable object,s properties
  try {
    const newBuz = {};// creating an empty Business field that will be later filled with the updated business user sends
    if (title) { newBuz.title = title };//checking if user sent new updated title. if yes, then assigned it to the empty field created above
    if (description) { newBuz.description = description };//checking if user sent new updated description. if yes, then assigned it to the empty field created above

    // following are codes to prevent from hackers and wont be triggered by normal users
    //check if the business with sent id(from user) exists
    let Buz = await Business.findById(req.params.id);
    if (!Buz) {
      return res.status(404).send("Not Found")
    }
    //checks if 'requesting' user's id and userid in the business database field match. If not someone is trying to update others Business field
    if (Buz.user.toString() !== req.user.user.id) {
      return res.status(401).send("Not allowed")
    }
    //update the field of the particular business through their business id from the endpoint
    Buz = await Business.findByIdAndUpdate(req.params.id, { $set: newBuz }, { new: true });
    res.json(Buz);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Server Error' });
  }
});

//ROUTE 5: Delete an existing Business of the particular user using : DELETE "/api/buz/deletebuz". Login required
router.delete('/deletebuz/:id', fetchuser, async (req, res) => {
  try {
    // Check if the business with the sent id exists
    let buz = await Business.findById(req.params.id);
    if (!buz) {
      return res.status(404).send("Not Found");
    }

    // Check if the user is allowed to delete the business
    if (buz.user.toString() !== req.user.user.id) {
      return res.status(401).send("Not allowed");
    }

    // Delete the business document
    buz = await Business.findByIdAndDelete(req.params.id);

    // Delete the associated images from GridFS
    const conn = mongoose.connection;
    const gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'uploads' });

    const deletePromises = Object.entries(buz.contentData.images).flatMap(([key, imageIds]) => {
      return imageIds.map(id => gfs.delete(id));
    });

    await Promise.all(deletePromises);

    res.json({ "Success": "Business and associated images are now deleted" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Server Error' });
  }
});

// ROUTE 6: Get an image from the GridFS bucket using : GET "/api/buz/image/:id"
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