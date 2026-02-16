import { Router } from "express";

export default function mocksRouter() {
    const router = Router();

    router.get("/", (req, res, next) => {
        res.send("Mocks");
    });

    return router;
}