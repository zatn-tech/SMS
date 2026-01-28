import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.jpg'
import VerticalMenu from '../components/VerticalMenu'
import about from '../assets/images/about.gif'
import Parallax from '../components/Parallax'
import expertise from '../assets/images/expertise.jpeg'
import digital from '../assets/images/digital.jpg'
import u1 from '../assets/images/u1.jpeg'
import u2 from '../assets/images/u2.jpeg'
import u3 from '../assets/images/u3.jpeg'
import b1 from '../assets/images/b1.jpeg'
import b2 from '../assets/images/b2.jpeg'
import b3 from '../assets/images/b3.jpeg'
import t1 from '../assets/images/t1.jpeg'
import t2 from '../assets/images/t2.jpeg'
import t3 from '../assets/images/t3.jpeg'
import h1 from '../assets/images/h1.jpeg'
import h2 from '../assets/images/h2.jpeg'
import h3 from '../assets/images/h3.jpeg'
import h4 from '../assets/images/h4.jpeg'
import paper from '../assets/images/paper.jpg'
import au1 from '../assets/images/au1.jpeg'
import au2 from '../assets/images/au2.jpeg'
import au3 from '../assets/images/au3.jpeg'
import pb1 from '../assets/images/pb1.jpeg'
import pb2 from '../assets/images/pb2.jpeg'
import pb3 from '../assets/images/pb3.jpeg'
import tv from '../assets/images/television.jpg'
import ImageSlider from '../components/ImageSlider'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import fb1 from '../assets/images/fb1.jpeg'
import fb2 from '../assets/images/fb2.jpeg'
import fb3 from '../assets/images/fb3.jpeg'
import ar1 from '../assets/images/ar1.jpeg'
import ar2 from '../assets/images/ar2.jpeg'
import ar3 from '../assets/images/ar3.jpeg'
import ar4 from '../assets/images/ar4.jpeg'
import rl2 from '../assets/images/rl2.jpeg'
import rl3 from '../assets/images/rl3.jpeg'
import rl4 from '../assets/images/rl4.jpeg'
import pm1 from '../assets/images/pm1.jpeg'
import pm2 from '../assets/images/pm2.jpeg'
import pm3 from '../assets/images/pm3.jpeg'
import pm4 from '../assets/images/pm4.jpeg'
import mb1 from '../assets/images/mb1.jpeg'
import mb2 from '../assets/images/mb2.jpeg'
import mb3 from '../assets/images/mb3.jpeg'
import mb4 from '../assets/images/mb4.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const OurWorks = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  const images = [expertise, about, digital, tv]
  const unipoles = [u1, u2, u3]
  const barricade = [b1, b2, b3,pb1,pb2,pb3]
  const automobile = [au1, au2, au3]
  const temporary = [t1, t2, t3]
  const hoarding = [h2, h1, h3, h4]
  const policeboard = [pb1, pb2, pb3]
  const fullbus = [fb1,fb2,fb3]
  const ar = [ar1,ar2,ar3,ar4]
  const residentailLED=[rl2,rl3,rl4]
  const printmedium = [pm1,pm2,pm3,pm4]
  const mallBrand = [mb1,mb2,mb3,mb4]
  const menu = [
    // { title: 'Planning and Execution', link: 'planning' },
    { title: 'Hoardings & Unipoles', link: 'hoard' },
    { title: 'Bus Branding', link: 'bus' },
    { title: 'Traffic Awarness & Barricades', link: 'barricade' },
    { title: 'Mobile Adverstisment', link: 'mobile' },
    { title: 'Residential Advertisment', link: 'resident' },
    { title: 'Print Medium', link: 'print' },
    { title: 'Mall Branding', link: 'mall' },
    { title: 'Airport Branding', link: 'airport' },
  ]
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-[1500px] md:w-full'>
      <div className='home h-[2800px] md:h-screen overflow-hidden'>
        <div className='flex justify-between mx-16 pt-5'>
          <div>
            <img className='md:w-36 w-96' src={logo} />
          </div>
          <div className='md:flex hidden font-bold text-lg mt-3 text-white'>
            <div className='mx-5 hover:text-green-800 duration-500 drop-shadow-[1px_1px_green]'><Link to='/'>Home</Link></div>
            <div className='mx-5 hover:text-green-800 duration-500 drop-shadow-[1px_1px_green]'><Link to='/about'>About Us</Link></div>
            <div className='mx-5 hover:text-green-800 duration-500 drop-shadow-[1px_1px_green]'><Link to='/our-works'>Our Works</Link></div>
            <div className='mx-5 hover:text-green-800 duration-500 drop-shadow-[1px_1px_green]'><Link to='/contact'>Contact Us</Link></div>
          </div>
          <div className='hidden md:block'>
            <button className='bg-green-800 text-white px-5 py-2 rounded-3xl'><a href='https://api.whatsapp.com/send?phone=8610091311'>Get Quote</a></button>
          </div>
          <div className="relative md:hidden md:min-h-screen ">
            <header className="flex justify-end p-4">
              <button className="text-9xl text-white" onClick={toggleMenu}>
                &#9776;
              </button>

            </header>
            <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>

        </div>
        <div >
          <div className='mt-[20%] md:mt-10'>

            {/* <h1 classNam data-aoslefte-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"e='ml-[15%]    text-yellow-600 drop-shadow-[2px_1px_white] font-semibold text-9xl md:text-6xl'>
              BUSINESS <br /> ADVERTISING COMPANY
            </h1> */}
            <div className='text-white    ml-[15%] md:ml-[25%] flex mt-36  '>
              <div className='mx-16  text-[200px] md:text-7xl text-white  drop-shadow-[10px_10px_rgb(202,138,4)] md:drop-shadow-[3px_3px_rgb(202,138,4)]'><p className='font-bold'>OUR WORKS</p></div>
              {/* <div><button className='mr-16 border-2 hover:-translate-y-2 duration-500 border-yellow-600 px-5 py-2 bg-yellow-600 w-36 rounded-tr-lg rounded-bl-lg shadow-[2px_2px_white]'>Our Services</button></div> */}
              {/* <div><button className='mr-16 border-2 border-green-800 bg-green-800 hover:-translate-y-2 duration-500 px-5 py-2 w-36 rounded-tr-lg rounded-bl-lg shadow-[2px_2px_white]'>Get Quote</button></div> */}

            </div>

          </div>


        </div>
        <div className='md:-mt-64 mt-16 ml-[65%] md:ml-[85%]'>
          <VerticalMenu menu={menu} />
          {/* <FloatingWhatsApp phoneNumber='7010354265'/> */}
        </div>

      </div>

      <div id='hoard' className='h-[2300px] md:h-full'>

          <div className='md:ml-[1%] '><section class="section">
            <h2 class="title text-9xl md:text-6xl">HOARDINGS & UNIPOLES</h2>
          </section></div>
        <div className='px-32 pb-16'>
          <div className='flex md:flex-row flex-col my-10'>
            <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='md:flex-1 h-[100vh] md:h-[300px]  md:w-[50%]'>
              <ImageSlider images={hoarding} />
            </div>
            <div className='md:w-[50%] mt-16 md:my-auto pl-10'>
              <div className='' data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h1 className='font-bold pb-3 text-yellow-600 text-7xl md:text-xl'>Unleash Your Brand's Potential with Our Hoardings and Unipoles</h1>
                <p className='font-medium text-justify text-5xl leading-normal md:leading-7 md:text-lg mt-5 text-gray-400 '>Boost Your Brand's Visibility With Our Premier Hoarding And Unipole Solutions. From Skyline To Highway, Our Strategically Positioned Hoardings And Unipoles Maximize Exposure. Our Creative Team Delivers Engaging Designs For Lasting Impact. Whether Launching, Promoting, Or Showcasing, Rely On Us For Amplified Presence And Results. Drive Attention, Spark Imagination, And Let Our Solutions Elevate Your Message. Contact Us Now To Elevate Your Advertising Strategy! </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div id='bus' className='h-[2340px]  md:h-full'>

          <div className=''><section class="section">
            <h2 class="title1 text-right text-9xl md:text-6xl">BUS BRANDING</h2>
          </section></div>
        <div className='px-32 pb-16'>
          <div className='flex md:flex-row flex-col my-10'>
            <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='md:flex-1 h-[100vh] md:h-[300px]  md:w-[50%]'>
              <ImageSlider images={fullbus} />
            </div>
            <div className='md:w-[50%] mt-16 md:my-auto pl-10'>
              <div className='' data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h1 className='font-bold text-yellow-600 text-7xl md:text-xl'>
                  Bus Branding for Enhanced Brand Visibility</h1>
                <p className='font-medium text-justify text-5xl leading-normal md:leading-7 md:text-lg mt-5 text-gray-400 '>Engage Eyes, Spark Inspiration. Let Our Bus Branding Illuminate Your Message! Elevate Your Brand's Presence with Our Premier Bus Branding Solutions. From Urban Centers to High-Traffic Routes, Our Strategically Designed Bus Advertisements Amplify Visibility. Our Creative Team Crafts Compelling Designs for Lasting Influence. Whether Launching, Marketing, or Displaying, Trust Us for Enhanced Visibility and Results. Contact Us Today to Elevate Your Advertising Strategy!</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* <div id='bus' className='hidden md:block'>

          <div className='ml-[1%]'><section class="section">
            <h2 class="title1 text-right text-6xl">BUS BRANDING</h2>
          </section></div>
        <div className='px-32 pb-16'>
          <div className='flex my-10'>
            <div className='w-[50%] my-auto pr-10'>
              <div className='' data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h1 className='font-bold text-yellow-600 text-xl'> Bus Branding for Enhanced Brand Visibility</h1>
                <p className='font-medium text-justify text-lg mt-5 text-gray-400 '>Engage Eyes, Spark Inspiration. Let Our Bus Branding Illuminate Your Message! Elevate Your Brand's Presence with Our Premier Bus Branding Solutions. From Urban Centers to High-Traffic Routes, Our Strategically Designed Bus Advertisements Amplify Visibility. Our Creative Team Crafts Compelling Designs for Lasting Influence. Whether Launching, Marketing, or Displaying, Trust Us for Enhanced Visibility and Results. Contact Us Today to Elevate Your Advertising Strategy!</p>
              </div>

            </div>
            <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='flex-1 h-[300px] pl-10 w-[50%]'>
              <ImageSlider images={fullbus} />
            </div>
          </div>
        </div>
      </div> */}
      <div id='barricade' className='h-[2455px] md:h-full'>
          <div className='md:ml-[5%] '>

            <section class=" md:section">
              <h2 class="title text-9xl  md:text-6xl">TRAFFIC AWARENESS & BARRICADES</h2>
            </section>
          </div>
        <div className='px-32 pb-16 '>
          <div className=''>
            <div className=''>
              <div className='flex md:flex-row flex-col my-10'>
                <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='md:flex-1 h-[100vh] md:h-[300px]  md:w-[50%]'>
                  <ImageSlider images={barricade} />
                </div>
                <div className='md:w-[50%] mt-16 md:my-auto pl-10'>
                  <div className='' data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <h1 className='font-bold text-yellow-600 text-7xl md:text-xl'>Optimizing Traffic Awareness and Safety Through Traffic Awareness Boards and Barricade Advertising</h1>
                    <p className='font-medium text-justify text-5xl leading-normal md:leading-7 md:text-lg mt-5 text-gray-400'>Captivate Attention, Inspire Engagement. Elevate Your Message with Our Traffic Awareness Boards and Barricade Solutions! Enhance Brand Visibility with Our Premier Services. From City Streets to Construction Zones, Our Strategically Positioned Traffic Awareness Boards and Barricades Maximize Exposure. Our Creative Team Crafts Compelling Designs for Long-Lasting Impact. Whether Securing, Promoting, or Directing Traffic, Trust Us for Enhanced Presence and Results. Contact Us Today to Strengthen Your Safety and Advertising Strategy!





                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='mobile' className='h-[2250px]  md:h-full'>
          <div className=''>

            <section class=" section">
              <h2 class="title1 text-right text-9xl md:text-6xl">MOBILE ADVERTISMENT</h2>
            </section>
          </div>
        <div className='px-32 pb-16 '>
          <div className=''>
            <div className=''>
              <div className='flex md:flex-row flex-col my-10'>
                <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='md:flex-1 h-[100vh] md:h-[300px]  md:w-[50%]'>
                  <ImageSlider images={automobile} />
                </div>
                <div className='md:w-[50%] mt-16 md:my-auto pl-10'>
                  <div className='' data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <h1 className='font-bold text-yellow-600 text-7xl md:text-xl'>Revolutionizing Brand Promotion Through Mobile Advertising</h1>
                    <p className='font-medium text-justify text-5xl leading-normal md:leading-7 md:text-lg mt-5 text-gray-400'>Spark Enthusiasm, Ignite Desire. Let Our Mobile Advertising Solutions Propel Your Message! Amplify Brand Visibility with Our Top-Tier Mobile Services. From Urban Roads to Open Highways, Our Strategically Positioned Mobile Advertisements Maximize Exposure. Our Innovative Team Crafts Persuasive Designs for Enduring Influence. Whether Unveiling New Products, Showcasing Special Offers, or Highlighting Features, Trust Us for Elevated Presence and Outcomes. Reach Out Today to Rev Up Your Marketing Strategy and Accelerate Success!</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id='mobile' className='hidden md:block'>
          <div className='ml-[1%]'>

            <section class=" section">
              <h2 class="title1  text-right text-6xl">MOBILE ADVERTISMENT</h2>
            </section>
          </div>
        <div className='px-32 pb-16 '>
          <div className=''>
            <div className=''>
              <div className='flex my-10'>
                <div className='w-[50%] my-auto pr-10'>
                  <div className='' data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <h1 className='font-bold text-yellow-600 text-xl'>Revolutionizing Brand Promotion Through Mobile Advertising</h1>
                    <p className='font-medium text-justify text-lg mt-5 text-gray-400 '>Spark Enthusiasm, Ignite Desire. Let Our Mobile Advertising Solutions Propel Your Message! Amplify Brand Visibility with Our Top-Tier Mobile Services. From Urban Roads to Open Highways, Our Strategically Positioned Mobile Advertisements Maximize Exposure. Our Innovative Team Crafts Persuasive Designs for Enduring Influence. Whether Unveiling New Products, Showcasing Special Offers, or Highlighting Features, Trust Us for Elevated Presence and Outcomes. Reach Out Today to Rev Up Your Marketing Strategy and Accelerate Success!</p>
                  </div>
                </div>
                <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='md:flex-1 h-[100vh] md:h-[300px]  md:w-[50%]'>
                  <ImageSlider images={automobile} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div id='resident' className='h-[2500px] md:h-full'>
          <div className='md:ml-[5%]'>

            <section class=" md:section">
              <h2 class="title text-9xl md:text-6xl">RESIDENTIAL ADVERTISMENT</h2>
            </section>
          </div>
        <div className='px-32 pb-16 '>
          <div className=''>
            <div className=''>
              <div className='flex md:flex-row flex-col my-10'>
                <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='md:flex-1 h-[100vh] md:h-[300px]  md:w-[50%]'>
                  <ImageSlider images={residentailLED} />
                </div>
                <div className='md:w-[50%] mt-16 md:my-auto pl-10'>
                  <div className='' data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <h1 className='font-bold text-yellow-600 text-7xl md:text-xl'>Transforming Residential Apartment Marketing Through LED Screen Advertising.</h1>
                    <p className='font-medium text-justify text-5xl leading-normal md:leading-7 md:text-lg mt-5 text-gray-400 '>Fuel Excitement, Ignite Interest. Let Our LED Screen Advertising Illuminate Your Residential Apartments! Enhance Your Property's Visibility with Our Cutting-edge Marketing Solutions. From Vibrant Cityscapes to Busy Residential Areas, Our Strategically Placed Screens Maximize Exposure. Our Innovative Team Creates Compelling Visuals for Lasting Impact. Whether Showcasing New Listings, Highlighting Special Offers, or Emphasizing Unique Features, Count on Us for Enhanced Presence and Results. Contact Us Today to Energize Your Property Marketing and Achieve Exceptional Success!</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='print' className='h-[2350px]  md:h-full'>
          <div className='md:ml-[1%]'>

            <section class="section">
              <h2 class="title1 text-right text-9xl md:text-6xl">PRINT MEDIUM</h2>
            </section>
          </div>
        <div className='px-32 pb-16 '>
          <div className=''>
            <div className=''>
              <div className='flex md:flex-row flex-col my-10'>
                <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='md:flex-1 h-[100vh] md:h-[300px]  md:w-[50%]'>
                  <ImageSlider images={printmedium} />
                </div>
                <div className='md:w-[50%] mt-16 md:my-auto pl-10'>
                  <div className='' data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <h1 className='font-bold text-yellow-600 text-7xl md:text-xl'>Elevating Brand Visibility and Engagement Through Print Advertising</h1>
                    <p className='font-medium text-justify text-5xl leading-normal md:leading-7 md:text-lg mt-5 text-gray-400 '>Seize Attention, Ignite Interest. Drive Your Message Forward with Our Print Advertising Solutions! Boost Brand Visibility with Our Premier Print Advertising Services. From Magazines to Billboards, Our Strategically Positioned Prints Maximize Exposure. Our Creative Team Crafts Compelling Designs for Enduring Impact. Whether Announcing Events, Promoting Offers, or Showcasing Services, Trust Us for Enhanced Presence and Results. Contact Us Today to Accelerate Your Advertising Strategy for Success!</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id='print' className='hidden md:block'>

          <div className='ml-[1%]'><section class="section">
            <h2 class="title1 text-right text-6xl">PRINT MEDIUM</h2>
          </section></div>
        <div className='px-32 pb-16'>
          <div className='flex my-10'>
            <div className='w-[50%] my-auto pr-10'>
              <div className='' data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h1 className='font-bold text-yellow-600 text-xl'>Elevating Brand Visibility and Engagement Through Print Advertising </h1>
                <p className='font-medium text-justify text-lg mt-5 text-gray-400 '>Seize Attention, Ignite Interest. Drive Your Message Forward with Our Print Advertising Solutions! Boost Brand Visibility with Our Premier Print Advertising Services. From Magazines to Billboards, Our Strategically Positioned Prints Maximize Exposure. Our Creative Team Crafts Compelling Designs for Enduring Impact. Whether Announcing Events, Promoting Offers, or Showcasing Services, Trust Us for Enhanced Presence and Results. Contact Us Today to Accelerate Your Advertising Strategy for Success!</p>
              </div>

            </div>
            <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='flex-1 h-[300px] pl-10 w-[50%]'>
              <ImageSlider images={printmedium} />
            </div>
          </div>
        </div>
      </div> */}
      <div id='mall' className='h-[2500px] md:h-full'>
          <div className='md:ml-[5%]'>

            <section class=" md:section">
              <h2 class="title text-9xl md:text-6xl">MALL BRANDING</h2>
            </section>
          </div>
        <div className='px-32 pb-16 '>
          <div className=''>
            <div className=''>
              <div className='flex md:flex-row flex-col my-10'>
                <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='md:flex-1 h-[100vh] md:h-[300px]  md:w-[50%]'>
                  <ImageSlider images={mallBrand  } />
                </div>
                <div className='md:w-[50%] mt-16 md:my-auto pl-10'>
                  <div className='' data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <h1 className='font-bold text-yellow-600 text-7xl md:text-xl'>MALL BRANDING SOLUTIONS FOR ENHANCED BRAND VISIBILITY.</h1>
                    <p className='font-medium text-justify text-5xl leading-normal md:leading-7 md:text-lg mt-5 text-gray-400 '>Elevate Your Brand Visibility with Our Premier Mall Branding Solutions, Designed to Capture Attention and Make a Lasting Impression. Our Creative Team Crafts Compelling Designs for Maximum Impact, Ensuring Your Message Stands Out Whether You're Unveiling Events, Promoting Offers, or Showcasing Services. From High-Traffic Areas to Retail Corners, Our Branding Initiatives Engage Your Audience and Transform Your Advertising Strategy into a Powerful, Artful Success. Contact Us Today to Enhance Your Presence and Achieve Outstanding Results!</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='airport' className='h-[2500px]  md:h-full'>
          <div className=''>

            <section class="section">
              <h2 class="title1 text-right text-9xl md:text-6xl">AIRPORT BRANDING</h2>
            </section>
          </div>
        <div className='px-32 pb-16 '>
          <div className=''>
            <div className=''>
              <div className='flex md:flex-row flex-col my-10'>
                <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='md:flex-1 h-[100vh] md:h-[300px]  md:w-[50%]'>
                  <ImageSlider images={ar} />
                </div>
                <div className='md:w-[50%] mt-16 md:my-auto pl-10'>
                  <div className='' data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <h1 className='font-bold text-yellow-600 text-7xl md:text-xl'>
                    Airport Branding Solutions for Enhanced Brand Visibility and Engagement.</h1>
                    <p className='font-medium text-justify text-5xl leading-normal md:leading-7 md:text-lg mt-5 text-gray-400 '>Captivate Audiences, Ignite Engagement. Elevate Your Brand with Our Aeroplane and Airport Branding Solutions! Boost Visibility with Our Premier Advertising Services. From In-Flight Entertainment to Terminal Displays, Our Ads Guarantee Maximum Impact. Our Creative Team Develops Compelling Designs for Lasting Influence. Whether Announcing Events, Promoting Offers, or Showcasing Services, Trust Us for Enhanced Presence and Results. Contact Us Today to Optimize Your Advertising Strategy for Airborne and Terminal Success!</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id='airport' className='hidden md:block'>

          <div className='ml-[1%]'><section class="section">
            <h2 class="title1 text-right text-6xl">AIRPORT BRANDING</h2>
          </section></div>
        <div className='px-32 pb-16'>
          <div className='flex my-10'>
            <div className='w-[50%] my-auto pr-10'>
              <div className='' data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h1 className='font-bold text-yellow-600 text-xl'>
                Airport Branding Solutions for Enhanced Brand Visibility and Engagement.</h1>
                <p className='font-medium text-justify text-lg mt-5 text-gray-400  '>Captivate Audiences, Ignite Engagement. Elevate Your Brand with Our Aeroplane and Airport Branding Solutions! Boost Visibility with Our Premier Advertising Services. From In-Flight Entertainment to Terminal Displays, Our Ads Guarantee Maximum Impact. Our Creative Team Develops Compelling Designs for Lasting Influence. Whether Announcing Events, Promoting Offers, or Showcasing Services, Trust Us for Enhanced Presence and Results. Contact Us Today to Optimize Your Advertising Strategy for Airborne and Terminal Success!</p>
              </div>

            </div>
            <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='flex-1 h-[300px] pl-10 w-[50%]'>
              <ImageSlider images={ar} />
            </div>
          </div>
        </div>
      </div> */}


      <div>
        <Footer />
      </div>

    </div>
  )
}

export default OurWorks