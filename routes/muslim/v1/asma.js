const express = require("express");
const router = express.Router();
const db = require("../../../database/config");

router.get("/", async (req, res) => {
  try {
    db.all(
      "SELECT * FROM asmaul_husna ORDER BY CAST(id as INTEGER) ASC",
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
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

module.exports = router;
