
import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";

export const Nav = () => {
  return (
    <nav >

        <div className='border-t-0 border-b-0  border-white py-4 mx-6'>
        <div className='flex justify-between border-y-white h-20 items-center lg:px-20 px-6 p-20 border-t border-b  border-white py-4'>

<div className='flex text-white'>
    <span className='text-3xl font-semibold'>
        Leroux
    </span>
</div>

<div className='lg:flex md:flex flex-col justify-between items-end'>
    <ul className='lg:flex gap-36 justify-between '>
       <li className='text-white flex items-center '>
        Home
       </li>

       <li className='text-white flex items-center '>
        Pages
       </li>

       <li className='text-white flex items-center '>
        Portfolio
       </li>

       <li className='text-white flex items-center '>
        Blog
       </li>

       <li className='text-white flex items-center '>
        <a className='bg-white bg-opacity-10 px-6 py-2 rounded-3xl flex gap-2 justify-center items-center' href="">Get in touch <BsArrowUpRight />

</a>
       </li>
    </ul>
</div>

</div>
        </div>

    </nav>
  )
}
