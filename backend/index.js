const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');
connectToMongo();


const app = express()
const port = process.env.PORT || 5000
app.use(cors());
app.use(express.json());


//endpoints
app.use('/api/auth', require('./routes/auth'))
app.use('/api/buz', require('./routes/buz'))
app.use('/api/ins', require('./routes/ins'))
app.use('/api/eve', require('./routes/eve'))
app.listen(port, () => {
  console.log(`SpotLight app listening on port ${port}`)
}) 
