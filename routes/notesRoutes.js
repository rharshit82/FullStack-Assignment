const express = require("express");
const {addNote, fetchNote, fetchNotes, deleteNote} = require('../controllers/notesController');

const router = express.Router();

router.post("/getNote", fetchNote);
router.post("/getNotes", fetchNotes);

router.post("/createNote", addNote);
router.post("/deleteNote", deleteNote);

module.exports = router;
