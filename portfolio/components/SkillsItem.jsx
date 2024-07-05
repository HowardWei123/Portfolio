import React from 'react'
import Image from 'next/image'

const SkillsItem = ({title, logo}) => {
  return (
    <div className='flex flex-col justify-center items-center ease-out duration-200 hover:scale-125'>
        <Image 
            src={logo}
            width={64}
            height={64}
            alt=''
        />
        <p className='font-semibold text-center text-gray-700 dark:text-slate-200 font-Montserrat'>
            {title}
        </p>
    </div>
  )
}

export default SkillsItem