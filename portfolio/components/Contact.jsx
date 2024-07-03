import React from 'react'
import Link from 'next/link'
import { FaFilePdf, FaLinkedinIn } from 'react-icons/fa'
import { BiLogoGmail } from "react-icons/bi"
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full'>
        <div className='flex flex-col mx-auto px-2 py-8 gap-8 justify-center items-center'>
            <h1 className='text-4xl text-cyan-700 font-Montserrat font-bold'>
                Contact
            </h1>
            <div className='grid lg:grid-cols-3 gap-8'>
              
              <Link className='flex justify-center items-center gap-2 border border-black hover:border-cyan-600 hover:text-cyan-600 font-Montserrat p-2 rounded-xl hover:scale-110 ease-out duration-200' href='https://www.linkedin.com/in/weihoward/'>
                <FaLinkedinIn className='text-5xl'/>
                <p className='text-lg font-semibold'>
                  LinkedIn
                </p>
              </Link>
              <Link className='flex justify-center items-center gap-2 border border-black hover:border-cyan-600 hover:text-cyan-600 font-Montserrat p-2 rounded-xl hover:scale-110 ease-out duration-200' href='mailto:howardwei21@gmail.com'>
                <BiLogoGmail className='text-5xl'/>
                <p className='text-lg font-semibold'>
                  Email
                </p>
              </Link>
              <Link className='flex justify-center items-center gap-2 border border-black hover:border-cyan-600 hover:text-cyan-600 font-Montserrat p-2 rounded-xl hover:scale-110 ease-out duration-200' href='/HWResume.pdf'>
                <FaFilePdf className='text-5xl'/>
                <p className='text-lg font-semibold'>
                  Resume
                </p>
              </Link>
            </div>
            <div className='flex justify-center py-8'>
              <Link className='rounded-full p-4 shadow-lg cursor-pointer hover:scale-110 ease-out duration-200' href='/#home'>
                <HiOutlineChevronDoubleUp className='text-2xl text-cyan-700'/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact