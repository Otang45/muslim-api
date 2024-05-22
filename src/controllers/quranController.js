const quranService = require("../services/quranService");

const getAllSurah = (req, res) => {
  res.send({ data: quranService.getAllSurah() });
};
const getSurah = (req, res) => {
  const { surahId } = req.params;
  res.send({ data: quranService.getSurah(surahId) });
};
const getAllJuz = (req, res) => {
  res.send({ data: quranService.getAllJuz() });
};
const getJuz = (req, res) => {
  const { juzId } = req.params;
  res.send({ data: quranService.getJuz(juzId) });
};
const getAllAyah = (req, res) => {
  res.send({ data: quranService.getAllAyah() });
};
const getAyahSurah = (req, res) => {
  const { surahId } = req.params;
  res.send({ data: quranService.getAyahSurah(surahId) });
};
const getAyah = (req, res) => {
  const { surahId, ayahId } = req.params;
  res.send({ data: quranService.getAyah(surahId, ayahId) });
};
const getAyahRange = (req, res) => {
  const { surahId, startId, endId } = req.params;
  res.send({ data: quranService.getAyahRange(surahId, startId, endId) });
};
const getAyahJuz = (req, res) => {
  const { juzId } = req.params;
  res.send({ data: quranService.getAyahJuz(juzId) });
};
const getAyahPage = (req, res) => {
  const { pageId } = req.params;
  res.send({ data: quranService.getAyahPage(pageId) });
};
const getAllAsbab = (req, res) => {
  res.send({ data: quranService.getAllAsbab() });
};
const getAsbab = (req, res) => {
  const { id } = req.params;
  res.send({ data: quranService.getAsbab(id) });
};
const getAsma = (req, res) => {
  res.send({ data: quranService.getAsma() });
};
const getAllTafsir = (req, res) => {
  res.send({ data: quranService.getAllTafsir() });
};
const getTafsir = (req, res) => {
  const { id } = req.params;
  res.send({ data: quranService.getTafsir(id) });
};
const getAllTheme = (req, res) => {
  res.send({ data: quranService.getAllTheme() });
};
const getTheme = (req, res) => {
  const { id } = req.params;
  res.send({ data: quranService.getTheme(id) });
};
const getAllWord = (req, res) => {
  res.send({ data: quranService.getAllWord() });
};
const getWordSurah = (req, res) => {
  const { surahId } = req.params;
  res.send({ data: quranService.getWordSurah(surahId) });
};
const getWord = (req, res) => {
  const { surahId, ayahId } = req.params;
  res.send({ data: quranService.getWord(surahId, ayahId) });
};

module.exports = {
  getAllSurah,
  getSurah,
  getAllJuz,
  getJuz,
  getAyahSurah,
  getAyah,
  getAyahRange,
  getAyahJuz,
  getAllAyah,
  getAyahPage,
  getAllAsbab,
  getAsbab,
  getAsma,
  getAllTafsir,
  getTafsir,
  getAllTheme,
  getTheme,
  getAllWord,
  getWordSurah,
  getWord,
};
