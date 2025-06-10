import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-800 flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-white mb-8 animate-bounce">
        Hasta la Vista ;)
      </h1>
      <p className="text-xl text-gray-200 max-w-md text-center">
        This is a fun about page with a Terminator-inspired greeting!
      </p>
    </div>
  );
}

export default About;