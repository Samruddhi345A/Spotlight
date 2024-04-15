const mongoose = require('mongoose');
const { Schema } = mongoose;
const InsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  tempType: {
    type: String,
    required: true
  }
},{ strict: false }); const Ins = mongoose.model('Institutes', InsSchema)
Ins.createIndexes();
module.exports = Ins;
