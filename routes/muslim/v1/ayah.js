const express = require("express");
const router = express.Router();
const db = require("../../../database/config");

router.get("/", async (req, res) => {
  try {
    db.all(
      "SELECT * FROM ayah ORDER BY CAST(id as INTEGER) ASC",
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

router.get("/range", async (req, res) => {
  try {
    const surahId = req.query.surahId;
    const start = req.query.start;
    const end = req.query.end;
    if (surahId != null && start != null && end != null) {
      db.all(
        "SELECT * FROM ayah WHERE surah = " +
          surahId +
          " AND ayah BETWEEN CAST(" +
          start +
          " as INTEGER) and CAST(" +
          end +
          " as INTEGER) ORDER BY CAST(id as INTEGER) ASC",
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
        message: "Parameter di perlukan (surahId, start, end).",
      });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

router.get("/surah", async (req, res) => {
  try {
    const id = req.query.id;
    if (id != null) {
      db.all(
        "SELECT * FROM ayah WHERE surah = " +
          id +
          " ORDER BY CAST(id as INTEGER) ASC",
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
        message: "Parameter di perlukan (id).",
      });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

router.get("/juz", async (req, res) => {
  try {
    const id = req.query.id;
    if (id != null) {
      db.all(
        "SELECT * FROM ayah WHERE juz = " +
          id +
          " ORDER BY CAST(id as INTEGER) ASC",
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
        message: "Parameter di perlukan (id).",
      });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

router.get("/page", async (req, res) => {
  try {
    const id = req.query.id;
    if (id != null) {
      db.all(
        "SELECT * FROM ayah WHERE page = " +
          id +
          " ORDER BY CAST(id as INTEGER) ASC",
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
        message: "Parameter di perlukan (id).",
      });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

router.get("/specific", async (req, res) => {
  try {
    const surahId = req.query.surahId;
    const ayahId = req.query.ayahId;
    if (surahId != null && ayahId != null) {
      db.get(
        "SELECT * FROM ayah WHERE surah = " + surahId + " AND ayah = " + ayahId,
        (err, data) => {
          if (err) {
            res.status(500).json({ status: 500, message: err.message });
          } else if (!data) {
            res.status(404).json({ status: 404, data: {} });
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

router.get("/find", async (req, res) => {
  try {
    const query = req.query.query;
    if (query != null && query.length > 3) {
      db.all(
        "SELECT * FROM ayah WHERE text LIKE '%" +
          query +
          "%' ORDER BY CAST(id as INTEGER) ASC",
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
        message: "Parameter di perlukan (query). Harus lebih dari 3 karakter.",
      });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
});

module.exports = router;
