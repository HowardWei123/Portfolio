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
              className="mx-4 cursor-pointer"
            />     
          </Link>

          <div>
            <ul className="ml-4 pt-1 hidden lg:flex">
              <Link href='#projects'>
                <li className="pb-4 transition duration-300 font-bold text-2xl hover:border-b-2 hover:border-blue-600 hover:text-blue-600">
                  Projects
                </li>
              </Link>
              <Link href='#about'>
                <li className="pb-4 transition duration-300 font-bold text-2xl hover:border-b-2 hover:border-blue-600 hover:text-blue-600">
                  About
                </li>
              </Link>
              <Link href='#skills'>
                <li className="pb-4 transition duration-300 font-bold text-2xl hover:border-b-2 hover:border-blue-600 hover:text-blue-600">
                  Skills
                </li>
              </Link>
              <Link href='#contact'>
                <li className="pb-4 transition duration-300 font-bold text-2xl hover:border-b-2 hover:border-blue-600 hover:text-blue-600">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        
        <div className="mt-2">
          <ul className="flex items-center">
            <div className="lg:hidden">
              <li>
                <AiOutlineMenu size={25}/>
              </li>
            </div>

            <li className="pr-1">
              <BsMoonStarsFill className="cursor-pointer text-2xl"/>
            </li>
            <li>
              <Link className="transition duration-300 bg-cyan-500 hover:bg-blue-500 text-white px-4 py-2 rounded-md" href="/">
                Resume
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default NavBar