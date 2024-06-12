import Image from "next/image"
import React from 'react'
import {BsMoonStarsFill} from 'react-icons/bs'

const NavBar = () => {
  return (
    <nav className="px-6 py-6 mb-12 flex justify-between shadow-lg">
      <div className="flex">
        <h1 className="cursor-pointer text-xl font-bold">Howard Wei</h1>
        <ul className="px-4 text-xl hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      
      <ul className="flex items-center">
        <li>
          <BsMoonStarsFill className="cursor-pointer text-2xl"/>
        </li>
        <li>
          <a className="bg-cyan-500 text-white px-4 py-2 rounded-md" href="#">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar