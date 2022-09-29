import logo from "./logo.svg";
import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";
const URL = "http://localhost:3001/";
function App() {
  const [message, setMessage] = useState("test");
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage(error);
      });
  }, []);
  return (
    <div>
      <h3>This message was retrieved from my node js server</h3>
      <p>{message}</p>
    </div>
  );
}

export default App;
