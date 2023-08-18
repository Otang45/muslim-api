const surah = require("./json/surah.json");
const juz = require("./json/juz.json");
const ayah = require("./json/ayah.json");
const asbab = require("./json/asbab_nuzul.json");
const asma = require("./json/asmaul_husna.json");
const tafsir = require("./json/tafsir.json");
const theme = require("./json/theme.json");
const word = require("./json/word.json");

const getAllSurah = () => {
  return surah;
};
const getSurah = (surahId) => {
  return surah[surahId - 1];
};
const getAllJuz = () => {
  return juz;
};
const getJuz = (juzId) => {
  return juz[juzId - 1];
};
const getAllAyah = () => {
  return ayah;
};
const getAyahSurah = (surahId) => {
  var result = [];
  for (let index = 0; index < ayah.length; index++) {
    if (ayah[index].surah == surahId) {
      result.push(ayah[index]);
    }
  }
  return result;
};
const getAyah = (surahId, ayahId) => {
  var result = [];
  for (let index = 0; index < ayah.length; index++) {
    if (ayah[index].surah == surahId && ayah[index].ayah == ayahId) {
      result.push(ayah[index]);
    }
  }
  return result;
};
const getAyahJuz = (juzId) => {
  var result = [];
  for (let index = 0; index < ayah.length; index++) {
    if (ayah[index].juz == juzId) {
      result.push(ayah[index]);
    }
  }
  return result;
};
const getAyahPage = (pageId) => {
  var result = [];
  for (let index = 0; index < ayah.length; index++) {
    if (ayah[index].page == pageId) {
      result.push(ayah[index]);
    }
  }
  return result;
};
const getAllAsbab = () => {
  return asbab;
};
const getAsbab = (id) => {
  var result = [];
  for (let index = 0; index < asbab.length; index++) {
    if (asbab[index].id == id) {
      result.push(asbab[index]);
    }
  }
  return result;
};
const getAsma = () => {
  return asma;
};
const getAllTafsir = () => {
  return tafsir;
};
const getTafsir = (id) => {
  var result = [];
  for (let index = 0; index < tafsir.length; index++) {
    if (tafsir[index].id == id) {
      result.push(tafsir[index]);
    }
  }
  return result;
};
const getAllTheme = () => {
  return theme;
};
const getTheme = (id) => {
  var result = [];
  for (let index = 0; index < theme.length; index++) {
    if (theme[index].id == id) {
      result.push(theme[index]);
    }
  }
  return result;
};
const getAllWord = () => {
  return word;
};
const getWordSurah = (surahId) => {
  var result = [];
  for (let index = 0; index < word.length; index++) {
    const element = word[index];
    if (element.surah == surahId) {
      result.push(element);
    }
  }
  return result;
};
const getWord = (surahId, ayahId) => {
  var result = [];
  for (let index = 0; index < word.length; index++) {
    const element = word[index];
    if (element.surah == surahId && element.ayah == ayahId) {
      result.push(element);
    }
  }
  return result;
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
