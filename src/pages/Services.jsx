import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { title: 'Web Design', description: 'We create beautiful websites' },
    { title: 'Web Development', description: 'We build functional web applications' },
    { title: 'SEO', description: 'We optimize websites for search engines' },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <div className="relative mb-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full text-left"
          >
            {selectedService ? selectedService.title : 'Select a Service'}
          </button>
          {isOpen && (
            <ul className="absolute bg-white border border-gray-300 rounded mt-1 w-full">
              {services.map((service, index) => (
                <li
                  key={index}
                  onClick={() => handleServiceClick(service)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {service.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        {selectedService && (
          <ServiceCard
            title={selectedService.title}
            description={selectedService.description}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Services;