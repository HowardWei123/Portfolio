import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectElem = ({title, bgImg, projUrl}) => {
  return (
    <div className='relative flex item-center justify-center h-auto w-full group rounded-xl p-4 group hover:bg-cyan-600'>
        <Image
            src={bgImg}
            width={400}
            height={400}
            className='rounded-xl shadow-xl group-hover:opacity-10'
        />
        <div className='hidden justify-center items-center gap-8 group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white text-center'>
                {title}
            </h3>
            <Link href={projUrl}>
                <p className='text-center p-2 mt-2 rounded-lg bg-white text-gray-700 font-semibold text-lg cursor-pointer'>
                    More Info
                </p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectElem