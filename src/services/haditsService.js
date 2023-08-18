const hadits = require("../database/hadits");

const getAllHadits = () => {
  return hadits.getAllHadits();
};
const getHadits = (nomor) => {
  return hadits.getHadits(nomor);
};

module.exports = { getAllHadits, getHadits };
