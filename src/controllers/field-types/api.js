const fieldtype = require ('./const');
const objectModel = require ('../../database/models/object');


const list = async (req, res, next) => {
  res.send(fieldtype);
  const object = {
    name: 'NameBomDaPorra',
    fomulary: [
      {
        name:'teste',
        label: 'teste',
        id: 'teste',
      },
      {
        name:'teste2',
        label: 'teste',
        id: 'teste',
      },
      {
        name:'teste3',
        label: 'teste',
        id: 'teste',
      }
    ]
  }

  objectModel.newObject(object)

}

module.exports ={
  list,
}