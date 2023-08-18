const dzikir = require("./json/dzikir.json");

const getDzikir = (source) => {
  var result = [];
  for (let index = 0; index < dzikir.length; index++) {
    const element = dzikir[index];
    if (element.type == source) {
      result.push(element);
    }
  }
  return result;
};

module.exports = { getDzikir };
