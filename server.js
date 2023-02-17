const express = require("express") ;
const notesRoutes = require("./routes/notesRoutes.js") ;
const dotenv = require("dotenv") ;
const dbConnect = require("./middlewares/db.js") ;
const Note = require("./models/noteModel.js") ;


const path = require("path");


//Initialising dotenv
dotenv.config();
//Initialising database
dbConnect();

//Initialising Express
const app = express();
//Bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic Routes
app.use("/notes", notesRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
//   });
// }
const PORT = process.env.PORT;
const server = app.listen(PORT || 5000, () => console.log("Server Running"));
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("Connected to socket!");
  socket.on("joined", async ({ noteDbId }) => {
    console.log(noteDbId);
    socket.join(noteDbId);
  });
  socket.on("enteringNote", async ({ note, noteDbId }) => {
    console.log(note);
    await Note.findOneAndUpdate(
      { _id: noteDbId },
      {
        $set: {
            note,
        },
      }
    );
    socket.to(noteDbId).emit("recievingNote", { recCode: note });
  });
  socket.on("enteringInp", ({ inp, roomDbId }) => {
    console.log(inp);
    socket.to(roomDbId).emit("receivingInp", { inp });
  });
});


