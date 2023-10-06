import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const Sidebar = (props) => {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar custom-scroll">
      <FaPlusCircle onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((color, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: color }}
            onClick={() => {
              props.addNote(color);
              setListOpen(false);
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
