import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-32 bg-black  flex flex-col items-center justify-around  ' >
        <ul className='text-white font-extrabold  flex justify-between items-center  gap-60' >
        <li className=' hover:bg-blue-400 text-2xl '  > <Link to='/HomePage'>Home</Link> </li>
        <li className=' hover:bg-blue-400 text-2xl ' > <Link to='/AboutUs'>About us</Link> </li>
        <li className=' hover:bg-blue-400  text-2xl'> <Link to='/Blog'>Blog</Link> </li>
        <li className=' hover:bg-blue-400 text-2xl '><Link to='/OurService'>OurService</Link></li>
    </ul>
    </div>
  )
}

export default Navbar