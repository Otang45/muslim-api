<div align="center">
  <h1 align="center">MUSLIM API</h1>
  <p align="center">
    <strong>REST API Al-Quran Indonesia (Kemenag), Dzikir Harian, Kumpulan Doa, Hadits Arba'in.</strong>
  </p>
   <p align="center">
    <a href="https://api.dikiotang.com"><strong>Contoh</strong></a> · <a href="https://github.com/Otang45/muslim-api/issues"><strong>Laporkan Bug</strong></a> · <a href="https://github.com/Otang45/muslim-api/issues"><strong>Request Fitur</strong></a>
  </p>
  <a href="https://github.com/Otang45/muslim-api/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/Otang45/muslim-api">
  </a>
  <a href="https://github.com/Otang45/muslim-api/network/members">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/Otang45/muslim-api">
  </a>
  <a href="https://github.com/Otang45/muslim-api/stargazers">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/Otang45/muslim-api">
  </a>
  <a href="https://github.com/Otang45/muslim-api/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/Otang45/muslim-api">
  </a>
  <a href="https://github.com/Otang45/muslim-api/blob/main/LICENSE">
  <img alt="GitHub license" src="https://img.shields.io/github/license/Otang45/muslim-api">
  </a>
</div>



## Fitur
Rest Api ini menyediakan Al-Quran Indonesia, Kumpulan doa, Dzikir harian, dan Hadits arba'in. dari bebrapa sumber.

Fitur utama:
-  **Alquran** : Daftra Surah, daftar Juz, perhalaman, asbab nujul, asmaul husna, tafsir kemenag, kata per kata. [Quran Kemenag](https://quran.kemenag.go.id/)
-  **Doa-doa** : kumpulan doa-doa pilihan dari buku [Kumpulan doa sehari hari](https://jatim.kemenag.go.id/file/file/kumpulanbukuelektronik/pgdx1436850980.pdf)
-  **Dzikir** : Bacaan dzikir pagi, petang, dan sesudah solat.
-  **Hadits** : [Hadits Arba'in](https://haditsarbain.com/)
-  **Audio** : Audio murottal Shaykh Mishari Alafasy


## Penggunaan
|Endpoint|Contoh|Keterangan|
|----------|-----------|-----------|
|`/quran/surah`|[/quran/surah](https://api.dikiotang.com/quran/surah)|Daftar Surah|
|`/quran/surah/{surahId}`|[/quran/surah/114](https://api.dikiotang.com/quran/surah/114)|Informasi Surah|
|`/quran/juz`|[/quran/juz](https://api.dikiotang.com/quran/juz)|Daftar Juz|
|`/quran/juz/{juzId}`|[/quran/juz/30](https://api.dikiotang.com/quran/juz/30)|Informasi Juz|
|`/quran/ayah`|[/quran/ayah](https://api.dikiotang.com/quran/ayah)|Semua Ayat|
|`/quran/ayah/surah/{surahId}`|[/quran/ayah/surah/114](https://api.dikiotang.com/quran/ayah/surah/114)|Daftar Ayat berdasarkan Surah|
|`/quran/ayah/{surahId}/{ayahId}`|[/quran/ayah/114/1](https://api.dikiotang.com/quran/ayah/114/1)|Spesifik Ayat berdasarkan Surah|
|`/quran/ayah/juz/{juzId}`|[/quran/ayah/juz/30](https://api.dikiotang.com/quran/ayah/juz/30)|Daftar Ayat berdasarkan Juz|
|`/quran/ayah/page/{pageId}`|[/quran/ayah/page/604](https://api.dikiotang.com/quran/ayah/page/604)|Daftar Ayat berdasarkan Halaman|
|`/quran/asbab`|[/quran/asbab](https://api.dikiotang.com/quran/asbab)|Daftar Asbab Nujul|
|`/quran/asbab/{id}`|[/quran/asbab/1](https://api.dikiotang.com/quran/asbab/1)|Spesifik Asbab Nujur|
|`/quran/asma`|[/quran/asma](https://api.dikiotang.com/quran/asma)|Daftar Asmaul Husna|
|`/quran/tafsir`|[/quran/tafsir](https://api.dikiotang.com/quran/tafsir)|Semua Tafsir|
|`/quran/tafsir/{id}`|[/quran/tafsir/1](https://api.dikiotang.com/quran/tafsir/1)|Tafsir berdasarkan Ayat|
|`/quran/theme`|[/quran/theme](https://api.dikiotang.com/quran/theme)|Semua Tema (Topik)|
|`/quran/theme/{id}`|[/quran/theme/1](https://api.dikiotang.com/quran/theme/1)|Spesifik topik|
|`/quran/word`|[/quran/word](https://api.dikiotang.com/quran/word)|Semua kata|
|`/quran/word/{surahId}`|[/quran/word/1](https://api.dikiotang.com/quran/word/1)|Semua Kata berdasarkan Surah|
|`/quran/word/{surahId}/{ayahId}`|[/quran/word/1/1](https://api.dikiotang.com/quran/word/1/1)|Semua Kata berdasarkan Spesifik Ayat dari Surah|
|`/doa`|[/doa](https://api.dikiotang.com/doa)|Kumpulan Doa|
|`/doa/{sumber}`|[/doa/harian](https://api.dikiotang.com/doa/harian)|Spesifik Kategori Doa (quran, hadits, pilihan, harian, ibadah, haji, lainnya)|
|`/dzikir/{sumber}`|[/dzikir/pagi](https://api.dikiotang.com/dzikir/pagi)|Dzikir Harian (pagi, sore, solat)|
|`/hadits`|[/hadits](https://api.dikiotang.com/hadits)|Daftar Hadits|
|`/hadits/{nomor}`|[/hadits/1](https://api.dikiotang.com/hadits/1)|Spesifik Hadits berdasarkan Nomor|

## Project
Contoh aplikasi saya menggunakan api ini.

[![Play Store](https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=otang.app.muslim)

Dideploy ke

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)