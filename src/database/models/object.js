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

const ObjectModel = mongoose.model('Object', ObjectSchema);



const newObject = (object) => {
  const newObject = new ObjectModel(object);
  newObject.save();
  return newObject;
}




module.exports = {
  newObject,
};