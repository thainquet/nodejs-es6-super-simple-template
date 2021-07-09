import express from "express";
import path from "path";
import multer from "multer";
import { Symbol } from "./model/symbol.model";
const srcDir = path.resolve(__dirname, ".");
const uploadDir = path.resolve(__dirname, "./uploads");
const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const timeLog = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

router.use(timeLog);

router.get("/", (req, res) => {
  res.sendFile(srcDir + "/static/index.html");
});

router.get("/page", (req, res) => {
  res.sendFile(srcDir + "/static/copy.html");
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

router.post(
  "/api/upload",
  multer({ storage }).single("file"),
  async (req: any, res) => {
    res.json(req.file);
  }
);

export default router;
