import express from "express";
import mongoose from "mongoose";

import mocksRouter from "./routers/api/mocks.router.js";

const app = express();
const PORT = 3000;

// mongoose.connect("mongodb+srv://jcmaster97_db_user:TKDNQVj99JySvi8P@testcluster.tq5mbma.mongodb.net/?appName=TestCluster");

app.use(express.json());

app.get("/", (req, res, next) => {
    res.send("Hello world");
});

app.use("/api/mocks", mocksRouter());

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));