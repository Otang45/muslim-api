const express = require("express");
const router = express.Router();
const db = require("../../../database/config");

router.get("/", async (req, res) => {
  try {
    db.all(
      "SELECT * FROM word ORDER BY CAST(surah as INTEGER), CAST(ayah as INTEGER), CAST(word as INTEGER) ASC",
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

router.get("/surah", async (req, res) => {
  try {
    const surahId = req.query.id;
    if (surahId != null) {
      db.all(
        "SELECT * FROM word WHERE surah = " +
          surahId +
          " ORDER BY CAST(surah as INTEGER), CAST(ayah as INTEGER), CAST(word as INTEGER) ASC",
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
      res
        .status(500)
        .json({ status: 500, message: "Parameter di perlukan (id)." });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

router.get("/ayah", async (req, res) => {
  try {
    const surahId = req.query.surahId;
    const ayahId = req.query.ayahId;
    if (surahId != null && ayahId != null) {
      db.all(
        "SELECT * FROM word WHERE surah = " +
          surahId +
          " AND ayah = " +
          ayahId +
          " ORDER BY CAST(surah as INTEGER), CAST(ayah as INTEGER), CAST(word as INTEGER) ASC",
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
        message: "Parameter di perlukan (surahId, ayahId).",
      });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

module.exports = router;
