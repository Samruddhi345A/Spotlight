const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const multer = require('multer');
const mongodb = require('mongodb')
const upload = multer();
const path = require('path');
const crypto = require('crypto')
const mongoose = require('mongoose');
//token secret sign
const JWT_SECRET = "SamruddhiSaritaPayal";

// GridFS
const conn = mongoose.connection;
let gfs;

conn.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'uploadProfile' });
});

// ROUTE 1: create user using POST="localhost:5000/api/auth/createuser". No login required
router.post(
  '/createuser',
  upload.single('avatar'), // Allow a single image with the key 'avatar'
  [
    body('name', 'Enter a valid name more than 3 characters').isLength({ min: 3 }),
    body('password', 'Password must be more than 3 characters').isLength({ min: 3 }),
    body('email', 'Enter a valid email with @ symbol').isEmail(),
  ],
  async (req, res) => {
    let success = false;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }

    try {
      // Validating whether user exists by email
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: 'Sorry email already exists' });
      }

      // Password encryption
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Upload the profile image to GridFS
      let profileImageId = null;
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

          // Create a new user document
          const newUser = new User({
            name: req.body.name,
            password: secPass,
            birthdate: req.body.birthdate,
            gender: req.body.gender,
            role: req.body.role,
            email: req.body.email,
            profileImage: profileImageId,
          });
          // Save the user document
          user = await newUser.save();

          // Creating data (for token generation) from id
          const data = { user: { id: user.id } };

          // Signing token and creating token
          const authToken = jwt.sign(data, JWT_SECRET);
          success = true;
          res.json({ success, authToken });
        });

        uploadStream.end(req.file.buffer);
      } else {
        // Create a new user document without profile image
        const newUser = new User({
          name: req.body.name,
          password: secPass,
          birthdate: req.body.birthdate,
          gender: req.body.gender,
          role: req.body.role,
          email: req.body.email,
        });

        // Save the user document
        user = await newUser.save();

        // Creating data (for token generation) from id
        const data = { user: { id: user.id } };

        // Signing token and creating token
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authToken });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Server Error' });
    }
  }
);
//ROUTE2: Check user exixts (login) using POST="localhost:5000/api/auth/login".login required
router.post('/login', [body('email').isEmail(),
body('password').exists()], async (req, res) => {
    let success = false;
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send({ errors: result.array() });

    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please enter correct credentials" })
        }
        const passCompare = await bcrypt.compare(password, user.password);
        if (!passCompare) {
            return res.status(400).json({ error: "Please enter correct credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        //signing token and creating token
        const authToken = jwt.sign(data, JWT_SECRET);
        success= true;
        res.json({ success, authToken });

    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Server Error' });
    }

});

//ROUTE3: Get loggedin User details POST="localhost:5000/api/auth/getuser".login required
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    const userId = req.user.user.id;
    const user = await User.findById(userId).select('-password').populate('profileImage');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    let profileImageBase64;
    if (user.profileImage) {
      const fileId = new mongoose.Types.ObjectId(user.profileImage);
      const downloadStream = gfs.openDownloadStream(fileId);

      const chunks = [];
      downloadStream.on('data', (chunk) => {
        chunks.push(chunk);
      }); 

      await new Promise((resolve, reject) => {
        downloadStream.on('error', reject);
        downloadStream.on('end', resolve);
      });

      const buffer = Buffer.concat(chunks);
      profileImageBase64 = buffer.toString('base64');
    }

    const userWithProfileImage = {
      ...user.toObject(),
      profileImage: profileImageBase64 || null,
    };

    res.json(userWithProfileImage);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Server Error' });
  }
});
module.exports = router