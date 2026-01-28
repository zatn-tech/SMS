import React from 'react';

const CardComponent = () => {
  return (
    <div className="wrapper flex justify-center items-center min-h-screen">
      <div className="container flex flex-wrap justify-center">

        <input type="radio" name="slide" id="c1" className="hidden" defaultChecked />
        <label htmlFor="c1" className="card relative w-20 h-32 rounded-2xl bg-cover cursor-pointer overflow-hidden m-5 flex items-end transition-all duration-700">
          <div className="row flex items-center">
            <div className="icon bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center m-4">1</div>
            <div className="description opacity-0 transform translate-y-8 transition-all duration-300 delay-300">
              <h4 className="uppercase">OUTDOOR ADVERTISING / OOH</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c2" className="hidden" />
        <label htmlFor="c2" className="card relative w-20 h-32 rounded-2xl bg-cover cursor-pointer overflow-hidden m-5 flex items-end transition-all duration-700">
          <div className="row flex items-center">
            <div className="icon bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center m-4">2</div>
            <div className="description opacity-0 transform translate-y-8 transition-all duration-300 delay-300">
              <h4 className="uppercase">DIGITAL ADVERTISING</h4>
              <p>Gets better every day - stay tuned</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c3" className="hidden" />
        <label htmlFor="c3" className="card relative w-20 h-32 rounded-2xl bg-cover cursor-pointer overflow-hidden m-5 flex items-end transition-all duration-700">
          <div className="row flex items-center">
            <div className="icon bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center m-4">3</div>
            <div className="description opacity-0 transform translate-y-8 transition-all duration-300 delay-300">
              <h4 className="uppercase">TELEVISION</h4>
              <p>Help people all over the world</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c4" className="hidden" />
        <label htmlFor="c4" className="card relative w-20 h-32 rounded-2xl bg-cover cursor-pointer overflow-hidden m-5 flex items-end transition-all duration-700">
          <div className="row flex items-center">
            <div className="icon bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center m-4">4</div>
            <div className="description opacity-0 transform translate-y-8 transition-all duration-300 delay-300">
              <h4 className="uppercase">PRINT ADVERTISING</h4>
              <p>Space engineering becomes more and more advanced</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c5" className="hidden" />
        <label htmlFor="c5" className="card relative w-20 h-32 rounded-2xl bg-cover cursor-pointer overflow-hidden m-5 flex items-end transition-all duration-700">
          <div className="row flex items-center">
            <div className="icon bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center m-4">5</div>
            <div className="description opacity-0 transform translate-y-8 transition-all duration-300 delay-300">
              <h4 className="uppercase">BRAND PROMOTION</h4>
              <p>Space engineering becomes more and more advanced</p>
            </div>
          </div>
        </label>
        
      </div>
    </div>
  );
};

export default CardComponent;
