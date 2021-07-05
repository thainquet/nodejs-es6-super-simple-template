import express from "express";
import data from "./data";

const app: express.Application = express();
const port: number = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(data[0]);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
