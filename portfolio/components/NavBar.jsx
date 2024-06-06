import Image from "next/image"
import React from 'react'

const NavBar = () => {
  return (
    <nav className="py-5 mb-12 flex justify-between">
      <h1 className="text-xl">Howard Wei</h1>
      <ul className="flex items-center">
        <li>Dark Mode icon should go here</li>
        <li>
          <a className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="#">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar