const hadits = require("./json/hadits.json");

const getAllHadits = () => {
  return hadits;
};
const getHadits = (nomor) => {
  var result = [];
  for (let index = 0; index < hadits.length; index++) {
    const element = hadits[index];
    if (element.no == nomor) {
      result.push(element);
    }
  }
  return result;
};

module.exports = { getAllHadits, getHadits };
