const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("api/index", {
    title: "Otang | Rest Api Muslim",
  });
});

router.get("/other", (req, res, next) => {
  res.render("api/other", {
    title: "Otang | Lainnya",
    layout: "./layouts/api",
  });
});

module.exports = router;
