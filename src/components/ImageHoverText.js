// src/ImageHoverText.js
import React from 'react';

const ImageHoverText = ({ image, hoverText }) => {
  return (
    <div className="relative md:w-80 h-[100vh] md:h-80  overflow-hidden rounded-lg mb-5 group">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat' }} 
      ></div>
      <div className="absolute bottom-0 left-0 h-full w-full  text-center p-5 bg-black bg-opacity-70 text-white transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
        <div className='md:my-[50%] my-[30%] text-5xl md:text-xl font-bold'>
        {hoverText}
        </div>
      </div>
    </div>
  );
};

export default ImageHoverText;
