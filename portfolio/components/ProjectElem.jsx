import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {FaGithub} from "react-icons/fa"

const ProjectElem = ({title, bgImg, tech, projectDescription, url}) => {
    return (
    <div className='flex flex-row justify-center'>
        <div className='lg:w-[50%] flex flex-col justify-center'>
            <h1 className='lg:hidden text-center font-Montserrat text-2xl text-cyan-500 dark:text-cyan-200 font-bold'>
                {title}
            </h1>
            <div className='rounded-xl p-4 flex justify-end'>
                <Image
                    src={bgImg}
                    width={500}
                    height={300}
                    className='rounded-xl shadow-xl'
                />
            </div>
            <div className='lg:hidden flex flex-row px-4 items-center justify-between gap-4'>
                <p className='font-Montserrat text-cyan-600 dark:text-cyan-400 font-semibold'>
                    {tech}
                </p>
                <Link href={url}>
                    <FaGithub className='text-4xl transition duration-300 text-gray-700 dark:text-slate-200 hover:text-blue-500 hover:scale-125'/>
                </Link>
            </div>
        </div>
        <div className='hidden lg:flex flex-col justify-center w-[50%] p-4'>
            <h1 className='font-Montserrat text-2xl text-cyan-500 dark:text-cyan-300 font-bold'>
                {title}
            </h1>
            <p className='text-gray-700 dark:text-slate-200 py-2'>
                {projectDescription}
            </p>
            <div className='flex flex-row items-center justify-between pr-2 gap-4'>
                <p className='font-Montserrat text-cyan-600 dark:text-cyan-400 font-semibold'>
                    {tech}
                </p>
                <Link href={url}>
                    <FaGithub className='text-4xl transition duration-300 text-gray-700 dark:text-slate-200 hover:text-blue-500 hover:scale-125'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectElem