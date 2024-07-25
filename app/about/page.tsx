import React from 'react';
// import Techstack from '../screen/Techstack';
import Image from 'next/image';
import Spotify from '../screen/Spotify';
function AboutUs() {
  return (
    <div
      className='text-white rounded-2xl mt-32 bg-black w-[40rem] h-[40rem]'
      id='about'
    >
      <div className='text-4xl font-bold p-10'>
        About
        <div className = "bg-gradient-to-r from-red-700  to-purple-900 w-[7rem] h-2 rounded-xl"></div>
      </div>
    <div className='px-9'>
     <div className=' text-lg text-[#b6b6b9] tracking-wide sm: '>
     Hi, I'm <span className='font-bold'>Ankit Singh</span>, a passionate <span className='font-bold'>Frontend Developer</span> currently in my 4th year of pursuing a B.Tech in Computer Science Engineering. I have a strong foundation in modern web technologies and a keen eye for creating visually appealing, user-friendly interfaces. <div  className=' text-lg text-[#b6b6b9] tracking-wide sm: '>I am actively seeking full-time job opportunities where I can leverage my expertise, creativity, and enthusiasm to contribute to innovative projects in a dynamic and collaborative work environment. I am eager to bring my technical skills and dedication to a forward-thinking team.</div>
     </div>
    </div>

    <div className='flex gap-2 items-center p-10 mb-3'>
      <span className='text-xl font-bold text-[#b6b6b9] tracking-wide sm:'>Built With</span>
      <div className='cursor-pointer flex gap-2  '>
      <Image src ="/framework/rj.png" alt ="" height={28} width={28} className='hover:-translate-y-1 hover:active:scale-90 ease-linear duration-100' />
      <Image src ="/framework/next.png" alt ="" height={28} width={28} className='hover:-translate-y-1 hover:active:scale-90 ease-linear duration-100'/>
      <Image src ="/framework/tc.png" alt ="" height={28} width={28} className='hover:-translate-y-1 hover:active:scale-90 ease-linear duration-100'/>
      <Image src ="/framework/vercel.png" alt ="" height={28} width={28} className='hover:-translate-y-1 hover:active:scale-90 ease-linear duration-100'/>
      <Image src ="/framework/rj.png" alt ="" height={28} width={28} className='hover:-translate-y-1 hover:active:scale-90 ease-linear duration-100'/>
      </div>
      
    </div>
    <Spotify />
      {/* <Techstack/> */}
    </div>
  );
}

export default AboutUs;
