import React from "react";
import axios from "axios";

export default function TodoComponent(props) {
  const token = localStorage.getItem("auth-token");
  const deleteTodo = async () => {
    await axios.delete("http://localhost:5000/todo/" + props.id, {
      headers: { "x-auth-token": token },
    });
    const todoList = await axios.get("http://localhost:5000/todo/all", {
      headers: { "x-auth-token": token },
    });
    props.setTodoList(todoList.data);
  };
  return (
    <div className="todo-component">
      <span>{props.message}</span>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
}
