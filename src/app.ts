import express from "express";
import data from "./data";
import path from "path";
import morgan from "morgan";

const srcDir = path.resolve(__dirname, "..");

const app: express.Application = express();
const port: number = 3000;

app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/", (req, res) => {
  res.sendFile(srcDir + "/html/index.html");
});

app.get("/data", (req, res) => {
  res.send(data[0]);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
