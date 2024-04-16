const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://54m345:TheCat345@sam345.xuhfbap.mongodb.net/SpotLight?retryWrites=true&w=majority&appName=Sam345";

//connect to data
async function connectToMongo() {
  await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}

module.exports = connectToMongo;
