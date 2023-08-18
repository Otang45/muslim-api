const doa = require("../database/doa");

const getAllDoa = () => {
  return doa.getAllDoa();
};
const getDoa = (source) => {
  return doa.getDoa(source);
};

module.exports = { getAllDoa, getDoa };
