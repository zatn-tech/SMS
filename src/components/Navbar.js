import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const Navbar = () => {
    const [top,setTop]=useState(false)
    // console.log(window.screenY)
    const changeTop=()=>{

        if(window.scrollY>=100){
            setTop(true)
        }else{
            setTop(false)
        }
        console.log(window.scrollY)
    }
    window.addEventListener('scroll',changeTop)
    
  return (
    <div className='text-white'>
        <div className='bg-green-900 py-10'>

        <div className='flex justify-between px-10'>
            <div className='flex'>
                <div className='mx-3 flex'><div className='mt-1 mr-1 text-xl'><CiPhone/></div><div>+91 70103 54265</div></div>
                <div className='mx-3 flex'><div className='mt-1 mr-1 text-xl'><CiMail /></div><div>support@smscommunications.com</div></div>
            </div>
            <div className='flex text-2xl'>
                <div className='mx-2'><CiFacebook /></div>
                <div className='mx-2'><RiTwitterXFill /></div>
                <div className='mx-2'><CiLinkedin /></div>
                <div className='mx-2'><CiYoutube /></div>
            </div>
        </div>
        </div>
        <div className={`bg-yellow-500 font-semibold text-black  ${top?'top-5 z-10 fixed':''} w-[84%]  flex justify-between mx-[8%] py-7 -my-5 px-5 rounded-lg `}>
            <div>Logo</div>
            <div className='flex'>
                <div className='mx-3 li'><Link to='/'>Home</Link></div>
                <div className='mx-3 li'><Link to='/'>About Us</Link></div>
                <div className='mx-3 li'><Link to='/'>Our Works</Link></div>
                <div className='mx-3 li'><Link to='/'>Contact Us</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar