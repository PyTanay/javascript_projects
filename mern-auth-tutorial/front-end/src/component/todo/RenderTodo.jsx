import React from "react";
import TodoComponent from "./todoComponent";

export default function RenderTodo(props) {
  return (
    <div>
      {props.todoList.map((todo) => {
        return (
          <TodoComponent
            message={todo.title}
            key={todo._id}
            id={todo._id}
            setTodoList={props.setTodoList}
          />
        );
      })}
    </div>
  );
}
