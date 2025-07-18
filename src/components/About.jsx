import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 font-serif">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">About Us</h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Our Team"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-teal-800">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Elevana Solutions was founded to empower individuals globally by simplifying the process of student and professional development—from scholarship, visa, and passport applications to CV writing, job support, and academic help. What began as online tutoring and career support has blossomed into a comprehensive platform for educational and technical growth. We are committed to guiding you through every step of your journey—digital, academic, or professional.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-teal-800">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              Our mission is to be your trusted partner in navigating any online application—scholarships, visas, job portals—and to equip you with essential digital skills, programming knowledge, and professional confidence. We deliver personalized, high-quality training and application support designed to unlock opportunities and elevate your future. At Elevana Solutions, your success is our purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;