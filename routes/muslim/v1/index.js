const express = require("express");
const router = express.Router();
const db = require("../../../database/config");

const asbab = require("./asbab");
const asma = require("./asma");
const ayah = require("./ayah");
const doa = require("./doa");
const dzikir = require("./dzikir");
const hadits = require("./hadits");
const juz = require("./juz");
const surah = require("./surah");
const tafsir = require("./tafsir");
const theme = require("./theme");
const word = require("./word");

router.get("/", (req, res) => {
  res.status(200).send({
    quran: {
      surah: {
        daftarSurah: {
          pattern: "/surah",
        },
        infoSurah: {
          pattern: "/surah?surahId={surahId}",
          contoh: "/surah?surahId=114",
        },
      },
      juz: {
        daftarJuz: {
          pattern: "/juz",
        },
        infoJuz: {
          pattern: "/juz?juzId={juzId}",
          contoh: "/juz?juzId=30",
        },
      },
      ayat: {
        semuaAyat: {
          pattern: "/ayah",
        },
        spesifikSurah: {
          pattern: "/ayah/surah?surahId={surahId}",
          contoh: "/ayah/surah?surahId=114",
        },
        spesifikAyat: {
          pattern: "/ayah/surah?surahId={surahId}&ayahId={ayahId}",
          contoh: "/ayah/surah?surahId=114&ayahId=1",
        },
        spesifikJuz: {
          pattern: "/ayah/juz?juzId={juzId}",
          contoh: "/ayah/juz?juzId=30",
        },
        spesifikHalaman: {
          pattern: "/ayah/page?pageId={pageId}",
          contoh: "/ayah/page?pageId=604",
        },
        ayatRange: {
          pattern: "/ayah/range?surahId={surahId}&start={start}&end={end}",
          contoh: "/ayah/range?surahId=1&start=3&end=5",
        },
      },
      asbabNujul: {
        semua: {
          pattern: "/asbab",
        },
        spesifik: {
          pattern: "/asbab?asbabId={id}",
          contoh: "/asbab?asbabId=1",
        },
      },
      asmaulHusna: {
        pattern: "/asma",
      },
      tafsir: {
        semua: {
          pattern: "/tafsir",
        },
        spesifik: {
          pattern: "/tafsir?tafsirId={id}",
          contoh: "/tafsir?tafsirId=1",
        },
      },
      tema: {
        semua: {
          pattern: "/theme",
        },
        spesifik: {
          pattern: "/theme?themeId={id}",
          contoh: "/theme?themeId=1",
        },
      },
      kataPerKata: {
        semua: {
          pattern: "/word",
        },
        spesifikSurah: {
          pattern: "/word?surahId={surahId}",
          contoh: "/word?surahId=1",
        },
        spesifikAyat: {
          pattern: "/word?surahId={surahId}&ayahId={ayahId}",
          contoh: "/word?surahId=1&ayahId=1",
        },
      },
    },
    doa: {
      semua: {
        pattern: "/doa",
      },
      spesifik: {
        pattern: "/doa?source={source}",
        source: "quran, hadits, pilihan, harian, ibadah, haji, lainnya",
        contoh: "/doa?source=harian",
      },
    },
    dzikir: {
      pattern: "/dzikir?type={sumber}",
      type: "pagi, sore, solat",
      contoh: "/dzikir?type=pagi",
    },
    hadits: {
      semua: {
        pattern: "/hadits",
      },
      spesifik: {
        pattern: "/hadits?nomor={nomor}",
        contoh: "/hadits?nomor=1",
      },
    },
    maintaner: "Otang45",
  });
});

router.use("/quran/asbab", asbab);
router.use("/quran/asma", asma);
router.use("/quran/ayah", ayah);
router.use("/doa", doa);
router.use("/dzikir", dzikir);
router.use("/hadits", hadits);
router.use("/quran/juz", juz);
router.use("/quran/surah", surah);
router.use("/quran/tafsir", tafsir);
router.use("/quran/theme", theme);
router.use("/quran/word", word);

const closeDb = () => {
  db.close((err) => {
    if (err) {
      console.error("Error closeing database.", err.message);
    } else {
      console.log("Database closed.");
    }
    process.exit(0);
  });
};

process.on("SIGINT", closeDb);
process.on("SIGTERM", closeDb);
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: ", err);
  closeDb();
});

module.exports = router;
