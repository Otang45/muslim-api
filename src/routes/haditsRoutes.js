const express = require("express");
const hadits = require("../controllers/haditsController");
const router = express.Router();

router.get("/", hadits.getAllHadits);
router.get("/:nomor", hadits.getHadits);

module.exports = router;
