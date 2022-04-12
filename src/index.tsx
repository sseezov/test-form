import React, { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./form";
import Profile from "./profile";
import { UserContext } from "./UserContext";

function Main() {
  const [name, setName] = useState();
  let [userLog, setUserLog] = useState(false);

  return (
    <UserContext.Provider value={{ name, setName, userLog, setUserLog }}>
      <BrowserRouter>
        <h1>ONLY.</h1>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
