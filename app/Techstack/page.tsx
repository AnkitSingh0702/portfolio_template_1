import React from 'react'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTypescript,SiExpress,SiReact,SiRedux,SiTailwindcss} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {TbBrandNextjs,TbBrandReactNative} from 'react-icons/tb'
import {FaNodeJs} from 'react-icons/fa'
import Badge from './badge'
import ts from '@/public/language/ts.png'
import java from '@/public/language/java.png'
import js from '@/public/language/js.png'
import py from '@/public/language/py.png'
import next from '@/public/framework/next.png'

import rd from '@/public/framework/rd.png'
import rj from '@/public/framework/rj.png'
import tc from '@/public/framework/tc.png'
import nj from '@/public/framework/nj.png'
import flask from '@/public/framework/flask.png'
import rn from '@/public/framework/rn.png'
import ft from '@/public/framework/ft.png'
import fm from '@/public/framework/fm.png'

import vercel from '@/public/framework/vercel.png'
import fb from '@/public/framework/fb.png'

import vsc from '@/public/tools/vsc.png'
import git from '@/public/tools/git.png'
import expo from '@/public/tools/expo.png'
import github from '@/public/tools/github.png'

function Techstack() {
  return (
    

      <section className='text-white rounded-2xl mt-32 bg-black w-[40rem] h-[40rem] ' id='work'>
        {/* <div className="mt-7 ">
            <div className=' font-semibold tracking-wide  px-1 py-2 text-xl md:text-2xl text-slate-100 select-none'>
             TechStack
            </div>
            <div className=" bg-gradient1-to-r from-white  to-teal-700  w-24 h-2 rounded-xl"></div>

            <div className='  mt-7 gap-x-7 gap-y-3 flex   flex-row flex-wrap pt-1 pb-3 ml-2'>


              
               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <IoLogoJavascript color='#d8be4b' />
               <p className='ml-2'>JavaScript</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
            
               <SiTypescript color ='#38bdf8'/>
               <p className='ml-2'>Typescript</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-2.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               
               <FaJava size ={24}/>
               <p className='ml-4'>Java</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <TbBrandNextjs size={25}/>
               <p className='ml-3'>NextJs</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <FaNodeJs size={20} color ="#026e00"/>
               <p className='ml-4'>Node Js</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <SiExpress size={20} />
               <p className='ml-2'>Express Js</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <SiReact size={20} color ='#38bdf8'/>
               <p className='ml-3'>React</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <TbBrandReactNative size={20} color ='#38bdf8'/>
               <p className='ml-2'>ReactNative</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <SiRedux size={20} color = '#764abc'/>
               <p className='ml-3'>Redux</p> 
               </div>

               <div className="  flex  bg-white/5 text=[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
               <SiTailwindcss size={20} color ='#38bdf8'/>
               <p className='ml-2'>TailwindCss</p> 
               </div>
          </div>
      </div> */}

<div className=' p-8 mt-8 font-noto duration-150 ease-linear'>
      <div className='text-4xl font-bold'>
        Tech Stack
      </div>
      <div className = "bg-gradient-to-r from-red-700  to-purple-900 w-[12rem] h-2 rounded-xl"></div>
      <div className='flex flex-col   p-3 md:p-4 rounded-lg text-neutral-400/70  text-noto text-base tracking-wide  ease-linear duration-100'>
        <div className='text-[#a9a9af] text-lg'>Language's</div>
        <div className='flex flex-row flex-wrap pt-3 pb-3 gap-2'>
          <Badge link={ts} text='Typescript' />
          <Badge link={js} text='Javascript' />
          <Badge link={java} text='Java' />
          <Badge link={py} text='Python' />
          
        </div>
        <div className='text-[#a9a9af] text-lg'>Frameworks / Librarie's</div>
        <div className='flex flex-row flex-wrap pt-3 pb-3 gap-2'>
          <Badge link={next} text='Next.js' />
          <Badge link={rn} text='React Native' />
          <Badge link={ft} text='Flutter' />
          <Badge link={rj} text='React.js' />
          <Badge link={nj} text='Node.js' />
          
          <Badge link={flask} text='Flask' />
          <Badge link={tc} text='Tailwind Css' />
          <Badge link={fm} text='Framer Motion' />
          <Badge link={rd} text='Redux' />
        </div>


        <div className='text-[#a9a9af] text-lg'>Deployment</div>
        <div className='flex flex-row flex-wrap pt-3 pb-3 gap-2'>
          <Badge link={vercel} text='Vercel' />
          <Badge link={fb} text='Firebase' />
        </div>
        <div className='text-[#a9a9af] text-lg'>Developer Tool's</div>
        <div className='flex flex-row flex-wrap pt-3  gap-2'>
          <Badge link={git} text='Git' />
          <Badge link={github} text='GitHub' />
          <Badge link={vsc} text='VsCode' />
          <Badge link={expo} text='Expo' />
        </div>
      </div>
    </div>
</section>
    
  )
}

export default Techstack;