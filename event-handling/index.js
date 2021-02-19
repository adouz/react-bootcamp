import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import "antd/dist/antd.css";

const element = (
  <Button style={{ margin: "10px 10px" }} type="primary"></Button>
);

ReactDOM.render(element, document.getElementById("root"));