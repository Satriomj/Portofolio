import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Home = () => {
  return (
    <section id="home" className="flex flex-col lg:flex-row items-center justify-between p-10 min-h-screen bg-gray-100">
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 pt-20"> 
        <img src="/assets/img/profil.png" alt="Satriomj" className="rounded-full w-80 h-80 object-cover" />
      </div>

      <div className="w-full lg:w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          Hallo, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Satriomj</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">And I'm a Frontend Developer</h2>
        <p className="text-gray-600 mb-6">
          Jangan pernah menganggap belajar sebagai tugas, tetapi anggaplah sebagai kesempatan berharga untuk mempelajari sesuatu.
          <br />
          <span className="italic">- Albert Einstein</span>
        </p>

        <div className="flex space-x-4">
          <a href="https://instagram.com/satriomjs" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-lg hover:shadow-blue-400 transition-shadow duration-300 text-pink-500 hover:text-pink-700 text-3xl">
            <FaInstagram />
          </a>

          <a href="https://linkedin.com/in/satriomj" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-lg hover:shadow-blue-400 transition-shadow duration-300 text-blue-500 hover:text-blue-700 text-3xl">
            <FaLinkedin />
          </a>

          <a href="https://github.com/Satriomj" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-lg hover:shadow-blue-400 transition-shadow duration-300 text-gray-800 hover:text-gray-900 text-3xl">
            <FaGithub />
          </a>
        </div>
        <div className="mt-6">
          <a href="/assets/file/CV-Satrio Maruli Jaya Sianturi.pdf" download className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-blue-400 hover:bg-blue-600 transition-shadow duration-300">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
