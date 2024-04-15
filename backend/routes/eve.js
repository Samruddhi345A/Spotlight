const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const Eve = require('../models/Events');
const router = express.Router();
const multer = require('multer');
const mongodb = require('mongodb')
const upload = multer();
const crypto = require('crypto')
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
// GridFS setup
const conn = mongoose.connection;
let gfs;
conn.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'uploadsEvs' });
});

// // Set up Multer storage for uploaded files
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// ROUTE 1: Get all the event details except the user to whom the event belongs
router.get('/fetcheve', async (req, res) => {
  try {
    const events = await Eve.find().select("-user");

    // Fetch image data for each event
    const eventsWithImages = await Promise.all(
      events.map(async (event) => {
        const imageId = new mongoose.Types.ObjectId(event.images);
        const imageData = await gfs.find({ _id: imageId }).toArray();
        let imageBase64;

        if (imageData.length > 0) {
          const downloadStream = gfs.openDownloadStream(imageData[0]._id);
          const chunks = [];

          downloadStream.on('data', (chunk) => {
            chunks.push(chunk);
          });

          await new Promise((resolve, reject) => {
            downloadStream.on('error', reject);
            downloadStream.on('end', resolve);
          });

          const buffer = Buffer.concat(chunks);
          imageBase64 = buffer.toString('base64');
        }
        return {
          ...event.toObject(),
          imageData: imageBase64 || null,
        };
      })
    ); 

    res.json(eventsWithImages);
  } catch (err) {
    console.error('Error fetching event images:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ROUTE 2: Get the event details of the particular user
// ROUTE 2: Get the event details of the particular user
router.get('/fetchevetouser', fetchuser, async (req, res) => {
  try {
    const userEvents = await Eve.find({ user: req.user.user.id });

    // Fetch image data for each event
    const eventsWithImages = await Promise.all(
      userEvents.map(async (event) => {
        const imageId = new mongoose.Types.ObjectId(event.images);
        const imageData = await gfs.find({ _id: imageId }).toArray();
        let imageBase64;

        if (imageData.length > 0) {
          const downloadStream = gfs.openDownloadStream(imageData[0]._id);
          const chunks = [];

          downloadStream.on('data', (chunk) => {
            chunks.push(chunk);
          });

          await new Promise((resolve, reject) => {
            downloadStream.on('error', reject);
            downloadStream.on('end', resolve);
          });

          const buffer = Buffer.concat(chunks);
          imageBase64 = buffer.toString('base64');
        }

        return {
          ...event.toObject(),
          imageData: imageBase64 || null,
        };
      })
    );

    res.json(eventsWithImages);
  } catch (err) {
    console.error('Error fetching user events:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ROUTE 3: Add a new event details of the particular user
router.post('/addeve', fetchuser, upload.single('image'), async (req, res) => {
  try {

    // Upload the profile image to GridFS
    let profileImageId = null;
    console.log(req.file)
    // Process image
    if (req.file) {
      const uploadStream = gfs.openUploadStream(req.file.originalname, {
        contentType: req.file.mimetype,
      });

      uploadStream.once('error', (err) => {
        console.error('Error uploading file:', err);
      });

  
      uploadStream.once('finish', async () => {
        const uploadedFile = await gfs.find({ _id: uploadStream.id }).next();
        profileImageId = uploadedFile._id;

        // Create a new event document
    const newEvent = new Eve({
      user:req.user.user.id,
      orgName:req.body.orgName,
      images:profileImageId,
    });

    // Save the event document
    const savedEvent = await newEvent.save();
    res.status(200).json({ message: 'Event created successfully', event: savedEvent });

        });

        uploadStream.end(req.file.buffer);
    }

  } catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//ROUTE 4: Update an exixting eve details of the particular user using : PUT "/api/eve/updateeve". Login required
router.put('/updateeve/:id', fetchuser, async (req, res) => {

  const { title, description } = req.body;//taking info from user and storing it in variable object,s properties
  try {
    const newIns = {};// creating an empty Eve field that will be later filled with the updated eve user sends
    if (title) { newIns.title = title };//checking if user sent new updated title. if yes, then assigned it to the empty field created above
    if (description) { newIns.description = description };//checking if user sent new updated description. if yes, then assigned it to the empty field created above

    // following are codes to prevent from hackers and wont be triggered by normal users
    //check if the eve with sent id(from user) exists
    let Eves = await Eve.findById(req.params.id);
    if (!Eves) {
      return res.status(404).send("Not Found")
    }
    //checks if 'requesting' user's id and userid in the eve database field match. If not someone is trying to update others Eve field
    if (Eves.user.toString() !== req.user.user.id) {
      return res.status(401).send("Not allowed")
    }
    //update the field of the particular eve through their eve id from the endpoint
    Eves = await Eve.findByIdAndUpdate(req.params.id, { $set: newIns }, { new: true });
    res.json(Eves);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Server Error' });
  }
});

//ROUTE 5: Delete an existing Eve of the particular user using : DELETE "/api/eve/deleteins". Login required
router.delete('/deleteeve/:id', fetchuser, async (req, res) => {
  try {
    // following are codes to prevent from hackers and wont be triggered by normal users
    //check if the eve with sent id(from user) exists
    let Eves = await Eve.findById(req.params.id);
    if (!Eves) {
      return res.status(404).send("Not Found")
    }
    //checks if 'requesting' user's id and userid in the eve database field match. If not someone is trying to update others Eve field
    //Allow deletion only if user owns the eve
    if (Eves.user.toString() !== req.user.user.id) {
      return res.status(401).send("Not allowed")
    }
    //delete the field of the particular eve through their eve id from the endpoint
    Eves = await Eve.findByIdAndDelete(req.params.id);
     // Delete the associated images from GridFS
     const conn = mongoose.connection;
     const gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'uploadsEvs' });

     const deletePromises = Object.entries(Eves.images).flatMap(([key, imageIds]) => imageIds.map(id => gfs.delete(id)));
       await Promise.all(deletePromises);
    res.json({ "Success": "Eve is now deleted" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Server Error' });
  }
});

// ROUTE 6: Get an image from the GridFS bucket using : GET "/api/eve/image/:id"
router.get('/imagesE', async (req, res) => {
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
    console.error('Error occurred in /imagesE route:', err);
    res.status(500).json({ error: 'An error occurred', details: err.message });
  }
});

module.exports = router;