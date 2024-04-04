// CustomType.js
import React from "react";
import Typewriter from "typewriter-effect";

function CustomType() {
  return (
    <Typewriter
      options={{
        strings: [
          "Welcome to our Custom Project",
          "Explore our Services",
          "Engage with our Community",
          "Enjoy your Visit!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default CustomType;