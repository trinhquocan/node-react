import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./routes/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

configViewEngine(app);

initWebRouter(app);


app.listen(PORT, () => {
    console.log("RUNNING WITH " + PORT);
})