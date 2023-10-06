import Note from "./Note";

const NoteContainer = (props) => {
  const reverseArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      array.push(arr[i]);
    }

    return array;
  };

  const notes = reverseArray(props.notes);

  const updateText = (id, newText) => {
    const note = props.notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    );
    props.setNotes(note);
  };

  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container_notes custom-scroll">
        {notes?.length ? (
          notes.map((note) => (
            <Note
              note={note}
              key={note.id}
              deleteNote={props.deleteNote}
              updateText={updateText}
            />
          ))
        ) : (
          <h3>No notes present</h3>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
