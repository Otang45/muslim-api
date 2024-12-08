const express = require("express");
const router = express.Router();
const db = require("../../../database/config");

router.get("/", async (req, res) => {
  try {
    const source = req.query.source;
    if (source != null) {
      db.all(
        "SELECT * FROM doa WHERE source = '" + source + "' ORDER BY judul ASC",
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
      db.all("SELECT * FROM doa ORDER BY judul ASC", (err, data) => {
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

router.get("/find", async (req, res) => {
  try {
    const query = req.query.query;
    if (query != null) {
      db.all(
        "SELECT * FROM doa WHERE judul LIKE '%" +
          query +
          "%' ORDER BY judul ASC",
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
      res.status(500).json({
        status: 500,
        message: "Parameter di perlukan (query).",
      });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

module.exports = router;
