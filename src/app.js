import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

import mocksRouter from "./routers/api/mocks.router.js";

const app = express();
const PORT = process.env.PORT;

mongoose.connect(`${process.env.MONGO_URL}`);

app.use(express.json());

app.get("/", (req, res, next) => {
    res.send("Hello world");
});

app.use("/api/mocks", mocksRouter());

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));