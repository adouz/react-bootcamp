import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import VanillaTilt from "vanilla-tilt";
import "./styles.css";

function Tilt({ options }) {
  const tilt = useRef(null);
  const imgtilt = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
    VanillaTilt.init(imgtilt.current, {
      scale: 0.8,
      speed: 1000,
      max: 10
    });
  }, [options]);

  return (
    <div ref={tilt} className="box">
      <img
        ref={imgtilt}
        alt="react logo"
        src="https://cdn.auth0.com/blog/react-js/react.png"
      />
    </div>
  );
}

const options = {
  scale: 1.5,
  speed: 1000,
  max: 30
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <Tilt options={options} />
  </>,
  rootElement
);
