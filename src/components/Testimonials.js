import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import { testimonial } from './testimonialsarray';
const Testimonials = () => {
  return (
    <Carousel className="-mt-16"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-1 mb-20 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )} prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}>

      {testimonial.map(test => (

        <div class="container my-24 mx-auto md:px-6 font-[content]">
          <section class="mb-32 text-center lg:text-left">
            <div class="py-12  md:px-12">
              <div class="container mx-auto xl:px-32">
                <div class=" grid items-center lg:grid-cols-2">
                  <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                    <div
                      class="relative z-[1]  block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                      <h2 class="mb-2 text-6xl md:text-3xl font-bold text-primary dark:text-primary-400 font-serif">
                        {test.name}
                      </h2>
                      <p class="mb-4 text-2xl md:text-sm font-semibold">{test.batch} Batch</p>
                      <p class="mb-6 text-3xl md:text-sm text-neutral-500 dark:text-neutral-300">
                        {test.story}
                      </p>


                    </div>
                  </div>
                  <div class="md:mb-12 mx-auto lg:mb-0">
                    <img src={test.img}
                      class="lg:rotate-[6deg] w-80 rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

    </Carousel>
  )
}

export default Testimonials