import React from 'react'
import CountUp,{ useCountUp } from 'react-countup';

const Card = (story) => {
    useCountUp({
        ref: 'counter',
        // end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });
  return (
    <div className="md:w-[200px]  h-[1000px] w-[800px] md:h-[350px] font-[content]" id="flip-card">
    <div id="flip-card-inner" >
        <div id="flip-card-front">
            <img className="z-10 h-[800px] md:h-[300px]" src={story.img}/>
        </div>
        <div id="flip-card-back">
            
            <p className="text-blue-950 font-bold mx-16 md:mx-1 text-left"><ul className='ml-6 list-disc'>{story.story.map(s1=>(
                <li className='text-5xl md:text-[15px] my-10 md:my-2 md:font-medium'>{s1}</li>
            ))}</ul></p>
        </div>
    </div>
</div>
  )
}

export default Card