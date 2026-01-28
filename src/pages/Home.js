import React, { useEffect, useState, useRef } from 'react'
import logo from '../assets/images/logo.jpg'
import about from '../assets/images/about.gif'
import Parallax from '../components/Parallax'
import expertise from '../assets/images/expertise.jpeg'
import digital from '../assets/images/digital.jpg'
import paper from '../assets/images/paper.jpg'
import tv from '../assets/images/television.jpg'
import brand from '../assets/images/brand.jpg'
import outdoor from '../assets/images/OR7V880.jpg'
import bus from '../assets/images/bus.jpg'
import { PiBusDuotone } from "react-icons/pi";
import { LiaTrainSolid } from "react-icons/lia";
import success from '../assets/images/success.gif'
import strategy from '../assets/images/strategy.gif'
import service from '../assets/images/service.gif'
import Footer from '../components/Footer'
import anonymous from '../assets/images/anonymous.jpg'
import bus1 from '../assets/images/bus1.jpg'
import train from '../assets/images/train.jpg'
import train1 from '../assets/images/train1.jpg'
import metro from '../assets/images/metro.jpg'
import inside from '../assets/images/inside.jpg'
import brand1 from  '../assets/images/h5.jpeg'
import brand2 from '../assets/images/h2.jpeg'
import brand3 from '../assets/images/air.jpeg'
import airport from '../assets/images/ariport.jpeg'
import barricade from '../assets/images/barricade.jpeg'
import mall from '../assets/images/Mallimg.jpeg'
import awa from '../assets/images/trafficawa.jpeg'
import res from '../assets/images/resled.jpeg'
import fb1 from '../assets/images/fb1.jpeg'
import fb2 from '../assets/images/fb2.jpeg'
import fb3 from '../assets/images/fb3.jpeg'
import Card from '../components/Card'
import { motion } from 'framer-motion';
import { stories } from '../components/successstories'
import SliderComponent from '../components/SliderComponent'
import { Link } from 'react-router-dom'
import VerticalMenu from '../components/VerticalMenu'
import ImageHoverText from '../components/ImageHoverText'
import ImageSlider from '../components/ImageSlider'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from '../components/Menu'
const Home = () => {
  const [selected, setSelected] = useState('c1');
  const images = [expertise, about, digital, tv]
  const images1 = [bus1, train, train1, metro, inside]
  const brandimg =[brand1,brand2,brand3]
  const fullbus = [fb1,fb2,fb3]
  const handleChange = (event) => {
    setSelected(event.target.id);
  };

  useEffect(() => {
    AOS.init()
  }, [])

  const slides = [
    {
      name: 'Thraveen ',
      rating: '★★★★★',
      story: 'Working with SMS Communications has been a mostly wonderful experience. Their creativity and professionalism are top-notch, and they delivered a comprehensive advertising strategy that aligned perfectly with our brand values and goals. Highly recommend their services to any business looking to elevate their advertising efforts.',
      img: anonymous
    },
    {
      name: 'Sankar',
      rating: '★★★★☆',
      story: 'SMS Communiations provided us with innovative and engaging advertising solutions that really helped our business stand out. The team was very collaborative and responsive, ensuring that all our feedback was incorporated into the final product. The quality of work and the results achieved made it worthwhile. ',
      img: anonymous
    },
    {
      name: 'Prabha',
      rating: '★★★★★',
      story: 'We partnered with SMS Communications for our recent marketing campaign, and we are so happy with the results. Their team was incredibly professional and attentive to our needs from the start. They took the time to understand our brand and target audience, crafting a strategy that was both creative and effective. The campaign not only increased our brand awareness but also led to a significant boost in sales. ',
      img: anonymous
    },
    {
      name: 'Dinesh',
      rating: '★★★★☆',
      story: 'SMS Communications surpassed our expectations with their creative and strategic prowess. From the initial consultation to the final implementation, their team demonstrated exceptional understanding of our  vision and market positioning. The innovative concepts they proposed were not only visually stunning but also highly effective in engaging our target audience. We highly recommend their services.',
      img: anonymous
    }
  ];

  const menu = [
    {
      link: 'about',
      title: 'Behind The Brand'
    },
    {
      link: 'expertise',
      title: 'Our Mastery'
    },
    {
      link: 'whatwedo',
      title: 'Solutions We Provide',
    },
    {
      link: 'clients',
      title: 'Our Clients'
    },
    {
      link: 'why',
      title: 'What Sets Us Apart'
    },
    {
      link: 'testimonials',
      title: 'Testimonials'
    }
  ]
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    console.log("i")
    setIsOpen(!isOpen);
  };
  return (
    <div className='w-[1500px] md:w-full'>
      <div className='home h-[2800px] md:h-screen overflow-hidden'>
        <div className='flex justify-between mx-16 pt-5'>
          <div>
            <img className='md:w-36 w-96 ' src={logo} />
          </div>
          <div className='md:flex hidden  font-bold text-lg mt-3 text-white'>
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
          <div className='mt-[18%] md:mt-10'>

            <h1 className='ml-[15%]   text-yellow-600 drop-shadow-[2px_1px_white] font-semibold text-9xl md:text-6xl'>
              BUSINESS <br /> ADVERTISING COMPANY
            </h1>
            <p className='ml-[15%] w-[150vh] leading-normal md:w-[700px] mt-10 md:mt-1 text-3xl md:text-[19px] mr-16 text-md text-white'><span className='text-yellow-600 drop-shadow-[1px_0.5px_white]   font-bold text-5xl  md:text-2xl'>Agency for Outdoor Advertising in Various Medium </span>- We're your one step destination for

              innovative advertising solutions, specializing in custom unipole manufacturing that perfectly fits your brand</p>
            <div className='text-white   ml-[25%] flex  mt-10'>
              <div><button className='mr-16 border-2 hover:-translate-y-2 duration-500 border-yellow-600  md:px-5 py-3 md:py-2 bg-yellow-600 px-5 md:w-36 rounded-tr-lg rounded-bl-lg shadow-[2px_2px_white]  text-5xl md:text-[16px]'><Link to='our-works'>Our Services</Link></button></div>
              <div><button className='mr-16 border-2 border-green-800 bg-green-800 hover:-translate-y-2 duration-500  md:px-5 py-3 md:py-2 px-5 md:w-36 rounded-tr-lg rounded-bl-lg shadow-[2px_2px_white] text-5xl md:text-[16px]'><a href='https://api.whatsapp.com/send?phone=8610091311'>Get Quote</a></button></div>

            </div>
          </div>


        </div>
        <div className='md:-mt-56 mt-96 ml-[65%] md:ml-[85%]'>
          <VerticalMenu menu={menu} />
          {/* <FloatingWhatsApp phoneNumber='7010354265'/> */}
        </div>

      </div>
      <div id='about' className='h-[350vh] md:h-full'>

        <div className='ml-[1%]'>

          <section class="section">
            <h2 class="title  text-9xl md:text-6xl">BEHIND THE BRAND</h2>
          </section>
        </div>
        <div className='px-32 pb-16'>
          <div className='flex flex-col md:flex md:flex-row'>
          <div className='md:flex-1 h-[150vh] my-auto md:h-[50vh] md:w-[50%] justify-center' data-aos="fade-up-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <ImageSlider images={brandimg} />
            </div>
            <div className='md:w-[60%] md:pl-[10%]' data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <p>
                <p className='text-md text-justify uppercase font-semibold mb-8'>

                  {/* At SMS Communications, we are your go-to experts for all Advertising & Marketing Solutions. With a century of collective experience, we offer strategic, insightful, innovative, and progressive solutions to brands nationwide. */}

                </p>
                <p className='list-disc text-5xl tracking-wide md:text-lg md:mt-0 leading-normal mt-32 ml-10 md:leading-8 text-justify '>
                  At SMS Communications, your premier destination for all Advertising & Marketing Solutions, we harness over 100 years of collective experience to deliver strategic, innovative, and progressive advertising strategies to brands nationwide. As a fast-growing, multi-dimensional company, we have carved a niche in the advertising world by providing tailored solutions that meet the evolving needs of our clients. Specializing in a vast range of Brand Building Exercises on Digital Platforms, we ensure your brand excels in the digital landscape. Trust SMS Communications for expert advertising solutions, brand enhancement, and comprehensive digital marketing services. Let us help your brand shine in the competitive advertising arena.
                </p>
                {/* <ul className='list-disc ml-10 text-gray-700'>
                  <li>We are a fast-growing, multi-dimensional company that has carved a niche for itself in a short span of time.</li>
                  <li>We excel in providing advertising solutions and meeting the burgeoning needs of the Advertising World.</li>satiating the burgeoning needs of
                  Advertising World
                  <li>With over 100 years of combined experience, our team is dedicated to crafting tailored advertising strategies that drive results.</li>
                  <li> If it’s remotely connected with Advertising, SMS Communications is your trusted partner.</li>
                </ul> */}
              </p>
              <div className='text-right'>
                <button className='gb-shutter gm-btn border-[1px] hover:-translate-y-2 duration-500 border-black md:px-5 px-32 text-5xl md:text-lg py-10 md:py-2 mt-16 md:mt-10'><Link to='about'>Learn more</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[350vh] md:h-full'>
        <Parallax image={expertise} gradient="rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)">
          <div>
            <h2 className='text-white mx-32 text-9xl md:text-5xl leading-normal'>
              “Your brand is what other people say about you when you're not in the room.”
            </h2>
            <p className='ml-[50%] md:text-3xl text-7xl mt-32 md:mt-10'>-  JEFF BEZOZ</p>
          </div>
        </Parallax>
      </div>
      <div id='expertise' className=' pb-16 h-[750vh] md:h-full'>
        <div className='md:ml-[1%] '>

          <section class="section">
            <h2 class="title  text-9xl h-full md:text-6xl text-left">OUR MASTERY</h2>
          </section>
        </div>
        <div className='px-32'>
          <div className='md:flex justify-center items-center' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div className='mx-3 my-32 md:my-0'><ImageHoverText image={airport} hoverText="AIRPORT BRANDING" /></div>
            <div className='mx-3 my-32 md:my-0'><ImageHoverText image={brand2} hoverText="HOARDINGS" /></div>
            <div className='mx-3 my-32 md:my-0'><ImageHoverText image={barricade} hoverText="BARRICADES" /></div>
          </div>
          <div className='md:flex justify-center items-center' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div className='mx-3 my-32 md:my-0'><ImageHoverText image={awa} hoverText="AWARENESS BOARDS" /></div>
            <div className='mx-3 my-32 md:my-0'><ImageHoverText image={mall} hoverText="MALL ACTIVITIES" /></div>
            <div className='mx-3 my-32 md:my-0'><ImageHoverText image={res} hoverText="RESIDENTAL LED ADS" /></div>
          </div>


        </div>
      </div>
      <div className='bg-green-800 h-[4200px] md:h-full'>
        <div className='px-32  py-16 '>
          <div>
            <h2 className='text-white drop-shadow-[2px_2px_rgb(202,138,4)] text-8xl leading-normal md:text-3xl text-center md:leading-10'>Outdoor advertising is perpetually transforming to align with contemporary trends</h2>
          </div>
          <div className='md:flex md:flex-row flex-col my-16'>
            <div className='flex-1 h-[150vh] my-auto md:h-[50vh] md:w-[50%]' data-aos="fade-up-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <ImageSlider images={fullbus} />
            </div>
            <div className='md:w-[50%] mt-16 md:mt-0 pl-10' data-aos="fade-up-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <div className=''>
                <h1 className='font-bold text-yellow-600  tracking-wide text-8xl  md:text-xl'>Transform Your Commute with Our Memorable Bus and Train Ads</h1>
                <p className='font-medium text-justify tracking-wide  text-5xl md:text-lg mt-5 text-gray-400 leading-normal'>Our bus and train ads create an unforgettable impression that stays with you. Experience the joy of eco-friendly travel! Whether it’s the city bus or the train, we’re dedicated to offering smoother, faster, and greener commuting options. Hop on board for a stress-free journey, bypass the traffic, and make every ride a breeze. Discover the future of commuting with our innovative transit solutions.</p>
              </div>
              <div className='mt-36 md:mt-10 ml-16 text-white'>
                <div>
                  <div className='flex'>
                    <PiBusDuotone className='text-[200px] md:text-7xl' />
                    <div className='ml-16 md:ml-5 my-auto md:mt-2'>
                      <h1 className="text-6xl mb-5 md:mb-0 md:text-xl">BUS</h1>
                      <p className='text-gray-400 text-5xl md:text-lg'>Full bus, Bus back, Bus shelter</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex mt-16 md:mt-5'>
                    <LiaTrainSolid className='text-[200px] md:text-7xl' />
                    <div className='ml-16 md:ml-5 my-auto md:mt-2'>
                      <h1 className="text-6xl mb-5 md:mb-0 md:text-xl">TRAIN</h1>
                      <p className='text-gray-400 text-5xl md:text-lg'>Full Train</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex mt-16 md:mt-5'>
                    <div><img className='w-[200px] md:w-[70px]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADNElEQVR4nO2Z3YtNURjGD2dmxCTKKG7E4EpKiUgyRVz4A4hMyYWk5IIYmuGCKRcuUTRcUYoyXPi4ouHKoYRJ3PhoZppMmA8f00zz0+qszWvNXufstfc65+xynptT+333s55nr/Wur5PJVFFFFYkBZIENQCtwB3gNfOcv+oFnwA3gALAskwYAC4GzQB/ueAMcBGZXQvg8oAMYJzkGgcNAXbnE79KNmugBzgM7geXALJ0/BZgPrAb2AteBryHvvwVWlVJ4LXA5pOH7wBZgqgPXDGAP8NLg+gXsK4V41eCDkDG8KSFvDbAf+GJwt/sUXwfcMxq4AtR7ngxyJTEBXDKIj3shntzONOCW0dZuHwVrFa/GPbBDz/29EWelcZ17G9gua0f3dqfI/QGsiCu+AfgsyK4a8UbgOcmRAxYJ3ukGryr0mjgGLgqSd6qQDfFqdfWFflUHgn8pMCLibjMTsAAYFQSbjWEjv5DaMrRpU9mI247FwAk9RAI8NYZTi4j1uRo4I15+aMTUmA+gBKx1Iv+Xax3wU/BtM4q6Wz9/4UKa1atqgK1GXBVsgDYLRzswJvLGbNMicFLkdRqxuUCz+nUxsEYQ9poFpJ8FaLRwyPEbYMSSu0Tk9EQWWsDAMUHYERKXU2XWQw9kRd64DwM3BWFzSPwPEjfmwAnMtMXMxFeCb2WlDZDfzd4FJoDTUcgGBN+cFBhoEOFPUcjk/F+XAgP1IjyciCxKvERDKMBEIjJbXJ/CwqZOZ2RiaPJh4JEP8ZU0kKoeGNC5A4nJIgLPBtQB/Zr6TUxWCQPFYCPT24eRQouNLYeUGBjWj4cKvBuaQ5kNhG7m1FfVAk8VeHdSDvmrlYKbOdcaUCtfk+3aBPgo+NZHMV2kvSbB996HgS6d22WJXxB8H4CNUY6Slm10kxIt+M75MKB2fdZlW19CDeEf39RZ3IeBosn6q8e5UrdhUHEm0eScrM+rwaE7CbrllUpZDOgdoqwF9M110RvqOO/iaKDYeSC2+Dgc5K8bA4xGIVf/ZQU4JE34EO/CRV78ERHPud5KpA0tUf+JeUL68Fhpi9q9tbonckZNlBujWsPRyOKrqOI/w29D/Zm9qpIEuwAAAABJRU5ErkJggg==" /></div>
                    <div className='ml-16 md:ml-5 my-auto md:mt-2'>
                      <h1 className="text-6xl mb-5 md:mb-0 md:text-xl">METRO</h1>
                      <p className='text-gray-400 text-5xl md:text-lg'>Interior and Exterior Metro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div id='whatwedo' className=' h-[5700px] md:h-full  mb-32'>
        <div className=' md:ml-[1%] '><section class="section">
          <h2 class="title  text-9xl h-full md:text-6xl">SOLUTIONS WE PROVIDE</h2>
        </section></div>
        <div className='flex md:flex-row overflow-y-scroll hide-scroll-bar flex-col ' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">


          <div className='md:mx-10 my-10 mx-auto'><Card {...stories[0]} /></div>
          <div className='md:mx-10 my-10 mx-auto'><Card {...stories[1]} /></div>
          <div className='md:mx-10 my-10 mx-auto'><Card {...stories[2]} /></div>



          {/* <Card {...stories[0]}/> */}
          <div className='md:mx-10 my-10 mx-auto'><Card {...stories[3]} /></div>
          <div className='md:mx-10 my-10 mx-auto'><Card {...stories[4]} /></div>
        </div>



      </div>
      <div id='clients' className='mb-16 h-[1400px] md:h-full'>
        <div className=' md:ml-[2%]'><section class="section -ml-14">
          <h2 class="title1 text-9xl h-full text-right md:text-6xl">OUR CLIENTS</h2>
        </section></div>
        <div className='' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <section className="mx-32">
            <div className="drop-shadow-[5px_5px_grey] slider">
              <div class="slider-items">
                <img src="https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/03/269-1.png" alt="Land Rover" />
                <img src="https://www.isuzu.in/images/Logo/ISUZU%20LOGO-01.webp" alt="Isuzu" />
                <img src="https://www.mercedes-benz.com/content/dam/brandhub-aem-testcontent/logos/MB-star_n_web.svg" alt="https://www.mercedes-benz.com/content/dam/brandhub-aem-testcontent/logos/MB-star_n_web.svg" />
                <img src="https://pbs.twimg.com/profile_images/1212497855241281536/JaDQeuXl_400x400.jpg" alt="Audi" />
                <img src="https://1000logos.net/wp-content/uploads/2019/12/Jaguar-Logo.png" alt="Jaguar" />
                <img src="https://www.sundarisilks.com/cdn/shop/files/sundari_logo.jpg?v=1643093261" alt="Sundari Silks" />
                <img src="https://jeyachandran.com/cdn/shop/files/Jeyachandran_Logo-removebg.png?v=1" alt="https://www.mercedes-benz.com/content/dam/brandhub-aem-testcontent/logos/MB-star_n_web.svg" />
                <img src="https://d1pdzcnm6xgxlz.cloudfront.net/content/images/logo%402x.png" alt="Pepe Jeans" />
                <img src="https://cdn4.singleinterface.com/files/outlet/logo/272669/logo_jpg.jpg" alt="Easy Buy" />
                <img src="https://derbyjeanscommunity.com/cdn/shop/files/DJC_Logo_1000-250.png?v=1713877651&amp;width=340" />
                <img src="https://www.efifdiamonds.com/cdn/shop/files/Asset_1_4x-8_1_100x.png?v=1668170455" alt="EF-IF Diamond Jewellery" />
                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/logo.svg" alt="Apollo Hospitals" class="ah_logo" />
                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/logo.svg" alt="Apollo Hospitals" class="ah_logo" />
                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/logo.svg" alt="Apollo Hospitals" class="ah_logo" />
                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/logo.svg" alt="Apollo Hospitals" class="ah_logo" />
                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/logo.svg" alt="Apollo Hospitals" class="ah_logo" />


              </div>
            </div>
          </section>
          <section className='mx-32 mt-10'>
            <div className="drop-shadow-[5px_5px_grey] slider">
              <div class="slider-items1">
                <img src="https://mgmhealthcare.in/wp-content/uploads/2021/12/logo.svg" alt="MGM Healthcare | Best Multi-speciality Hospital in Chennai" title="MGM Healthcare | Best Multi-speciality Hospital in Chennai" width="120px" />
                <img src="https://www.kauveryhospital.com/wp-content/themes/KauveryHospital/images/logo.png" alt="Kauvery Hospital" />
                <img width="168" height="68" fetchpriority="high" src="https://www.dragarwal.com/wp-content/uploads/2022/05/main_logo-02-01.svg" alt="Dr Agarwals Eye Hospital_logo" />
                <img src="https://www.parvathyhospital.com/web/assets/img/logo.png" alt="Logo" />
                <img src="https://shrirampropertieschennai.sales-offices.in/images/builder-projects-logo4.jpg" alt="Shriram Properties" />
                <img src="https://incor-pbelcity.com/assets/img/comman/logo.svg" alt="Pbel city" />
                <img src="https://www.vgn.in/asset/img/logo.png" alt="VGN" />
                <img src="https://www.gbrmetals.com/find-a-dealer/images/site/logo.png" alt="GBR TMT" />
                <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2018-03/19/full/1521464266-5205.jpg?im=FeatureCrop,size=(382,233)" alt="Dalmia" />
                <img src="https://www.medall.in/assets/medall.png" alt="medal" />
                <img src="https://www.schooldekho.org/storage/logo//7z2129slyiw4kks440ww88o0ws04csw.png" alt="Velammal New Gen School" />
                <img src="https://www.thevedantaacademy.in/img/vedanta_academy-logo.svg" alt="Vedanta Academy" />
                <img src="https://static.wixstatic.com/media/25a340_2455b6c5ab0d4be69fb34f2bb4574c86~mv2.jpg/v1/fill/w_326,h_106,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/sarvaloka-new-logo.jpg" alt="Top International School in Chennai" />
                <img src="https://sacas.ac.in/wp-content/uploads/2023/04/sacas_logo_new.jpg.webp" />
                <img src="https://sacas.ac.in/wp-content/uploads/2023/04/sacas_logo_new.jpg.webp" />
                <img src="https://sacas.ac.in/wp-content/uploads/2023/04/sacas_logo_new.jpg.webp" />
              </div>
            </div>
          </section>
          {/* <div className='flex justify-around'>

            <div className='md:h-36 h-96 rounded-b-lg  w-3 bg-gray-500'>
            </div>
            <div className=' rounded-b-lg md:h-36 h-96  w-3 bg-gray-500'>
            </div>
          </div> */}
        </div>
      </div>
      <div id='why' className=''>
        <div className='md:ml-[1%]  '><section class="section">
          <h2 class="title  text-9xl h-full mt-80 md:mt-0  md:text-6xl ">WHAT SETS US APART</h2>
        </section></div>
      </div>
      <div className='flex flex-col lg:flex-row  mt-36 md:mt-0 mx-36' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <div className='body1 mx-auto'>
          <div class="container1">
            <div class="card1">
              <div class="image flex items-center justify-center">
                <img href="#" className='md:h-52 h-96' src={success} />
              </div>
              <div class="content">
                <h3 className='font-semibold text-6xl md:text-lg text-white'>PROVEN RECORD OF SUCCESS</h3>
                <p className='text-4xl mt-5 md:mt-0 md:text-sm font-medium text-justify text-gray-300'>Our advertising company boasts a robust portfolio of successful campaigns that have significantly increased brand awareness, engagement, and conversions for a diverse range of clients.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='body1  mx-auto'>
          <div class="container1">
            <div class="card1">
              <div class="image flex items-center justify-center">
                <img href="#" className='md:h-52 h-96' src={strategy} />
              </div>
              <div class="content">
                <h3 className='font-semibold text-6xl md:text-lg uppercase text-white'>Customized, Data-Driven Strategies</h3>
                <p className='text-4xl font-medium  mt-5 md:mt-0 md:text-sm text-justify text-gray-300'>We believe that every brand is unique, and so are its advertising needs. Our team of experts develops personalized marketing strategies based on in-depth market research and data analysis.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='body1 mx-auto'>
          <div class="container1 ">
            <div class="card1">
              <div class="image flex items-center justify-center">
                <img href="#" className='md:h-52 h-96' src={service} />
              </div>
              <div class="content ">
                <h3 className='font-semibold text-6xl md:text-lg uppercase text-white'>Comprehensive Service and Expertise</h3>
                <p className='text-4xl mt-5 md:mt-0  font-medium  md:text-sm text-justify text-gray-300'>With a team of seasoned professionals across various disciplines, we provide holistic solutions that cover every aspect of your advertising needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='testimonials' className='py-16 mb-16 rounded-2xl h-[2200px]  md:h-full mx-10 bg-yellow-600' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        {/* <div className='mb-16'><section class="section1">
          <h2 class="title  text-9xl h-full1md: text-right text-6xl">HEAR FROM OUR CLIENTS</h2>
        </section></div> */}
        <SliderComponent slides={slides} />


      </div>

      <Footer />
    </div>
  )
}

export default Home