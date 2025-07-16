import React from 'react';
import { FaBook, FaProjectDiagram, FaFileAlt, FaLaptop, FaIdCard, FaUserTie } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaBook className="text-4xl text-blue-600" />,
      title: "Assignment & Homework Assistance",
      description: "Expert guidance for all academic levels with timely delivery and quality solutions."
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-blue-600" />,
      title: "Project Preparation & Training",
      description: "End-to-end support for academic projects including research, writing, and presentation."
    },
    {
      icon: <FaFileAlt className="text-4xl text-blue-600" />,
      title: "Professional CV & Application Writing",
      description: "Standout resumes and cover letters tailored to your career goals and Ethiopian job market."
    },
    {
      icon: <FaUserTie className="text-4xl text-blue-600" />,
      title: "Online Job Application Support",
      description: "Complete assistance with job searches, online applications, and interview preparation."
    },
    {
      icon: <FaIdCard className="text-4xl text-blue-600" />,
      title: "National ID (Fayda) Printing",
      description: "Reliable service for digital ID card processing and printing."
    },
    {
      icon: <FaLaptop className="text-4xl text-blue-600" />,
      title: "IT & Computer Skills Training",
      description: "Practical digital literacy programs from basic computing to advanced software skills."
    }
  ];

  return (
    <section id="services" className="py-16 font-serif bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Our Academic & IT Services</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive support services designed to empower students and professionals in Ethiopia's digital landscape.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition hover:border-l-4 hover:border-blue-500">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;