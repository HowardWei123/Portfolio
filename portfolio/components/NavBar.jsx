"use client";

import Image from "next/image"
import Link from "next/link"
import {useState} from 'react'
import {BsMoonStarsFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import NavLogo from '../public/navImgs/navlogo.png'

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="w-full h-20 mb-8">
      <div className="flex justify-between w-full h-20 px-2 py-5 shadow-md">
        <div className="flex">
          <Link href='/'>
            <Image
              src={NavLogo}
              width={200}
              height={200}
              className="ml-4 cursor-pointer"
            />     
          </Link>

          <div>
            <ul className="ml-4 pt-1 hidden lg:flex text-cyan-500 text-2xl font-Montserrat">
              <li className="cursor-default">
                <Link className="pb-6 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
                  href="#projects">
                  Projects
                </Link>
              </li>
            
              <li className="cursor-default">
                <Link className="pb-6 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
                  href="#about">
                  About
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
        </div>
        
        <div className="mt-2">
          <ul className="flex items-center">
            {/*Mobile Nav*/}
            <li onClick={handleNav} className="lg:hidden px-1 cursor-default">
              <AiOutlineMenu size={24} className="cursor-pointer" />
            </li>

            <li className="pr-1 cursor-default">
              <BsMoonStarsFill size={24} className="cursor-pointer" />
            </li>
            <li>
              <Link className="transition duration-300 bg-cyan-500 hover:bg-blue-500 text-white px-4 py-2 rounded-lg" href="/">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/*Mobile Nav*/}
      <div className={nav ? "justify-between left-0 top-100 w-full shadow-sm" : "hidden"}>
        <ul className="text-cyan-500 text-center text-2xl font-Montserrat">
          <li className="py-4 cursor-default">
            <Link className="pb-4 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
              href="#projects">
              Projects
            </Link>
          </li>
          
          <li className="py-4 cursor-default">
            <Link className="pb-4 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
              href="#about">
              About
            </Link>
          </li>
          
          <li className="py-4 cursor-default">
            <Link className="pb-4 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
              href="#skills">
              Skills
            </Link>
          </li>
          
          <li className="py-4 cursor-default">
            <Link className="pb-4 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
              href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar