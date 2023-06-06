import React, { useEffect, useState } from 'react'
import axios from'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function LazyLoading() {
    const [Images, setImages] = useState()
    const url='https://api.unsplash.com/photos/?client_id=OL20Fsi5q0fwTIxAxEiXx3Kht-3B8kdVIoMUg6ysBYc'

const getImages=()=>
{
axios.get(url).then(data=>
    {
        console.log(data);
        setImages(data.data)
    })
}


    useEffect(()=>
    {
  getImages()
    })

if(!Images)
{
return(
    <h1>Loading</h1>
)
}
else

  return (
<>
<div >
{Images.map((value,key)=>
{
  return(
    <div key={key} className='flex justify-center mt-4'>
    <div className=' w-1/2 p-10  h-auto shadow-2xl '>
        <div className="  h-auto"></div>
    <LazyLoadImage effect='blur' src={value.urls.regular}alt="" />
    </div>
        </div>
  )  
})}

   
</div>
</>
  )
}

export default LazyLoading