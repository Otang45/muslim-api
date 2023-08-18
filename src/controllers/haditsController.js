const hadits = require("../services/haditsService");

const getAllHadits = (req, res) => {
  res.send({ data: hadits.getAllHadits() });
};
const getHadits = (req, res) => {
  const { nomor } = req.params;
  res.send({ data: hadits.getHadits(nomor) });
};

module.exports = {
  getAllHadits,
  getHadits,
};
