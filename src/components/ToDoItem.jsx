import React, { useState } from "react";

const ToDoItem = (props) => {
  const [decoration, setDecoration] = useState(false);

  const handleChecked = () => setDecoration((prevValue) => !prevValue);

  //TODO add a functionality for when click on the checkbox of a list item, the list item should get cross and after 24 hrs the cross list should get deleted automatically from the todo list

  return (
    <div
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      <li style={{ textDecoration: decoration ? "line-through" : "none" }}>
        {/* <input type="checkbox" onClick={handleChecked} /> */}
        {props.text}
      </li>
    </div>
  );
};

export default ToDoItem;
