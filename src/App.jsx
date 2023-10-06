import { useEffect, useState } from "react";
import NoteContainer from "./Components/NoteContainer";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now() + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = notes.filter((note) => note.id !== id);
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        setNotes={setNotes}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
