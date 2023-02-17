const Note  = require('../models/noteModel') 
exports.addNote = (req, res) => {
  
  try {
    const { title, content, email, fruit } = req.body
    const newCode = new Note({ title, content, email, fruit });
    newCode.save();
    res.status(201).send(newCode._id);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong!" });
  }
}
exports.fetchNote = async (req, res) => {
    const { id } = req.body
    try {
      const note = await Note.findById(id)
      if (note) {
        return res.status(201).send(note)
      } else {
        return res.status(404).json({ message: 'Note not Found' })
      }
    } catch (err) {
      return res.status(500).json({ message: 'Some Error Occured' })
    }
  }

  

exports.fetchNotes = async (req, res) => {
  try {
    const notes = await Note.find({ email: req.body.email}).sort({ createdAt: -1 })
    return res.status(201).send(notes)
  } catch (err) {
    return res.status(404).json({ message: 'No Notes Found' })
  }
}
exports.deleteNote = async (req, res) => {
  try {
    const notes = await Note.deleteOne({ _id: req.body.id })
    return res.status(200).send(notes)
  } catch (err) {
    return res.status(404).json({ message: 'No Notes Found' })
  }
}

