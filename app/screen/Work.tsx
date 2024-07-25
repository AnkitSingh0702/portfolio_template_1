import React from 'react'

function Work() {
  return (
    

      <section className='text-white rounded-2xl mt-32 bg-black w-[40rem] h-[40rem] ' id='work'>
        <div className='p-10'>
          <div className='text-4xl font-bold'>
        Work Experience
        <div className = "bg-gradient-to-r from-red-700  to-purple-900 w-[19rem] h-2 rounded-xl"></div>
      </div>

      <ol className=" mt-16 relative border-s border-gray-200 dark:border-gray-700">  
      <li className=" mt-[3.5rem] mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sept 2021</time>
        <h3 className="text-2xl font-semibold text-white dark:text-white">HackOdisha by NIT Rourkela </h3>
        <p className="text-lg font-normal text-gray-500 dark:text-gray-400"><span className='font-bold'>“Ment-Ally”</span>, Which help's people to gain mental peace and stability one solution for all your mental problems.
        Winner under Best Beginner's Team</p>
    </li>                
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Feb 2022</time>
        <h3 className="text-2xl font-semibold text-white dark:text-white">Electrothon 4.0 by NIT Hamirpur</h3>
        <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Built <span className='font-bold'>“Svaasthy”</span>, Which enables us to ease up the emergency medical situations by providing the best and the fastest way to reach your nearest hospitals or medical centers.</p>
        
    </li>



   
    
</ol>
</div>
</section>
    
  )
}

export default Work;