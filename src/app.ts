import express from "express";
import morgan from "morgan";
import router from "./router";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const connection = mongoose.connection;
const app: express.Application = express();
const port: string | number = process.env.PORT || 3000;

connection.once("open", () => {
  console.log("Mongodb database connection established successfully !!");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use("/", router);
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
