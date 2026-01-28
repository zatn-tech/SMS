
import bus from '../assets/images/bus.jpeg'
import brand from '../assets/images/brand1.jpg'
import tv from '../assets/images/television1.jpg'
import out from '../assets/images/outdoor.jpg'
import mall from '../assets/images/mall.jpeg'

const busArr=["Full Bus Branding","Bus Back Panel","Bus Side Wraps"]
const outArr=["Unipoles","Hoardings/Billboards","Mini Hoardings","Bus Shelters","Centre Median","LED Hoardings","Traffic Police Barricades","Traffic Awareness Boards","Digital Wall Wraps","Wall Painting"]
const mallArr=["Lift Branding","Standies/Kiosk","Escalator Branding","Drop Downs","LED Sign Boards"]
const eleArr=["NewsPaper Advertising","FM/Radio Advertising","Cable TV Advertising","Television Advertising","Digital Advertising"]
const brandArr=["Automobile Branding","Tricycle Branding","Temporary Boards","No parking Branding","Look Walkers"]
export const stories=[
    {
        title:"Doctors",
        count:"600",
        story:busArr,
        img:bus,
    },
    {
        title:"Doctors",
        count:"600",
        story:outArr,
        img:out,
    },
    {
        title:"Engineers",
        count:"2500",
        story:mallArr,
        img:mall,
    },
    {
        title:"State Ranks",
        count:"6",
        story:eleArr,
        img:tv,
    },
    {
        title:"District Ranks",
        count:"34",
        story:brandArr,
        img:brand,
    },
]

//        <AnimatedCursor
//         innerSize={10}
//         outerSize={20}
//         color="0,0,0"
//         outerAlpha={0.2}
//         innerScale={0.7}
//         outerScale={2}
//       />
//             {/* <motion.div
//         className='cursor z-10'
//         variants={variants}
//         animate={cursorVariant}
//       /> */}
//             <LandingPage/>
//             <div >
//             <div><Header /></div>
//             <div className='px-32 py-16 bg-gradient-to-tr from-green-700 to-white'>
//                 <div className='mb-16'><section class="section">
//   <h2 class="title text-6xl">OUR EXPERTISE</h2>
// </section></div>
//                 <div class="mx-16 wrapper">
//                 <div className="flex container">
//       <input type="radio" name="slide" id="c1" checked={selected === 'c1'} onChange={handleChange} />
//       <label htmlFor="c1" className="card">
//         <div className="row">
//           <div className="icon">1</div>
//           <div className="description">
//             <h4>OUTDOOR ADVERTISING / OOH</h4>
//             <p>Winter has so much to offer - creative activities</p>
//           </div>
//         </div>
//       </label>

//       <input type="radio" name="slide" id="c2" checked={selected === 'c2'} onChange={handleChange} />
//       <label htmlFor="c2" className="card">
//         <div className="row">
//           <div className="icon">2</div>
//           <div className="description">
//             <h4>DIGITAL ADVERTISING</h4>
//             <p>Gets better every day - stay tuned</p>
//           </div>
//         </div>
//       </label>

//       <input type="radio" name="slide" id="c3" checked={selected === 'c3'} onChange={handleChange} />
//       <label htmlFor="c3" className="card">
//         <div className="row">
//           <div className="icon">3</div>
//           <div className="description">
//             <h4>TELEVISION</h4>
//             <p>Help people all over the world</p>
//           </div>
//         </div>
//       </label>

//       <input type="radio" name="slide" id="c4" checked={selected === 'c4'} onChange={handleChange} />
//       <label htmlFor="c4" className="card">
//         <div className="row">
//           <div className="icon">4</div>
//           <div className="description">
//             <h4>PRINT ADVERTISING</h4>
//             <p>Space engineering becomes more and more advanced</p>
//           </div>
//         </div>
//       </label>

//       <input type="radio" name="slide" id="c5" checked={selected === 'c5'} onChange={handleChange} />
//       <label htmlFor="c5" className="card">
//         <div className="row">
//           <div className="icon">5</div>
//           <div className="description">
//             <h4>BRAND PROMOTION</h4>
//             <p>Space engineering becomes more and more advanced</p>
//           </div>
//         </div>
//       </label>
//     </div>
// </div>
//                 <div></div>
//             </div>
//             <div className='px-32 py-32'>
//             <div className='mb-16'><section class="section">
//   <h2 class="title text-6xl">WHAT WE DO</h2>
// </section></div>
//            <div className='flex'>

//            <div className='flex mx-auto'>
//             <div className='mx-10'><Card {...stories[0]}/></div>
//             <div className='mx-10'><Card {...stories[1]}/></div>
//             <div className='mx-10'><Card {...stories[2]}/></div>
//            </div>
           
//            </div>
//            <div className='flex mt-16'>

//            <div className='flex mx-auto'>
//             {/* <Card {...stories[0]}/> */}
//             <div className='mx-10'><Card {...stories[3]}/></div>
//             <div className='mx-10'><Card {...stories[4]}/></div>
//            </div>
           
//            </div>
//             </div>
//             <div className='px-32'>
//             <div className='mb-16'><section class="section">
//   <h2 class="title text-6xl">ACHIEVEMENTS</h2>
// </section></div>
//             </div>
//             <div className='my-32 px-32'>
//             <div className='mb-16'><section class="section">
//   <h2 class="title text-6xl">WHY CHOOSE US</h2>
// </section></div>
//             </div>
//             <div className='clients px-32'>
//             <div className='mb-16'><section class="section">
//   <h2 class="title text-6xl">OUR CLIENTS</h2>
// </section></div>
//             <section>
//         <div className="drop-shadow-[20px_20px_green] slider">
//             <div class="slider-items">
//                 <img src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2"
//                     alt=""/>
//                 <img src="https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2"
//                     alt=""/>
//                 <img src="https://www.zarla.com/images/disney-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2"
//                     alt=""/>
//                 <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Loon_%28company%29_logo.svg/800px-Loon_%28company%29_logo.svg.png"
//                     alt=""/>
//                 <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
//                     alt=""/>
//                 <img src="https://www.svgrepo.com/show/303123/bmw-logo.svg" alt=""/>
//                 <img src="https://brandlogos.net/wp-content/uploads/2014/12/starbucks_coffee_company-logo_brandlogos.net_9jqys.png"
//                     alt=""/>
//                 <img src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2"
//                     alt=""/>
//                 <img src="https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2"
//                     alt=""/>
//                 <img src="https://www.zarla.com/images/disney-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2"
//                     alt=""/>
//                 <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Loon_%28company%29_logo.svg/800px-Loon_%28company%29_logo.svg.png"
//                     alt=""/>
//                 <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
//                     alt=""/>
//                 <img src="https://www.svgrepo.com/show/303123/bmw-logo.svg" alt=""/>
//                 <img src="https://brandlogos.net/wp-content/uploads/2014/12/starbucks_coffee_company-logo_brandlogos.net_9jqys.png"
//                     alt=""/>


//             </div>
//         </div>

//     </section>
//             </div>
//             <div className='py-32 px-32'>
//             <div className='mb-16'><section class="section">
//   <h2 class="title text-6xl">HEAR FROM OUR CLIENTS</h2>
// </section></div>
//             <SliderComponent slides={slides} />
            

//             </div>
//             </div>
//             </div>
//             <Footer />
//         </div>