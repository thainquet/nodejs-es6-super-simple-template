import express from "express";
import path from "path";
import { Symbol } from "./model/symbol.model";
const srcDir = path.resolve(__dirname, ".");
const router = express.Router();

const timeLog = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

router.use(timeLog);

router.get("/", (req, res) => {
  res.sendFile(srcDir + "/static/index.html");
});

router.get("/page", (req, res) => {
  res.sendFile(srcDir + "/static/index.html");
});

router.get("/search/:queryName", async (req, res) => {
  const { queryName } = req.params;
  console.log(queryName);
  try {
    const result = await Symbol.find({
      Symbol: { $regex: ".*" + queryName + ".*" },
    }).exec();
    console.log(result);
    res.send(result);
  } catch (err) {
    res.status(400).json("Error: " + err.message);
  }
});

export default router;
