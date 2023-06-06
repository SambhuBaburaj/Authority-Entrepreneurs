import React from 'react'

import img1 from '../Images/1920 x 1080 HD Wallpapers 2.jpg'
import img2 from '../Images/1920 x 1080 HD Wallpapers 3.jpg'
import img3 from '../Images/1920 x 1080 HD Wallpapers 5.jpg'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
function Slideshow() {
  return (
  <>
  <h1 className='text-4xl font-bold text-violet-500 mt-5 mb-5 flex justify-center'>Slide Show
</h1>
  <div className='w-auto h-auto flex justify-center'>
<div className="w-2/4">
<div className="slide-container object-fill ">
    <Slide autoplay={true} duration={2000}>
      <div className="each-slide ">
        <img className='object-fill   h-full w-full' src={img1} alt="Slide 1" />
        <div className="slide-caption font-bold flex justify-center">Creativity takes courage.</div>
      </div>
      <div className="each-slide">
        <img className='object-fit  h-full w-full' src={img2} alt="Slide 2" />
        <div className="slide-caption font-bold flex justify-center">If I could say it in words there would be no reason to paint.</div>
      </div>
      <div className="each-slide">
        <img className='object-fill h-full w-full ' src={img3} alt="Slide 3" />
        <div className="slide-caption font-bold flex justify-center">Painting is just another way of keeping a diary</div>
      </div>
    </Slide>
  </div>
</div>
  </div>
  </>
  )
}
export default Slideshow