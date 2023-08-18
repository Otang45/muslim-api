const express = require("express");
const router = express.Router();

router.get((req, res, next) => {
  res.setHeader(
    "Cache-Control",
    "public, max-age=0, s-maxage=86400, stale-while-revalidate"
  );
  next();
});
router.get("/", (req, res) =>
  res.status(200).send({
    quran: {
      surah: {
        daftarSurah: {
          pattern: "/quran/surah",
        },
        infoSurah: {
          pattern: "/quran/surah/{surahId}",
          contoh: "/quran/surah/114",
        },
      },
      juz: {
        daftarJuz: {
          pattern: "/quran/juz",
        },
        infoJuz: {
          pattern: "/quran/juz/{juzId}",
          contoh: "/quran/juz/30",
        },
      },
      ayat: {
        semuaAyat: {
          pattern: "/quran/ayah",
        },
        spesifikSurah: {
          pattern: "/quran/ayah/surah/{surahId}",
          contoh: "/quran/ayah/surah/114",
        },
        spesifikAyat: {
          pattern: "/quran/ayah/{surahId}/{ayahId}",
          contoh: "/quran/ayah/surah/114/1",
        },
        spesifikJuz: {
          pattern: "/quran/ayah/juz/{juzId}",
          contoh: "/quran/ayah/juz/30",
        },
        spesifikHalaman: {
          pattern: "/quran/ayah/page/{pageId}",
          contoh: "/quran/ayah/page/604",
        },
      },
      asbabNujul: {
        semua: {
          pattern: "/quran/asbab",
        },
        spesifik: {
          pattern: "/quran/asbab/{id}",
          contoh: "/quran/asbab/1",
        },
      },
      asmaulHusna: "/quran/asma",
      tafsir: {
        semua: {
          pattern: "/quran/tafsir",
        },
        spesifik: {
          pattern: "/quran/tafsir/{id}",
          contoh: "/quran/tafsir/1",
        },
      },
      tema: {
        semua: {
          pattern: "/quran/theme",
        },
        spesifik: {
          pattern: "/quran/theme/{id}",
          contoh: "/quran/theme/1",
        },
      },
      kataPerKata: {
        semua: {
          pattern: "/quran/word",
        },
        spesifikSurah: {
          pattern: "/quran/word/{surahId}",
          contoh: "/quran/word/1",
        },
        spesifikAyat: {
          pattern: "/quran/word/{surahId}/{ayahId}",
          contoh: "/quran/word/1/1",
        },
      },
    },
    doa: {
      semua: {
        pattern: "/doa",
      },
      spesifik: {
        pattern: "/doa/{sumber}",
        sumber: "quran, hadits, pilihan, harian, ibadah, haji, lainnya",
        contoh: "/doa/harian",
      },
    },
    dzikir: {
      semua: {
        pattern: "/dzikir",
      },
      spesifik: {
        pattern: "/dzikir/{sumber}",
        sumber: "pagi, sore, solat",
        contoh: "/dzikir/pagi",
      },
    },
    hadits: {
      semua: {
        pattern: "/hadits",
      },
      spesifik: {
        pattern: "/hadits/{nomor}",
        contoh: "/hadits/1",
      },
    },
    maintaner: "Otang45",
  })
);
router.all("*", (req, res) =>
  res.status(404).send({
    code: 404,
    status: "Not Found.",
    message: `Resource "${req.url}" is not found.`,
  })
);

module.exports = router;
