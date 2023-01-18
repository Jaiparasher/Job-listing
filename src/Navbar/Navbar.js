import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center bg-[#112b52] h-12 p-4 text-white'>
     <h2 className=' font-bold text-xl'>Job_Logo</h2>
    <div className='flex justify-center font-medium'>
      <Link to='/'><h2 className='mx-3 text-white'>Home</h2></Link>
      <Link to='/List'><h2 className='mx-3 text-white'>Jobs</h2></Link>
      <Link to='/'><h2 className='mx-3 text-white'>About</h2></Link>
      <Link to='/'><h2 className='mx-3 text-white'>Help</h2></Link>
      </div>
      <div >
     
      </div>
    </div>
  )
}

export default Navbar
