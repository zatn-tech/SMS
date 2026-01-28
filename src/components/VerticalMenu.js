import React from 'react';
import {Link} from 'react-scroll'

const VerticalMenu = ({menu}) => {
  return (
    <div className="bg-opacity-75  p-4 space-y-4 w-[500px] md:w-48">
      {menu.map(m1=>(
        <MenuItem title={m1.title} link={m1.link}/>
      ))}
    </div>
  );
};

const MenuItem = ({ title,link }) => {
  return (
    <div className="flex cursor-pointer text-5xl md:text-[16px] justify-between items-center bg-green-900 text-white md:py-2 py-10 px-4 rounded transition duration-300 hover:bg-yellow-700 relative ">
      <span className='py-[1px] leading-tight'><Link 
      activeClass="active" 
      to={link} 
      spy={true} 
      smooth={true} 
      offset={10} 
      duration={3000} 
      // onSetActive={handleSetActive}
    >
    
    {title}
    </Link>
    </span>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 h-32 md:h-10 w-1"></div>
    </div>
  );
};

export default VerticalMenu;
