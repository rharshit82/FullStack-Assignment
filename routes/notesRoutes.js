const express = require("express");

const router = express.Router();

router.post("/", (req, res) => res.send("API is Working"));

module.export = router;
