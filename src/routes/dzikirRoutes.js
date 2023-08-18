const express = require("express");
const dzikir = require("../controllers/dzikirController");
const router = express.Router();

router.get("/:source", dzikir.getDzikir);

module.exports = router;
