import React from 'react'
// import logo from 
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFreeCodeCamp } from "react-icons/fa"
import { FaCode } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/akash-singh-narvariya-84a225232/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Akashsnar" target="_blank"><FaGithub /></a>
        <a href="https://leetcode.com/u/Akash_si/" target="_blank"><FaCode /></a>
        <a href="https://www.freecodecamp.org/fccf107659d-c8be-4d3e-8f49-441051ec1346" target="_blank"><FaFreeCodeCamp /></a>



      </div>
      <div className='m-8 flex items-center justify-center'>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Nav Links */}
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li className="hover:text-purple-500 cursor-pointer transition">
                About Me
              </li>
              <li className="hover:text-purple-500 cursor-pointer transition">
                Projects
              </li>
              <li className="hover:text-purple-500 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
