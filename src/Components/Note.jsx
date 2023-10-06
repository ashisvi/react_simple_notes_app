import { BsTrashFill } from "react-icons/bs";
import { format } from "date-fns";

const Note = (props) => {
  const formatDate = (value) => {
    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let meridian = hrs < 12 ? "AM" : "PM";
    hrs = hrs > 12 ? hrs - 12 : hrs;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();
    let month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${meridian} ${day} ${month}`;
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(e) => props.updateText(props.note.id, e.target.value)}
      />
      <div className="note_footer">
        <p>{format(new Date(props.note.time), "do MMM,yyyy hh:mm a")}</p>
        <BsTrashFill onClick={() => props.deleteNote(props.note.id)} />
      </div>
    </div>
  );
};

export default Note;
