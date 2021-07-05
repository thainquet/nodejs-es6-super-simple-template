"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = __importDefault(require("./data"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send(data_1.default[0]);
});
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
