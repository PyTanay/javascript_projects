import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Header from "./component/layout/Header";
import Home from "./component/pages/Home";
import UserContext from "./context/UserContext";
import "./style.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: {},
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = localStorage.getItem("auth-token");
      }
      const tokenRes = await axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
