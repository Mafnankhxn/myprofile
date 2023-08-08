import React from 'react'
const navbar = () => {
  return (
    <><section className='flex flex-wrap justify-around pt-20'>
      <div className='grid justify-left'>
        <span className='font-extrabold font-mono text-7xl text-white'>Welcome to</span>
        <span className='font-extrabold font-mono text-7xl mt-5'>CodePlays</span>
        <span className='font-mono text-5xl font-thin mt-5 text-slate-700'>Developer Studio</span>
      </div>
      <div>
        <img src="hero2.jpg" alt="web developer" height={150} />
      </div>
    </section>
    <div className='mt-20 flex justify-center'>
      <img src="heroimg.svg" alt="computer" height={800} width={800}/>
      </div></>
  )
}

export default navbar
 