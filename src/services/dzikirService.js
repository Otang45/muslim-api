const dzikir = require("../database/dzikir");

const getDzikir = (source) => {
  return dzikir.getDzikir(source);
};

module.exports = { getDzikir };
