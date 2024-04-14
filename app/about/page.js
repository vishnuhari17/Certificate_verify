import React from "react";
import Techstack from "./Techstack";
import Aboutcard from "./Aboutcard";


function About() {
  return (
    <div className="flex flex-col items-center about-section py-10">
      <div className="max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center py-6">
          <div className="flex flex-col items-center p-4">
            <h1 className="text-3xl md:text-4xl text-center md:text-left pb-6">
              What is this site <strong className="text-white">ABOUT?</strong>
            </h1>
            <Aboutcard />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl text-center font-semibold text-white my-10">
          Stack and Tools <strong className="text-white">Used</strong>
        </h1>
        <Techstack />
      </div>
    </div>
  );
}

export default About;
