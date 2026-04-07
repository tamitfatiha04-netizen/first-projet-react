import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card bg-white shadow-md rounded p-6 mb-4">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;