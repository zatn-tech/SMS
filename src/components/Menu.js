import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ isOpen, toggleMenu }) => {
    const handleClick = () => {
        toggleMenu();
      };
  return (
    <div className={`fixed top-0 right-0 h-full w-[1600px] bg-green-950 text-white transform ${isOpen ? 'translate-x-[1980px]' : 'translate-x-[100px]'} transition-transform duration-300 z-50 ease-in-out`}>
      <button className="text-[300px] pl-16" onClick={toggleMenu}>
        &times;
      </button>
      <ul className="mt-12 ml-72 space-y-36 text-9xl px-4">
        <li><Link to='/' className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={handleClick}>Home</Link></li>
        <li><Link to='/about' className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={handleClick}>About Us</Link></li>
        <li><Link to='/our-works' className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={handleClick}>Our Works</Link></li>
        <li><Link to='/contact' className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={handleClick}>Contact Us</Link></li>
      </ul>
      <div className='mt-96 ml-72 space-y-36 text-9xl px-4'>
            <button className='bg-white text-green-800 px-32 py-8 rounded-3xl'><a href='https://api.whatsapp.com/send?phone=8610091311'>Get Quote</a></button>
          </div>
    </div>
  );
};

export default Menu;
