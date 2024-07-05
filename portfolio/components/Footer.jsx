import React from 'react'
import Link from 'next/link'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center gap-4 py-8'>
        <div className="flex justify-center">
            <Link className='rounded-full mb-4 p-2 border border-cyan-600 dark:border-cyan-400 cursor-pointer hover:scale-110 ease-in duration-200' href='#home'>
                <HiOutlineChevronDoubleUp className='text-2xl text-cyan-600 dark:text-cyan-400'/>
            </Link>
        </div>
        <p className='text-xs dark:text-slate-200'>
            © Copyright 2024 Howard Wei
        </p>
    </div>
  )
}

export default Footer