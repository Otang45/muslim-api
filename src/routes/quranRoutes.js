const express = require("express");
const quranController = require("../controllers/quranController");
const router = express.Router();

router.get("/surah", quranController.getAllSurah);
router.get("/surah/:surahId", quranController.getSurah);
router.get("/juz", quranController.getAllJuz);
router.get("/juz/:juzId", quranController.getJuz);
router.get("/ayah", quranController.getAllAyah);
router.get("/ayah/surah/:surahId", quranController.getAyahSurah);
router.get("/ayah/:surahId/:ayahId", quranController.getAyah);
router.get("/ayah/juz/:juzId", quranController.getAyahJuz);
router.get("/ayah/page/:pageId", quranController.getAyahPage);
router.get("/asbab", quranController.getAllAsbab);
router.get("/asbab/:id", quranController.getAsbab);
router.get("/asma", quranController.getAsma);
router.get("/tafsir", quranController.getAllTafsir);
router.get("/tafsir/:id", quranController.getTafsir);
router.get("/theme", quranController.getAllTheme);
router.get("/theme/:id", quranController.getTheme);
router.get("/word", quranController.getAllWord);
router.get("/word/:surahId/", quranController.getWordSurah);
router.get("/word/:surahId/:ayahId", quranController.getWord);

module.exports = router;
