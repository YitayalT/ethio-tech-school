import React from 'react';
import {
  FaGlobeAfrica,
  FaPassport,
  FaBook,
  FaFileAlt,
  FaPenFancy,
  FaUserTie,
  FaBullhorn,
  FaCode,
  FaTasks
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaGlobeAfrica className="text-4xl text-teal-600" />,
      title: "Scholarship Application",
      description: "Complete assistance in identifying and applying for scholarships with strong documentation support."
    },
    {
      icon: <FaPassport className="text-4xl text-teal-600" />,
      title: "Online Passport & Visa Appointment",
      description: "Streamlined application support for passport and visa appointment bookings."
    },
    {
      icon: <FaBook className="text-4xl text-teal-600" />,
      title: "Assignment & Homework Assistance",
      description: "Expert academic help with timely, high-quality solutions for all levels."
    },
    {
      icon: <FaFileAlt className="text-4xl text-teal-600" />,
      title: "Professional CV & Application Letter Writing",
      description: "Tailored CVs and job application letters to enhance your professional profile."
    },
    {
      icon: <FaPenFancy className="text-4xl text-teal-600" />,
      title: "Motivation, Cover Letter or Personal Statement",
      description: "Compelling and personalized letters to make your academic or job applications stand out."
    },
    {
      icon: <FaUserTie className="text-4xl text-teal-600" />,
      title: "Online Job Application Support",
      description: "Step-by-step support in finding jobs and completing online job applications."
    },
    {
      icon: <FaBullhorn className="text-4xl text-teal-600" />,
      title: "Boost Your Business on Social Media",
      description: "Grow your brand with our tailored content, marketing strategies, and engagement support on social platforms."
    },
    {
      icon: <FaCode className="text-4xl text-teal-600" />,
      title: "Programming Language & AI Tools Teaching",
      description: "Learn programming and how to use AI tools effectively for personal or professional use."
    },
    {
      icon: <FaTasks className="text-4xl text-teal-600" />,
      title: "Any Online Application Support",
      description: "We help you complete any type of online form or application with precision."
    }
  ];

  return (
    <section id="services" className="py-16 font-serif bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-teal-800">Our Academic & Digital Services</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide smart, reliable, and affordable academic and IT support services tailored to your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition hover:border-l-4 hover:border-teal-600">
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
