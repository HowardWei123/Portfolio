"use client";

import Image from "next/image"
import Link from "next/link"
import React, {useState, useEffect} from 'react'
import {BsMoonStarsFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import NavLogo from '../public/navImgs/navlogo.png'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const [dropdownVisible, setDropDownVis] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleScroll = () => {
    const scroll = window.scrollY
    console.log(scroll, dropdownVisible)

    const isVisible = scroll <= 40
    if (isVisible === dropdownVisible) return
    setDropDownVis(isVisible)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [dropdownVisible, handleScroll])

  return (
    <nav id='home' className="top-0 left-0 w-full h-20 bg-white">
      <div className="flex justify-between w-full h-20 px-2 py-5 shadow-md">
        <div className="flex">
          <Link href='/'>
            <Image
              src={NavLogo}
              width={200}
              height={200}
              className="transition duration-100 hover:scale-105 ml-4 cursor-pointer"
            />
          </Link>

          
          <ul className="ml-4 pt-1 hidden lg:flex text-cyan-500 text-2xl font-semibold font-Montserrat">
            <li className="cursor-default">
              <Link className="pb-6 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
                href="#about">
                About
              </Link>
            </li>
          
            <li className="cursor-default">
              <Link className="pb-6 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
                href="#projects">
                Projects
              </Link>
            </li>
            
            <li className="cursor-default">
              <Link className="pb-6 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
                href="#skills">
                Skills
              </Link>
            </li>
            
            <li className="cursor-default">
              <Link className="pb-6 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
                href="#contact">
                Contact
              </Link>
            </li>
          </ul>

        </div>
        
        <div className="mt-2">
          <ul className="flex items-center">
            
            {/*Mobile Nav Button*/}
            <li onClick={handleNav} className="lg:hidden px-1 cursor-default">
              <AiOutlineMenu size={24} className="transition duration-200 hover:scale-110 cursor-pointer" />
            </li>

            <li className="pr-1 cursor-default">
              <BsMoonStarsFill size={24} className="transition duration-200 hover:scale-110 cursor-pointer" />
            </li>
            <li>
              <Link className="transition duration-300 bg-cyan-500 hover:bg-blue-500 text-white px-4 py-2 rounded-lg" href="/HWResume.pdf">
                Resume
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/*Mobile Nav*/}
      {dropdownVisible && (
        <div className={nav ? 'lg:hidden fixed justify-between left-0 top-100 w-full h-64 bg-white shadow-md' : 'hidden'}>
          <ul className="text-cyan-500 text-center text-2xl font-semibold font-Montserrat">
            <li className="py-4 cursor-default">
              <Link
                onClick={() => setNav(false)}
                className="pb-4 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
                href="#about"
              >
                About
              </Link>
            </li>
            
            <li className="py-4 cursor-default">
              <Link
                onClick={() => setNav(false)}
                className="pb-4 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
                href="#projects"
              >
                Projects
              </Link>
            </li>
            
            <li className="py-4 cursor-default">
              <Link
                onClick={() => setNav(false)}
                className="pb-4 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
                href="#skills"
              >
                Skills
              </Link>
            </li>
            
            <li className="py-4 cursor-default">
              <Link
                onClick={() => setNav(false)}
                className="pb-4 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
                href="#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )
    }
    </nav>
  )
}

export default NavBar