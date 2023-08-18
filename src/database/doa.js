const doa = require("./json/doa.json");

const getAllDoa = () => {
  return doa;
};
const getDoa = (source) => {
  var result = [];
  for (let index = 0; index < doa.length; index++) {
    const element = doa[index];
    if (element.source == source) {
      result.push(element);
    }
  }
  return result;
};

module.exports = { getAllDoa, getDoa };
