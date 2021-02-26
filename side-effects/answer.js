import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function UserForm() {
  const [input, setInput] = useState('');
  
  useEffect(() => {
    setInput(JSON.parse(localStorage.getItem("input")));
  }, []);
  
  const handleChanges = (elem) => {
    setInput(elem.target.value);
    localStorage.setItem("input", JSON.stringify(elem.target.value));
  };
  return (
    <div>
      <textarea value={input} onChange={handleChanges} rows="4" cols="50"></textarea>
    </div>
  );
}

ReactDOM.render(
  <div style={{ padding: "10px" }}>
    <UserForm />
  </div>,
  document.getElementById("root")
);
