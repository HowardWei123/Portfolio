import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full flex flex-col justify-center items-center text-center py-8 gap-4'>
            <h1 className='text-4xl text-cyan-700 font-bold font-Montserrat py-8 mx-8'>
                About
            </h1>
            <h2 className='text-xl font-semibold font-Montserrat py-4 mx-8'>
                I'm a Computer Science Student at <span className='bg-gradient-to-r from-blue-800 to-yellow-600 inline-block text-transparent bg-clip-text'>San Jose State University</span>.
            </h2>
            <h2 className='text-xl font-semibold font-Montserrat mx-8'>
                I'm passionate about web development and artifical intelligence.
            </h2>
        </div>
    )
}

export default About