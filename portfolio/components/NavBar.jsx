import Image from "next/image"
import Link from "next/link"
import React from 'react'
import {BsMoonStarsFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import NavLogo from '../public/navImgs/navlogo.png'

const NavBar = () => {
  return (
    <nav className="fixed w-full h-20 mb-10">
      <div className="flex justify-between w-full h-20 px-2 py-5 shadow-lg">
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
              <Link href='#projects'>
                <li className="pb-4 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500">
                  Projects
                </li>
              </Link>
              <Link href='#about'>
                <li className="pb-4 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500">
                  About
                </li>
              </Link>
              <Link href='#skills'>
                <li className="pb-4 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500">
                  Skills
                </li>
              </Link>
              <Link href='#contact'>
                <li className="pb-4 transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        
        <div className="mt-2">
          <ul className="flex items-center">
            <li className="lg:hidden px-1">
              <AiOutlineMenu size={24} className="cursor-pointer" />
            </li>

            <li className="pr-1">
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
      <div className="justify-between left-0 top-100 w-full h-100 lg:hidden">
        <ul className="text-cyan-500 text-2xl font-Montserrat">
          <Link href="#projects">
            <li className="transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500">
              Projects
            </li>
          </Link>
          <Link href="#about">
            <li className="transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500">
              About
            </li>
          </Link>
          <Link href="#skills">
            <li className="transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500">
              Skills
            </li>
          </Link>
          <Link href="#contact">
            <li className="transition duration-300 hover:border-b-2 hover:border-blue-500 hover:text-blue-500">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar