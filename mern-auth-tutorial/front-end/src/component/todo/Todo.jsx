import React, { useEffect, useState } from "react";
// import UserContext from "../../context/UserContext";
import axios from "axios";
import RenderTodo from "./RenderTodo";
import ErrorNotice from "../misc/ErrorNotice";

export default function Todo() {
  //   const { userData } = useContext(UserContext);
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState();
  useEffect(() => {
    try {
      const getTodoList = async () => {
        let token = localStorage.getItem("auth-token");
        const todoList = await axios.get("http://localhost:5000/todo/all", {
          headers: { "x-auth-token": token },
        });
        setTodoList(todoList.data);
      };
      getTodoList();
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  }, []);
  const createTodo = async () => {
    let token = localStorage.getItem("auth-token");
    const todo = {
      title: newTodo,
    };
    await axios.post("http://localhost:5000/todo/", todo, {
      headers: { "x-auth-token": token },
    });
    const todoList = await axios.get("http://localhost:5000/todo/all", {
      headers: { "x-auth-token": token },
    });
    setTodoList(todoList.data);
  };
  return (
    <div className="todo">
      <h1>Todo List</h1>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button id="addbutton" onClick={createTodo}>
        Add to the list!
      </button>
      <RenderTodo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
