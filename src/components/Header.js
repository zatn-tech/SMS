// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white flex flex-col md:flex-row justify-between items-center p-4">
      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
        <span>📞 +91 - 9842199544</span>
        <span>✉️ info@adsfit.in</span>
      </div>
      <div className="text-2xl font-bold mt-2 md:mt-0">ADSFIT</div>
      <nav className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
        <a href="#" className="hover:text-orange-500">Home</a>
        <a href="#" className="hover:text-orange-500">About</a>
        <a href="#" className="hover:text-orange-500">Services</a>
        <a href="#" className="hover:text-orange-500">Portfolio</a>
        <a href="#" className="hover:text-orange-500">Blog</a>
        <a href="#" className="hover:text-orange-500">Contact Us</a>
      </nav>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="#" className="text-white hover:text-orange-500">FB</a>
        <a href="#" className="text-white hover:text-orange-500">TW</a>
        <a href="#" className="text-white hover:text-orange-500">IG</a>
      </div>
      <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-4 rounded mt-2 md:mt-0">
        Get Quotes
      </button>
    </header>
  );
};

export default Header;
