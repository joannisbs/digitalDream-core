const fieldtype = require ('./field-types.const');

const list = async (req, res, next) => {
  res.send(fieldtype);
}

module.exports ={
  list,
}