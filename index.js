const express = require("express");
const cors = require("cors");
const router = require("./src/routes/router");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log("Running at port:", PORT);
});
