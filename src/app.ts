import express from "express";
import morgan from "morgan";
import router from "./routers";

const app: express.Application = express();
const port: number = 3000;

app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/", router);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
