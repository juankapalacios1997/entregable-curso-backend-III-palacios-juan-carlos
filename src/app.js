import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
    res.send("Hello world");
});

app.listen(3000, () => console.log(`App listening on port 3000`));