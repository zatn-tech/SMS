import React from 'react';
import { CiMail, CiLocationOn, CiPhone } from "react-icons/ci";
import { RiTimeFill, RiFacebookFill, RiTwitterFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill, RiRssFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=''>

    <div className="h-[3000px] md:h-full bg-green-800 text-center py-10">
      <div className=" my-16 md:my-0 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="my-20 md:my-0">
            <div className="flex justify-center mb-3 text-white">
              <CiPhone className='text-9xl md:text-4xl' />
            </div>
            <div className="text-6xl my-10 md:my-0 md:text-lg text-yellow-500 font-bold">Contact Us</div>
            <div className="text-white text-7xl tracking-wide md:text-sm mb-10 md:mb-0"><a href="mailto:support@example.com">72000 70595 </a></div>
            <div className="text-white text-7xl tracking-wide md:text-sm "><a href="mailto:support@example.com">72001 34935</a></div>
          </div>
          <div className="my-20 md:my-0">
            <div className="flex justify-center mb-3 text-white">
              <CiMail className='text-9xl md:text-4xl' />
            </div>
            <div className="text-6xl my-10 md:my-0 md:text-lg text-yellow-500 font-bold">Email</div>
            <div className="text-white text-7xl md:text-sm"><a href="mailto:info@hoardinguk.org">sales@smscommunications.in
            </a></div>
          </div>
          <div className="my-20 md:my-0">
            <div className="flex justify-center mb-3 text-white">
              <RiTimeFill className='text-9xl md:text-4xl' />
            </div>
            <div className="text-6xl my-10 md:my-0 md:text-lg text-yellow-500 font-bold">Open</div>
            <div className="text-white text-7xl md:text-sm">Monday-Saturday: 10am - 6pm</div>
          </div>
          <div className="my-20 md:my-0">
            <div className="flex justify-center mb-3 text-white">
              <CiLocationOn className='text-9xl md:text-4xl' />
            </div>
            <div className="text-6xl my-10 md:my-0 md:text-lg text-yellow-500 font-bold">Location</div>
            <div className ="text-white text-7xl md:text-sm">
            No.335/5, Galaxy Apartments,2nd Floor , 
            <br />
            12th Main Road, Anna Nagar, 
            <br />
              Chennai<br />
              TamilNadu - 600 040
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-16 md:space-x-4 mt-20 md:mt-0 text-9xl md:text-2xl">
          <a href="#" className=" text-blue-800"><RiFacebookFill /></a>
          <a href="#" className=" text-black"><RiTwitterFill /></a>
          <a href="#" className=" text-pink-500"><RiInstagramFill /></a>
          <a href="#" className=" text-white"><RiLinkedinFill /></a>
          <a href="#" className=" text-red-600"><RiYoutubeFill /></a>
          <a href="#" className=" text-orange-500"><RiRssFill /></a>
        </div>
      </div>
    </div>
    <div className='bg-black  text-white  md:h-full py-10 md:py-0  md:text-sm'>
      <div className='flex md:flex-row flex-col justify-between px-10 md:px-32'>
        <div className='text-5xl my-10 md:text-sm md:my-auto'>
          Copyrights © 2024 - SMS COMMUNICATIONS - All rights reserved 
        </div>
        <div className='text-5xl  flex md:flex-row flex-col md:text-sm mx-auto md:mx-0'>
          <div className='my-auto'>
        Designed and Developed by -
          </div>
          <div className='flex md:ml-5 my-5 md:my-0 mx-auto cursor-pointer'>
            <a href='https://api.whatsapp.com/send?phone=7010354265' className='flex'>

            <span className='text-8xl md:text-3xl'>𝒁</span>
            <p className='my-auto'>atn.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
