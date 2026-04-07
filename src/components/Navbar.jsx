import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold navbar-link">My Website</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-gray-200 navbar-link">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-200 navbar-link">About Us</Link></li>
          <li><Link to="/services" className="text-white hover:text-gray-200 navbar-link">Services</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-200 navbar-link">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
