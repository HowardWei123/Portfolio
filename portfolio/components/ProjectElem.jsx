import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectElem = ({title, bgImg, projectDescription}) => {
    const dictionary = {
        'string': 'logo'
    }
    return (
    <div className='flex flex-row justify-center'>
        <div className='rounded-xl p-4 w-[50%] flex justify-end'>
            <Image
                src={bgImg}
                width={400}
                height={230}
                className='rounded-xl shadow-xl'
            />
        </div>
        <div className='flex flex-col justify-center w-[50%] p-4'>
            <h1 className='font-Montserrat text-2xl text-cyan-700 font-bold'>
                {title}
            </h1>
            <p className='text-gray-700 py-2'>
                {projectDescription}
            </p>
            <p>
                techUsed
            </p>
            <p>
                github and site links
            </p>
        </div>
    </div>
  )
}

export default ProjectElem