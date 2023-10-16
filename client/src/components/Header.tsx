import React from 'react'
import {BiSearchAlt} from 'react-icons/bi';
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <header className='bg-gray-200 shadow-md opacity-80'>
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link className='border-l-4 border-teal-700' to='/'>
                <h1 className='flex flex-col font-medium pl-2'>
                    <span className='m-0 p-0'>Vamshi krishna</span>
                    <span className='text-xs m-0 p-0'>   Web Developer</span>
                </h1>
        </Link>
        <form className='bg-gray-100 p-2 rounded-lg flex items-center' >
                <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <BiSearchAlt/>
            </form>
            <ul className='flex gap-4 items-center'>
                <Link to="/about">
                    <li className='font-bold hidden sm:inline hover:underline rounded'>about</li>
                </Link>
                <Link to="/signIn">
                    <li className='font-bold hover:underline rounded'>Login</li>
                </Link>
                <Link to="/signUp">
                    <li className='hidden font-bold sm:inline hover:underline rounded'>SignUp</li>
                </Link>
            </ul>


        </div>
    </header>
  )
}

export default Header