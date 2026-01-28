// src/ImageSlider.js
import React, { useState, useEffect } from 'react';

const ImageSlider1 = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default ImageSlider1;
