const express = require("express");
const router = express.Router();
const db = require("../../../database/config");

router.get("/", async (req, res) => {
  try {
    const type = req.query.type;
    if (type != null) {
      db.all(
        "SELECT * FROM dzikir WHERE type = '" + type + "'",
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
    } else {
      db.all("SELECT * FROM dzikir", (err, data) => {
        if (err) {
          res.status(500).json({ status: 500, message: err.message });
        } else if (!data) {
          res.status(404).json({ status: 404, data: [] });
        } else {
          res.status(200).json({ status: 200, data: data });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

module.exports = router;
