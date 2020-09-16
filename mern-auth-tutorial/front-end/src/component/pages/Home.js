import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Todo from "../todo/Todo";

export default function Home() {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (!userData.user) history.push("/login");
  });
  return (
    <div className="page">
      <Todo />
    </div>
  );
}
