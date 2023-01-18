import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return (
    <div className='Home h-[88vh]'>
     <main className="container justify-center flex px-6 pt-16 items-center md:justify-start flex-1">
      <div className=" min-h-[340px] w-[530px] bg-[rgba(255,254,254,0.8)] p-6 rounded-md m-9 text-left font-medium">
      <div>
        <h1 className="text-2xl md:text-3xl text-[#3c94f8] lg:text-4xl uppercase">
          Looking for a Job
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase">
         Or want to recruit
        </h1>
        </div>
        <p className="mt-4 text-[#7575a7] text-xs md:text-sm">Apply for Full-time,part-time or internship or Post a job.<br/> Click below for further information</p>
     <Link to="/List">
        <button className='bg-[#112b52] my-5 p-2 text-white hover:bg-[#14396a] rounded-lg'>Click Here!</button>
     </Link>
        
</div>
      </main>
    </div>
  )
}

export default Home
