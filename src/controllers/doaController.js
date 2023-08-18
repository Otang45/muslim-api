const doa = require("../services/doaService");

const getAllDoa = (req, res) => {
  res.send({ data: doa.getAllDoa() });
};
const getDoa = (req, res) => {
  const { source } = req.params;
  res.send({ data: doa.getDoa(source) });
};

module.exports = {
  getAllDoa,
  getDoa,
};
