const mongoose = require('mongoose');
const mongoURI = MOngouri;

//connect to data
async function connectToMongo() {
  await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}

module.exports = connectToMongo;
