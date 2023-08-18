const express = require("express");
const cors = require("cors");
const router = require("./src/routes/router");
const quranRoutes = require("./src/routes/quranRoutes");
const doaRoutes = require("./src/routes/doaRoutes");
const dzikirRoutes = require("./src/routes/dzikirRoutes");
const haditsRoutes = require("./src/routes/haditsRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use("/api/quran", quranRoutes);
app.use("/api/doa", doaRoutes);
app.use("/api/dzikir", dzikirRoutes);
app.use("/api/hadits", haditsRoutes);

app.listen(PORT, () => {
  console.log("Running at port:", PORT);
});
