import Note from '../models/noteModel.js'
export const addNotes = (req, res) => {
  const { title, content } = req.body
  Note.create(
    {
      author: req.user._id,
      title,
      content,
    },
    (err, note) => {
      if (err) {
        return res.status(400).json({ message: 'Invalid Note data' })
      }
      return res.status(201).json({ message: 'Note Added Successfuly' })
    }
  )
}

export const fetchNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ createdAt: -1 })
    return res.status(201).send(notes)
  } catch (err) {
    return res.status(404).json({ message: 'No Notes Found' })
  }
}

export const fetchNote = async (req, res) => {
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
