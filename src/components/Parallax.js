// src/Parallax.js
import React from 'react';


const Parallax = ({ image,gradient, children }) => {
  return (
    <div className="parallax-container ">
      <div className="parallax-background " style={{ backgroundImage: `linear-gradient(${gradient}), url(${image})` }}></div>
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
};

export default Parallax;
