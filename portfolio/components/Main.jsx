import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

const Main = () => {
    return (
        <div className='w-full mt-24 pb-4 text-center'>
            <div className='flex flex-col mx-auto w-full h-full px-2 gap-8 justify-center items-center'>
                <h1 className='text-4xl font-bold text-slate-700 font-Montserrat dark:text-slate-200'>
                    Hello, I&apos;m <span className='text-blue-700 dark:text-blue-500'>Howard Wei</span>
                </h1>

                {/*Main Buttons*/}
                <div className='flex mx-auto gap-8'>
                    <div className='border border-black dark:border-slate-200 hover:border-blue-500 rounded-full p-2 transition duration-300 hover:text-blue-500 hover:scale-125'>
                        <Link href='https://www.linkedin.com/in/weihoward/'>
                            <FaLinkedinIn className='text-3xl text-slate-700 dark:text-slate-200'/>
                        </Link>
                    </div>
                    <Link href='https://github.com/HowardWei123'>
                        <FaGithub className='text-5xl rounded-full transition duration-300 text-slate-700 dark:text-slate-200 hover:text-blue-500 hover:scale-125'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Main