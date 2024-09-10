"use client"

import Image from "next/image"
import Link from "next/link"
import React, {useState, useEffect} from 'react'
import {BsMoonStarsFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import NavLogo from '../public/navImgs/navlogo.png'

const NavBar = ({handleDark}) => {
  const [nav, setNav] = useState(false)
  const [dropdownVisible, setDropDownVis] = useState(true)

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
    <nav id='home' className="top-0 left-0 w-full h-20 bg-slate-300 dark:bg-slate-500">
      <div className="flex justify-between w-full h-20 px-2 py-5 shadow-md">
        <div className="flex items-center">
          <Link href='/'>
            <Image
              src={NavLogo}
              width={200}
              height={200}
              className="ease-in duration-200 hover:scale-110 ml-4 cursor-pointer"
            />
          </Link>

          
          <ul className="ml-4 pt-1 hidden lg:flex text-cyan-500 dark:text-cyan-400 text-2xl font-semibold font-Montserrat">
            <li className="cursor-default">
              <Link className="pb-6 ease-in duration-200 hover:border-b-2 hover:border-sky-600 hover:text-sky-500"
                href="#about">
                About
              </Link>
            </li>
          
            <li className="cursor-default">
              <Link className="pb-6 ease-in duration-200 hover:border-b-2 hover:border-sky-600 hover:text-sky-500"
                href="#projects">
                Projects
              </Link>
            </li>
            
            <li className="cursor-default">
              <Link className="pb-6 ease-in duration-200 hover:border-b-2 hover:border-sky-500 hover:text-sky-500"
                href="#skills">
                Skills
              </Link>
            </li>
            
            <li className="cursor-default">
              <Link className="pb-6 ease-in duration-200 hover:border-b-2 hover:border-sky-500 hover:text-sky-500"
                href="#contact">
                Contact
              </Link>
            </li>
          </ul>

        </div>
        
        <div className="flex items-center mt-2 gap-4 mx-4">
            {/*Mobile Nav Button*/}
            <AiOutlineMenu onClick={handleNav} className="text-3xl ease-in duration-200 hover:scale-110 cursor-pointer lg:hidden dark:text-slate-100" />
            
            <BsMoonStarsFill onClick={() => handleDark()} className="text-2xl ease-in duration-200 hover:scale-110 cursor-pointer dark:text-slate-100" />
            <Link className="ease-in duration-200 bg-cyan-500 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-Montserrat" href="/HWResume.pdf">
              <button>
                Resume
              </button>
            </Link>
        </div>

      </div>

      {/*Mobile Nav*/}
      {dropdownVisible && (
        <div className={nav ? 'lg:hidden fixed justify-between left-0 top-100 w-full h-64 bg-slate-300 dark:bg-slate-500 shadow-md' : 'hidden dark:bg-slate-700'}>
          <ul className="text-cyan-500 dark:text-cyan-400 text-center text-2xl font-semibold font-Montserrat">
            <li className="py-4 cursor-default">
              <Link
                onClick={() => setNav(false)}
                className="pb-4 ease-in duration-200 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
                href="#about"
              >
                About
              </Link>
            </li>
            
            <li className="py-4 cursor-default">
              <Link
                onClick={() => setNav(false)}
                className="pb-4 ease-in duration-200 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
                href="#projects"
              >
                Projects
              </Link>
            </li>
            
            <li className="py-4 cursor-default">
              <Link
                onClick={() => setNav(false)}
                className="pb-4 ease-in duration-200 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
                href="#skills"
              >
                Skills
              </Link>
            </li>
            
            <li className="py-4 cursor-default">
              <Link
                onClick={() => setNav(false)}
                className="pb-4 ease-in duration-200 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
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