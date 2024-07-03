import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

const Main = () => {
    return (
        <div className='w-full mt-24 pb-4 text-center'>
            <div className='flex flex-col mx-auto w-full h-full px-2 gap-8 justify-center items-center'>
                <h1 className='text-4xl font-bold text-gray-700 font-Montserrat'>
                    Hello, I'm <span className='text-blue-800'>Howard Wei</span>
                </h1>

                {/*Main Buttons*/}
                <div className='flex mx-auto gap-8 text-4xl'>
                    <Link href='https://www.linkedin.com/in/weihoward/'>
                        <FaLinkedinIn className='transition duration-300 hover:text-blue-500 hover:scale-125'/>
                    </Link>

                    <Link href='https://github.com/HowardWei123'>
                        <FaGithub className='transition duration-300 hover:text-blue-500 hover:scale-125'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Main