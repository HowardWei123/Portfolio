import React from 'react'

const Main = () => {
    return (
        <div className='w-full h-[400px] text-center'>
            <div className='flex flex-col mx-auto w-full h-full px-2 gap-8 justify-center items-center shadow-sm'>
                <h1 className='text-4xl font-bold text-gray-700 font-Montserrat'>
                    Hello, I'm <span className='text-blue-800'>Howard Wei</span>
                </h1>
                <h3 className='text-lg font-bold font-Montserrat'>
                    Computer Science Student and AI Enthusiast at <span className='text-blue-600'>San Jose State University </span>
                </h3>
            </div>
        </div>
    )
}

export default Main