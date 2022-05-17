import React from "react";
import Typed from "react-typed";
import "./Splash.css";

const Splash = () => {
  return (
    <div className="row">
      <img className="splashimage" src="./images/clock-vector.svg" />
      <img className="splashmobile" src="./images/Splash-mobile.jpg" />

      <Typed
        className="typed"
        strings={["Welcome to SMIT Weaver", "Ready to Get Started?"]}
        typeSpeed={80}
        backSpeed={40}
        backDelay={1500}
        loop
      ></Typed>
    </div>
  );
};

export default Splash;
