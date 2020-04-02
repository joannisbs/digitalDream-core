

const list = async (req, res, next) => {
  try{
    const list = [
      'teste',
    ];
    res.json(list)
  } catch (error) {
    next();
  }
}
