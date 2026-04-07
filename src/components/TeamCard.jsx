import React from 'react';

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="team-card bg-white shadow-md rounded p-4 text-center">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default TeamCard;