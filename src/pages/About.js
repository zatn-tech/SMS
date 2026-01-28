import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.jpg'
import VerticalMenu from '../components/VerticalMenu'
import i1 from '../assets/images/OLPWT20.jpg'
import SliderComponent from '../components/SliderComponent'
import about from '../assets/images/about.gif'
import expertise from '../assets/images/expertise.jpeg'
import digital from '../assets/images/digital.jpg'
import ooh from  '../assets/images/OOH.gif'
import unified from '../assets/images/unified.gif'
import p1 from '../assets/images/pp1.jpg'
import p2 from '../assets/images/pp2.jpg'
import p3 from  '../assets/images/pp3.jpg'
import tv from '../assets/images/television.jpg'
import ImageSlider1 from '../components/ImageSlider1'
import { managementarr } from '../components/managementarray'
import CountUp from 'react-countup';
import Footer from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from '../components/Menu'

const About = () => {
  const [story, setStory] = useState(managementarr[0].Stories)
  const [image, setImage] = useState(managementarr[0].Image)
  const [name, setName] = useState(managementarr[0].Name)
  const [designation, setDesignation] = useState(managementarr[0].Designation)
  const [studies, setStudies] = useState(managementarr[0].Studies)
  const images = [expertise, about, digital, tv]
  const peimages=[p1,p2,p3]
  const menu = [
    { title: 'Unified Proficiency', link: 'who' },
    { title: 'Why OOH', link: 'ooh' },
    { title: 'Planning and Execution', link: 'planning' },
    { title: 'Management', link: 'management' }
  ]
  useEffect(()=>{
    AOS.init()
  },[])
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='w-[1500px] md:w-full'>
      <div  className='home h-[2800px] md:h-screen overflow-hidden'>
        <div className='flex justify-between mx-16 pt-5'>
          <div>
            <img className='md:w-36 w-96' src={logo} />
          </div>
          <div className="relative md:hidden md:min-h-screen ">
      <header className="flex justify-end p-4">
        <button className="text-9xl text-white" onClick={toggleMenu}>
          &#9776;
        </button>
        
      </header>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
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
        </div>
        <div >
          <div className='mt-[30%] md:mt-10'>

            {/* <h1 className='ml-[15%]    text-yellow-600 drop-shadow-[2px_1px_white] font-semibold text-9xl md:text-6xl'>
              BUSINESS <br /> ADVERTISING COMPANY
            </h1> */}
            <div className='text-white    ml-[15%] md:ml-[25%] flex mt-36  '>
              <div className='mx-16  text-[200px] md:text-7xl text-white  drop-shadow-[10px_10px_rgb(202,138,4)] md:drop-shadow-[3px_3px_rgb(202,138,4)]'><p className='font-bold'>ABOUT US</p></div>
              {/* <div><button className='mr-16 border-2 hover:-translate-y-2 duration-500 border-yellow-600 px-5 py-2 bg-yellow-600 w-36 rounded-tr-lg rounded-bl-lg shadow-[2px_2px_white]'>Our Services</button></div> */}
              {/* <div><button className='mr-16 border-2 border-green-800 bg-green-800 hover:-translate-y-2 duration-500 px-5 py-2 w-36 rounded-tr-lg rounded-bl-lg shadow-[2px_2px_white]'>Get Quote</button></div> */}

            </div>
           
          </div>


        </div>
        <div className='md:-mt-36 mt-96 ml-[65%] md:ml-[85%]'>
          <VerticalMenu menu={menu} />
          {/* <FloatingWhatsApp phoneNumber='7010354265'/> */}
        </div>

      </div>
      <div id='who' className='h-[2800px] md:h-full'>
          <div className='md:ml-[1%] -ml-14'>

            <section class=" section">
              <h2 class="text-9xl md:text-6xl title">UNIFIED PROFICIENCY</h2>
            </section>
          </div>
        <div className='px-32 pb-16 '>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-[50%]' data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <img src={unified} />
            </div>
            <div className='md:w-[50%] md:my-auto mt-36 ' data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <div className=' text-center'>
                <h3 className='md:ml-16 text-8xl  text-yellow-600 drop-shadow-[2px_1px_black] font-semibold md:text-5xl mb-10'>SMS COMMUNICATIONS</h3>
              </div>
              <div className='md:ml-16 '>
                <p>
                  <p className='text-justify tracking-wide md:leading-7 text-5xl md:text-lg leading-normal'>With a combined experience of over a century, our team brings unparalleled expertise to the table, honed through years of collaboration. Powered by a highly skilled workforce, our SMS communication platform ensures seamless engagement with your target audience. Specializing in outdoor advertising, we offer a diverse array of innovative solutions tailored to elevate your brand's visibility. Renowned for our bespoke approach, we stand as industry leaders, dedicated to delivering excellence in every campaign. With the ability to reach expansive audiences, we are poised to redefine success for your business with unwavering professionalism and refined sophistication.</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='ooh' className='h-[3000px] md:h-full'>
          <div className='md:ml-[1%] '>

            <section class=" section">
              <h2 class="title1 text-right text-9xl md:text-6xl">WHY OOH IS IMPORTANT</h2>
            </section>
          </div>
        <div className='px-32 pb-16 '>
          <div className='flex md:flex-row md:items-center flex-col'>
            <div className='md:w-[50%] md:my-auto mb-36' data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <div className='my-auto text-center'>
                <h3 className='md:ml-16 text-8xl  text-yellow-600 drop-shadow-[2px_1px_black] font-semibold md:text-5xl mb-10'>OUT-OF-HOME ADVERTISING</h3>
              </div>
              <div className='mr-16 '>
                <p>
                  <p className='text-justify tracking-wide md:leading-7 text-5xl md:text-lg leading-normal'>Out-of-Home (OOH) advertising is essential due to its broad reach and constant visibility in high-traffic public areas, ensuring that diverse audiences consistently see the ads. The large, bold designs of OOH ads create a lasting impression, significantly enhancing brand awareness and recall. Strategically placed to target specific geographic locations and demographics, these ads boost relevance and engagement. OOH advertising complements digital campaigns by driving online interactions through QR codes and URLs, providing a cohesive marketing strategy. Its creative flexibility, variety of formats, and cost-effective long-term exposure build trust and credibility while engaging captive audiences and fostering community connections, ultimately offering a high return on investment.</p>
                </p>
              </div>
            </div>
            <div className=' md:w-[50%]' data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <img src={ooh}  className='w-full'/>
            </div>
          </div>
        </div>
      </div>
      <div id='planning' className='h-[3000px] md:h-full'>
        <div className=''>
          <div className='md:px-32 px-16  pb-16 '>
            <div className='flex md:flex-row flex-col my-16'>
              <div className='md:w-[60%] pb-32 md:pb-0 md:h-[700px] bg-green-800 '>
                <div className='my-16'>
                  <h1 className='my-5 font-bold text-center text-yellow-600 drop-shadow-[1px_1px_white] text-8xl md:text-5xl'>PLANNING AND EXECUTION</h1>
                  <p className='mx-16 text-justify text-5xl tracking-wide md:text-lg leading-normal md:leading-7 mt-10 text-gray-300'>With over a century of collective experience, SMS Communications excels in delivering strategic, innovative, and results-driven solutions for brands nationwide. Our seasoned team prioritizes meticulous strategic planning by analyzing market trends, consumer behavior, and competitor strategies to craft tailored advertising and marketing plans. We excel in executing campaigns with creativity and precision, ensuring that every aspect resonates with target audiences. Tailoring our services to meet the specific goals and budget requirements of each client, we guarantee maximum ROI for every campaign, whether for small startups or large corporations. As experts in digital brand building exercises on various platforms, including SEO optimization and social media management, we elevate brand visibility and engagement in today's digital landscape. Trust SMS Communications as your dependable partner in advertising and marketing endeavors; our commitment to excellence and innovation ensures your brand's success and growth.</p>
                </div>

              </div>
              <div className='md:-ml-5 -mt-16  md:mx-0 mx-32  shadow-[8px_8px_rgb(202,138,4)] md:flex-1 md:my-auto md:h-[500px] h-[1000px]  md:w-[40%]'>
                <ImageSlider1 images={peimages} />
              </div>

            </div>

          </div>
        </div>
      </div>
      <div id='management'>
        <div className='md:ml-[1%] ml-14'>

          <section class=" section">
            <h2 class="title text-9xl md:text-6xl">OUR MANAGEMENT TEAM</h2>
          </section>
        </div>
        <div className="flex px-10 lg:px-32 pb-16">
          <div className='md:grid md:grid-cols-3 mx-auto gap-8' data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            {managementarr.map(m1 => (

              <div className="flex md:my-5 my-20 shadow-lg shadow-yellow-600 h-[300px]  w-[1000px]  p-2  md:w-96 md:h-32 cursor-pointer hover:bg-gray-100 pl-[10%] md:pl-2 duration-500" onClick={() => {
                setName(m1.Name)
                setStudies(m1.Studies)
                setDesignation(m1.Designation)
                setStory(m1.Stories)
                setImage(m1.Image)

              }}>
                <div className="my-auto ">

                  <div className="">
                    <img className="md:w-20 w-52 md:h-20" src={m1.Image} />
                  </div>
                </div>
                <div className="md:ml-5 ml-16 my-auto ">
                  <div className="md:text-2xl text-6xl text-green-800 ">{m1.Name}</div>
                  <div className="text-4xl mt-3 md:mt-[-4px] md:text-[15px] font-medium text-gray-500 ">{m1.Designation}</div>
                  {/* <div className="text-4xl mt-3 md:mt-0 md:text-sm text-gray-500">{m1.Studies}</div> */}
                  <div className="text-4xl mt-3 md:mt-[-4px] md:text-sm font-medium text-gray-500 ">{m1.Phone}</div>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      </div>
      <div id='success'>
        <div className='flex py-2 mb-16  text-white  rounded-lg bg-yellow-600  w-fit mx-auto '>
          <div className='border-r-[1px]  md:px-20 px-16 py-32 md:py-7 border-white '>
            <CountUp start={0} end={1500} delay={0} enableScrollSpy={true}>
              {({ countUpRef }) => (
                <div className='flex '>
                  <span className='text-8xl md:text-3xl font-semibold mr-2' ref={countUpRef} /><div className='my-auto text-8xl md:text-lg'>+</div>
                </div>
              )}
            </CountUp>
            <div>
              <p className='text-5xl md:text-sm mt-5 md:mt-0 text-gray-300'>Hoardings</p>
            </div>

          </div>
          <div className='border-r-[1px]  md:px-20 px-16 py-32 md:py-7 border-white'>
          <CountUp start={0} end={2500} delay={0} enableScrollSpy={true}>
              {({ countUpRef }) => (
                <div className='flex '>
                  <span className='text-8xl md:text-3xl font-semibold mr-2' ref={countUpRef} /><div className='my-auto text-8xl md:text-lg'>+</div>
                </div>
              )}
            </CountUp>
            <div>
              <p className='text-5xl md:text-sm mt-5 md:mt-0 text-gray-300'>Barricades</p>
            </div>
          </div>
          <div className='md:px-20 px-16 py-32 md:py-7'>
          <CountUp start={0} end={500} delay={0} enableScrollSpy={true}>
              {({ countUpRef }) => (
                <div className='flex'>
                  <span className='text-8xl md:text-3xl font-semibold mr-2' ref={countUpRef} /><div className='my-auto text-8xl md:text-lg'>+</div>
                </div>
              )}
            </CountUp>
            <div>
              <p className='text-5xl md:text-sm mt-5 md:mt-0 text-gray-300'>Advertisements</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default About