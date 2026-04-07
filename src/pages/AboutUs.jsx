import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';

const AboutUs = () => {
  const teamMembers = [
    { name: 'Us', role: 'Developer', image: 'https://via.placeholder.com/150' },
    { name: 'me', role: 'Designer', image: 'https://via.placeholder.com/150' },
    { name: 'fatiha', role: 'Manager', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="mb-8">We are a company that creates modern websites.</p>
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
