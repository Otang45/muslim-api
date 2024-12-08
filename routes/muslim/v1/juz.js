const express = require("express");
const router = express.Router();
const db = require("../../../database/config");

router.get("/", async (req, res) => {
  try {
    const juzId = req.query.id;
    if (juzId != null) {
      db.get("SELECT * FROM juz WHERE number = " + juzId, (err, data) => {
        if (err) {
          res.status(500).json({ status: 500, message: err.message });
        } else if (!data) {
          res.status(404).json({ status: 404, data: {} });
        } else {
          res.status(200).json({ status: 200, data: data });
        }
      });
    } else {
      db.all(
        "SELECT * FROM juz ORDER BY CAST (number as INTEGER) ASC",
        (err, data) => {
          if (err) {
            res.status(500).json({ status: 500, message: err.message });
          } else if (!data) {
            res.status(404).json({ status: 404, data: [] });
          } else {
            res.status(200).json({ status: 200, data: data });
          }
        }
      );
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

module.exports = router;
