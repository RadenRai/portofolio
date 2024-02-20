import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-4" style={{ textAlign: "justify" }}>
          Talented professional with a strong background in software engineering, data science, and data analysis. Skilled in building scalable, reliable, and high-performance systems. Proficient in various programming languages, frameworks, and technologies commonly used in the industry. Experienced in working with various databases and operating systems to effectively manipulate and analyze large data sets, extract valuable insights, and develop robust solutions. Demonstrated ability to deliver high-quality and timely solutions. Ready to tackle the challenges presented in software engineering, data science, or data analytics, with the goal of making a significant impact through the insights and solutions created.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
