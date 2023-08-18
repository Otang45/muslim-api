const express = require("express");
const doa = require("../controllers/doaController");
const router = express.Router();

router.get("/", doa.getAllDoa);
router.get("/:source", doa.getDoa);

module.exports = router;
