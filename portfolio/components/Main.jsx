import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"

const Main = () => {
    return (
        <div className='w-full h-[400px] text-center'>
            <div className='flex flex-col mx-auto w-full h-full px-2 gap-8 justify-center items-center shadow-sm'>
                <h1 className='text-4xl font-bold text-gray-700 font-Montserrat'>
                    Hello, I'm <span className='text-blue-800'>Howard Wei</span>
                </h1>
                <h2 className='text-xl font-semibold font-Montserrat'>
                    Computer Science Student and AI Enthusiast at <span className='bg-gradient-to-r from-blue-800 to-yellow-600 inline-block text-transparent bg-clip-text'>San Jose State University</span>
                </h2>

                {/*Main Buttons*/}
                <div className='flex mx-auto gap-12 text-4xl'>
                    <Link href='https://www.linkedin.com/in/weihoward/'>
                        <FaLinkedinIn className='transition duration-300 hover:text-blue-500 hover:scale-110'/>
                    </Link>

                    <Link href='#contact'>
                        <BiLogoGmail className='transition duration-300 hover:text-blue-500 hover:scale-110' />
                    </Link>

                    <Link href='https://github.com/HowardWei123'>
                        <FaGithub className='transition duration-300 hover:text-blue-500 hover:scale-110'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Main