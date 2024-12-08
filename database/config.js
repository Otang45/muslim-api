const sqlite3 = require("sqlite3").verbose();
const dbFile = __dirname + "/../database/alquran.db";

const db = new sqlite3.Database(dbFile, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error("Error open database.", err.message);
  } else {
    console.log("Database connected.");
  }
});

module.exports = db;
