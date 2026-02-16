import express from "express";

import mocksRouter from "./routers/api/mocks.router.js";

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
    res.send("Hello world");
});

app.use("/api/mocks", mocksRouter())

app.listen(3000, () => console.log(`App listening on port 3000`));