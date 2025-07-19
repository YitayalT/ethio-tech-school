import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 font-serif md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 bg-teal-800 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold mb-4">
          Elevana Solutions - ኢሌቫና ሶሉሺንስ
          </h1>
          <p className="text-lg italic text-gray-200 mb-6">
            “Guiding You to a Brighter Tomorrow - እርስዎን ወደ ብሩህ ነገ የሚመራዎት!”
          </p>
          <p className="text-xl md:text-2xl italic mb-8">
            At Elevana Solutions, we believe in the power of knowledge, skills, and guidance to transform lives. Whether you're a student needing academic support, a job seeker polishing your CV, or a professional upskilling in tech — we are here to guide you to a brighter tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#services"
              className="bg-white text-teal-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 cursor-pointer text-center"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 cursor-pointer text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
