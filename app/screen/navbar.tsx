import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaStackExchange } from "react-icons/fa";


interface NavbarProps {
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
  return (
    <div className='ml-10 flex flex-col justify-around text-white mt-32 bg-black rounded-2xl w-[9rem] h-[40rem]'>
      
      <div className='m-[2rem] flex flex-col rounded-xl justify-center items-center bg-zinc-800 w-[5rem] h-[5rem] hover:text-neutral-100 shadow-md select-none hover:brightness-150 active:scale-90 ease-linear duration-100 cursor-pointer'>
        <FaRegUser />
        <button onClick={() => setPage('about')}>About</button>
      </div>

      <div className='ml-8 mb-4 m-[2rem] flex flex-col rounded-xl justify-center items-center bg-zinc-800 w-[5rem] h-[5rem] hover:text-neutral-100 shadow-md select-none hover:brightness-150 active:scale-90 ease-linear duration-100 cursor-pointer'>
        <FaCode />
        <button onClick={() => setPage('projects')}>Project</button>
      </div>

      <div className='ml-8 m-[2rem] flex flex-col rounded-xl justify-center items-center bg-zinc-800 w-[5rem] h-[5rem] hover:text-neutral-100 shadow-md select-none hover:brightness-150 active:scale-90 ease-linear duration-100 cursor-pointer'>
        <MdOutlineWorkOutline />
        <button className='flex flex-col justify-center items-center text-sm mt-1' onClick={() => setPage('work')}>Work Experience</button>
      </div>

      <div className='ml-8 m-[2rem] flex flex-col rounded-xl justify-center items-center bg-zinc-800 w-[5rem] h-[5rem] hover:text-neutral-100 shadow-md select-none hover:brightness-150 active:scale-90 ease-linear duration-100 cursor-pointer'>
        <FaStackExchange />
        <button className='flex flex-col justify-center items-center text-sm mt-1' onClick={() => setPage('techstack')}>Tech Stack</button>
      </div>

    </div>
  );
}

export default Navbar;
