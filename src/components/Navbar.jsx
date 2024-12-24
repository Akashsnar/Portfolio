import React from 'react'
// import logo from 
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaFreeCodeCamp} from "react-icons/fa"
import { FaCode } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
<div className='flex flex-shrink-0 items-center'>
{/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
</div>
<div className='m-8 flex items-center justify-center gap-4 text-2xl'>
<a href="https://www.linkedin.com/in/akash-singh-narvariya-84a225232/" target="_blank"><FaLinkedin/></a>
<a href="https://github.com/Akashsnar" target="_blank"><FaGithub/></a>
<a href="https://leetcode.com/u/Akash_si/" target="_blank"><FaCode/></a>
<a href="https://www.freecodecamp.org/fccf107659d-c8be-4d3e-8f49-441051ec1346" target="_blank"><FaFreeCodeCamp/></a>



</div>
    </nav>
  )
}

export default Navbar
