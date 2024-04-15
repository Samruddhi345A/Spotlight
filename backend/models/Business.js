const mongoose = require('mongoose');
const { Schema } = mongoose;
const BuzSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  tempType: {
    type: String,
    required: true
  }
},{ strict: false }); const Business = mongoose.model('business', BuzSchema)
Business.createIndexes();
module.exports = Business;
