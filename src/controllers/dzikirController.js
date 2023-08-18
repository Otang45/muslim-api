const dzikir = require("../services/dzikirService");

const getDzikir = (req, res) => {
  const { source } = req.params;
  res.send({ data: dzikir.getDzikir(source) });
};

module.exports = {
  getDzikir,
};
