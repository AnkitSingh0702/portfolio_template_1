import React from 'react';
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function Projects() {
  return (
    <section
      className='text-white rounded-2xl mt-32 bg-black w-[40rem] h-[55rem]'
      id='projects'
    >


      <div className='p-8'>
        <div className='text-4xl font-bold'>
          Projects
          <div className = "bg-gradient-to-r from-red-700  to-purple-900 w-[9rem] h-2 rounded-xl"></div>
        </div>

        <ol className=" mt-16 relative border-s border-gray-200 dark:border-gray-700">
          <li className=" mt-[3.5rem] mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-2xl font-semibold text-white dark:text-white">Misinfometer</h3>


            <div className='flex gap-2  my-1 mr-1'>


              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Next Js</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Flask</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Tailwind Css</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Python</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>scikit-learn</span>

            </div>



            <p className="text-lg font-normal text-gray-500 dark:text-gray-400"><span className='font-bold'>Misimfometer</span>, uses advanced machine learning to verify news authenticity, helping users combat misinformation effectively and efficiently.</p>

          </li>



          <li className=" mt-[3.5rem] mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-2xl font-semibold text-white dark:text-white">Svaasthy</h3>


            <div className='flex gap-2  my-1 mr-1'>


              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>ReactNative</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>firebase</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Expo</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Typescript</span>
              

            </div>



            <p className="text-lg font-normal text-gray-500 dark:text-gray-400"><span className='font-bold'>Svaasthy</span>provides the quickest and most efficient way to reach nearby hospitals, ensuring you get immediate assistance in emergency medical situations</p>

          </li>





          <li className=" mt-[3.5rem] mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-2xl font-semibold text-white dark:text-white">Ment-Ally</h3>


            <div className='flex gap-2  my-1 mr-1'>


              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>React.js</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>MongoDB</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Node.js</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Express.js</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Firebase</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Framer Motion</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Javascript</span>

            </div>



            <p className="text-lg font-normal text-gray-500 dark:text-gray-400"><span className='font-bold'>Ment-Ally</span>is a web app build with React.js. Ment Ally is one solution for all your mental problems.</p>

          </li>

          <li className=" mt-[3.5rem] mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-2xl font-semibold text-white dark:text-white">IoT App</h3>


            <div className='flex gap-2  my-1 mr-1'>


              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Flutter</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Flask</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Dart</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>Python</span>
              <span className='bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs'>MicroPython</span>

            </div>



            <p className="text-lg font-normal text-gray-500 dark:text-gray-400"><span className='font-bold'>IoT App</span>IoT-based Flutter application facilitating interaction and control of connected devices</p>

          </li>



        </ol>
      </div>
    </section>
  );
}

export default Projects;
