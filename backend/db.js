const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://54m345:TheCat435@sam345.xuhfbap.mongodb.net/?retryWrites=true&w=majority&appName=Sam345/SpotLight";

//connect to data
async function connectToMongo() {
  await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}

module.exports = connectToMongo;
