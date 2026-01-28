import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slider } from '@material-tailwind/react';

const SliderComponent = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed as needed
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container  mx-auto md:px-6 font-[content]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <section className="text-center lg:text-left">
              <div className="md:px-12">
                <div className="container  mx-auto xl:px-32">
                  <div className="grid  items-center lg:grid-cols-2">
                    <div className="mb-12 md:mt-12 px-10 md:px-0 lg:mt-0 lg:mb-0">
                      <div
                        className="relative z-[1] block rounded-lg  bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14"
                      >
                        <h1 className="mb-2 text-8xl md:text-3xl font-bold text-[hsla(61,65%,83%,1)] dark:text-primary-400 font-serif">
                          {slide.name}
                        </h1>
                        {/* <p className="mb-4 mt-16 md:mt-0 text-5xl md:text-sm font-semibold">{slide.batch} Batch</p> */}
                        <p className="mb-6 leading-normal tracking-wide mt-4 text-6xl text-justify md:text-sm text-neutral-500 dark:text-neutral-300">
                          {slide.story}
                        </p>
                        <p className='text-white text-7xl md:text-2xl'>{slide.rating}</p>
                      </div>
                    </div>
                    <div className="md:mb-12 mx-auto lg:mb-0">
                      <img
                        src={slide.img}
                        className="lg:rotate-[6deg]  md:w-80 rounded-lg shadow-lg dark:shadow-black/20"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
};

export default SliderComponent;
