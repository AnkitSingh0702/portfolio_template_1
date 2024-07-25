"use client"
import Image from 'next/image'
import { social_links } from "./data/social";
import Buttons from "../components/ui/buttonsocial";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';
import { GoLink } from 'react-icons/go';
import Mainpart from '@/components/ui/mainpart';
import Navbar from './screen/navbar';
import AboutUs from './about/page';
import { useState } from 'react';
import Projects from './screen/Project';
import Work from './screen/Work';
import Techstack from './Techstack/page';

export default function Home() {
  const [page, setPage] = useState('about'); // Default to 'about'
 
  const renderPage = () => {
    switch (page) {
      case 'about':
        return <AboutUs />;
      case 'projects':
          return <Projects />;
      case 'work':
        return <Work/>
      case 'techstack':
        return <Techstack/>
    }
  };
  return (
    <div className='flex flex-col md:flex-row'>
     
      <div className="flex   text-white">
        <div className='relative m-[4rem] bg-black w-[23rem] h-[40rem] mt-[8rem] rounded-xl flex flex-col items-center'>
          <Image
            src="/pic.png"
            alt='hero'
            width={190}
            height={180}
            className='rounded-xl -mt-[6rem]'
          />
          <div className='mt-4 text-center'>
            <p className='text-2xl font-bold tracking-wider'>Ankit Singh</p>
            <p className='text-base text-zinc-400  tracking-tight'>Frontend Developer</p>
          </div>

          <div className='flex flex-row mt-3 gap-3 cursor-pointer'>
          {social_links.map((e, i) => {
            return <Buttons key={i} link={e.link} name={e.name} />;
          })}
        </div>
          
         
        <div className="mt-5 bg-zinc-900 p-5 rounded-2xl w-[18rem] text-left">
            <div className="flex items-center mb-4 gap-1">
              <FaPhoneAlt className="text-pink-500 mr-3" />
              <div className='flex flex-col'>
              <span className='text-sm text-zinc-400'>Phone </span>
              <span>+91 620XXXXXX</span>
              </div>
            </div>
            <div className='border border-b-0 border-zinc-600'></div>

            <div className="flex items-center mb-4 mt-2 ">
              <FaEnvelope className="text-green-500 mr-3" />
              <div className='flex flex-col'>
              <span className='text-sm text-zinc-400'>Email </span>
              <span className='text-sm tracking-tighter'>as.ankitsingh0702@gmail.com</span>
              </div>
            </div>
            <div className='border border-b-0 border-zinc-600'></div>
            <div className="flex items-center mb-4 mt-2">
              <FaMapMarkerAlt className="text-red-500 mr-3" />
              <div className='flex flex-col'>
              <span className='text-sm text-zinc-400'>Location </span>
              <span className=' tracking-tighter'>Ranchi Jharkhand</span>
              </div>
            </div>
            <div className='border border-b-0 border-zinc-600'></div>
            <div className="flex items-center mb-4 mt-2">
              <FaBirthdayCake className="text-purple-500 mr-3" />
              <div className='flex flex-col'>
              <span className='text-sm text-zinc-400'> Birthday</span>
              <span className=' tracking-tighter'>7 July 2002</span>
              </div>
            </div>
          </div>
          
          <button className='mt-4 flex items-center justify-center gap-2 w-32 h-10 px-4 py-4 rounded-md bg-zinc-200/10 text-zinc-400 hover:text-neutral-100 shadow-md select-none hover:brightness-150 active:scale-90 ease-linear duration-100 cursor-pointer'>
      <GoLink size={20}/>
      Resume
      </button>
      </div>
    </div>
      <main>
        {renderPage()}
      </main>
    <Navbar setPage={setPage} />
    {/* <Mainpart/> */}
   
    
    </div>
  )
}
