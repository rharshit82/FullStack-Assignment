import express from "express";

const router = express.Router();

router.post("/", (req, res) => res.send("API is Working"));

export default router;
