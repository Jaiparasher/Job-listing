import React from 'react'

const Header = (props) => {
  return (
    <div className='h-[40vh] flex w-full justify-center bg-[#081427] py-10'>  
    <div className='flex w-[90vw] justify-between'>
      <h1 className='text-white text-4xl font-medium mt-8'>Open Job Listing</h1>
      <button onClick={()=>props.openNewJobModel()} className='bg-[#74a9ff] h-[40px] mt-8 rounded-md py-1 px-4 hover:bg-[#6295e6] font-medium'>Post a Job</button>
    </div>
    </div>
  )
}

export default Header
