import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 font-serif md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Welcome to Ethio Tech School</h1>
          <p className="text-xl md:text-2xl mb-8">
            We offer specialized academic support and IT services, from homework help to job application assistance and IT skills training.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#services"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 cursor-pointer text-center"
            >
              Our Services
            </a>
            <a 
              href="#contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 cursor-pointer text-center"
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