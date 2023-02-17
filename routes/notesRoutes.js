const express = require("express");
const {addNote, fetchNote, fetchNotes} = require('../controllers/notesController');

const router = express.Router();

router.post("/getNote", fetchNote);
router.get("/getNotes", fetchNotes);

router.post("/createNote", addNote);

module.exports = router;
