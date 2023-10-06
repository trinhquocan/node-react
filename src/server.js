import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./routes/web";
require("dotenv").config();
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8080;

configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRouter(app);

app.listen(PORT, () => {
    console.log("RUNNING WITH " + PORT);
})