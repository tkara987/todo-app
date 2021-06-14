import React, { useState } from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id, handleDeleteButton } = props;
  const [isDone, setDone] = useState("false");

  const handletoggle = () => {
    setDone(!isDone);
  };

  return <div className={isDone ? "": "done"} onClick={handletoggle}>
    {content}
    <button className="btn float-right" onClick={() => handleDeleteButton(id)}>Sil</button>
    </div>;
}

export default Todo;
