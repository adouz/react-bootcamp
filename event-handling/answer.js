import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import "antd/dist/antd.css";

const HandleClick = () => {
  alert("Alert!!");
};
const element = (
  <Button style={{ margin: "10px 10px" }} type="primary" onClick={HandleClick}>
    Alert me!
  </Button>
);

ReactDOM.render(element, document.getElementById("root"));