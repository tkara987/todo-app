import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  const {deleteItem} = props;
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li className="list-group-item">
              <TodoItem {...todo} key={todo.id} handleDeleteButton={(id) => deleteItem(id)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
