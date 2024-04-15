const mongoose = require('mongoose');
const { Schema } = mongoose;
const EveSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  orgName: {
    type:String,
    required:true
  },
  images: {
    type: String,
    required: true
  }
},{ strict: false }); const Eve = mongoose.model('Events', EveSchema)
Eve.createIndexes();
module.exports = Eve;
