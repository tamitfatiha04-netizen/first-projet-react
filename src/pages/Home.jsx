import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Welcome to Our Website"
        description="We create modern websites."
      />
      <Footer />
    </>
  );
};

export default Home;