// src/components/LandingPage.js

import React from 'react';
import Header from './Header';
import image from '../assets/images/header2.jpg'

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="text-center py-20 bg-cover bg-center" style={{ backgroundImage:image }}>
        <h1 className="text-5xl font-bold mb-4 text-white">Unipole Manufacturing Company</h1>
        <p className="text-xl mb-8 text-white">Agency for Outdoor Advertising in Various Medium - We're your one-step destination for innovative advertising solutions, specializing in custom unipole manufacturing that perfectly fits your brand.</p>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-4 rounded">
            Our Services
          </button>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-4 rounded">
            Get Quotes
          </button>
        </div>
        <div className="mt-8">
          {/* <img src={image} alt="Billboard" className="mx-auto"/> */}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
