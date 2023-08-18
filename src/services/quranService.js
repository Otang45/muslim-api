const quran = require("../database/quran");

const getAllSurah = () => {
  return quran.getAllSurah();
};
const getSurah = (surahId) => {
  return quran.getSurah(surahId);
};
const getAllJuz = () => {
  return quran.getAllJuz();
};
const getJuz = (juzId) => {
  return quran.getJuz(juzId);
};
const getAllAyah = () => {
  return quran.getAllAyah();
};
const getAyahSurah = (surahId) => {
  return quran.getAyahSurah(surahId);
};
const getAyah = (surahId, ayahId) => {
  return quran.getAyah(surahId, ayahId);
};
const getAyahJuz = (juzId) => {
  return quran.getAyahJuz(juzId);
};
const getAyahPage = (pageId) => {
  return quran.getAyahPage(pageId);
};
const getAllAsbab = () => {
  return quran.getAllAsbab();
};
const getAsbab = (id) => {
  return quran.getAsbab(id);
};
const getAsma = () => {
  return quran.getAsma();
};
const getAllTafsir = () => {
  return quran.getAllTafsir();
};
const getTafsir = (id) => {
  return quran.getTafsir(id);
};
const getAllTheme = () => {
  return quran.getAllTheme();
};
const getTheme = (id) => {
  return quran.getTheme(id);
};
const getAllWord = () => {
  return quran.getAllWord();
};
const getWordSurah = (surahId) => {
  return quran.getWordSurah(surahId);
};
const getWord = (surahId, ayahId) => {
  return quran.getWord(surahId, ayahId);
};

module.exports = {
  getAllSurah,
  getSurah,
  getAllJuz,
  getJuz,
  getAyahSurah,
  getAyah,
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
