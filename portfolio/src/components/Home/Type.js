import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          
          "Full Stack Developer",
          "JavaScript",
          "TypeScript",
          "Redux",
          "PostgreSQL",
          "Developers Institute graduate",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
