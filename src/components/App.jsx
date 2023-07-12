import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [newItem, setNewItem] = useState([]);

  const handleClick = (inputText) => {
    setNewItem((prevValue) => {
      return [...prevValue, inputText];
    });
  };

  const deleteItem = (id) => {
    setNewItem((prevValue) => {
      return prevValue.filter((newItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div>
        <InputArea onAdd={handleClick} />
      </div>
      <div>
        <ul>
          {newItem.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item}
              onClick={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
