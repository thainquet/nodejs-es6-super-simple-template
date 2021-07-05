import express from "express";
import path from "path";
import data from "./data";

const srcDir = path.resolve(__dirname, "..");
const router = express.Router();

const timeLog = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

router.use(timeLog);

router.get("/", (req, res) => {
  res.sendFile(srcDir + "/html/index.html");
});

router.get("/data", (req, res) => {
  res.send(data[0]);
});

export default router;
