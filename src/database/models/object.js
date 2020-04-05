const mongoose = require('../../database');

const ObjectSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  }, 
  fomulary: {
    type: Array,
  }
})

const ObjectDraftsModel = mongoose.model('ObjectDraft', ObjectSchema);

module.exports = ObjectDraftsModel;