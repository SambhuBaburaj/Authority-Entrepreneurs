import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import './Style/FadeInContent.css'
function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentClasses = classNames('fade-in-content', {
    'fade-in-visible': isVisible,
  });

  return (
    <>
        <div className=' mt-5'> 
        <div className={contentClasses}>
        <div className='text-4xl font-bold flex justify-center '>Shape your world with</div><p className='text-5xl font-extrabold text-purple-500 flex justify-center'>Reimagination</p>

        </div>
<div className={`mt-6 ${contentClasses}`}> 
<p className='flex justify-center '>We’re passionate about creating custom digital </p>
<p className='flex justify-center'>solutions that drive real results and we take pride in</p>
<p className='flex justify-center'>delivering exceptional service that exceed our client’s</p>
<p className='flex justify-center'>expectations, every time.</p>

</div>

    </div>

<div className={`mt-6 ${contentClasses}`} >
<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png" alt="Modern building architecture"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">ABC company</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Come Join US</a>
      <p className="mt-2 text-slate-500">we Help you to build your dream Project.</p>
    </div>
  </div>
</div>
</div>



    </>

  )
}

export default Home