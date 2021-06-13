import React, { useState } from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content } = props;
  const [isDone, setDone] = useState("false");
  const handleDelete = props.handleDelete;

  const handletoggle = () => {
    setDone(!isDone);
  };

  return <div className={isDone ? "": "done"} onClick={handletoggle}>
    {content}
    <button className="btn float-right" onClick={handleDelete}>Sil</button>
    </div>;
}

export default Todo;
