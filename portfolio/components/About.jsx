import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full h-[300px] flex flex-col justify-center items-center py-10 gap-8 shadow-sm'>
            <h1 className='text-4xl text-cyan-700 font-bold font-Montserrat'>
                About
            </h1>
            <h2 className='text-lg font-semibold font-Montserrat'>
                I'm a Computer Science Student at <span className='bg-gradient-to-r from-blue-800 to-yellow-600 inline-block text-transparent bg-clip-text'>San Jose State University</span>.
            </h2>
            <h2 className='text-lg font-semibold font-Montserrat'>
                I'm passionate about web development and artifical intelligence.
            </h2>
        </div>
    )
}

export default About