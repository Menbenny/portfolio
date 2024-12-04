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
                    "React",
                    "Node.JS",
                    "Next.JS",
                    "Redux",
                    "PostgreSQL",
                    "Neon",
                    "Python"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    );
}

export default Type