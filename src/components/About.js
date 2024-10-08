import React from "react";

const About = () => {
  return (
    <section id="about" className="p-10 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img
            src="/assets/img/profilabout.png"
            alt="Profile"
            className="w-full md:w-3/4 lg:w-2/3 h-auto rounded-lg mx-auto mb-8 md:mb-0"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">About Me</h2>
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Hello, I'm Frontend Developer
          </h1>
          <p className="mb-4 leading-relaxed">
            Informatics Engineering graduate with an interest in website development as a Frontend Web Developer. Has internship experience at PT Darmajaya Digital Solusi and has two years of experience as a Frontend Web Developer. As well as leadership and active experience contributions to various organizations. Coworkers who are friendly and eager to learn new things.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
