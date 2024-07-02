import React from 'react'
import { RiNextjsFill, RiTailwindCssFill, RiReactjsFill } from "react-icons/ri"
import { FaPython, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiJavascript, SiTypescript, SiTensorflow, SiOpencv, SiGit } from "react-icons/si"

const Skills = () => {
  return (
    <div id='skills' className='w-full'>
        <div className='flex flex-col mx-auto px-2 py-8 gap-4 justify-center items-center'>
            <h1 className='text-4xl text-cyan-700 font-Montserrat font-bold'>
                Skills
            </h1>
            <div className='w-[50%] flex flex-wrap justify-center items-center gap-8 mt-12'>
              <div className='flex flex-col justify-center items-center ease-out duration-200 hover:scale-125'>
                <RiNextjsFill className='text-6xl'/>
                <p className='font-semibold text-center font-Montserrat'>
                  Next.js
                </p>
              </div>

              <div className='flex flex-col justify-center items-center ease-out duration-200 hover:scale-125'>
                <RiReactjsFill className='text-6xl'/>
                <p className='font-semibold text-center font-Montserrat'>
                  React
                </p>
              </div>

              <div className='flex flex-col justify-center items-center ease-out duration-200 hover:scale-125'>
                <RiTailwindCssFill className='text-6xl'/>
                <p className='font-semibold text-center font-Montserrat'>
                  Tailwind
                </p>
              </div>

              <div className='flex flex-col justify-center items-center ease-out duration-200 hover:scale-125'>
                <FaPython className='text-6xl'/>
                <p className='font-semibold text-center font-Montserrat'>
                  Python
                </p>
              </div>

              <div className='flex flex-col justify-center items-center ease-out duration-200 hover:scale-125'>
                <FaJava className='text-6xl'/>
                <p className='font-semibold text-center font-Montserrat'>
                  Java
                </p>
              </div>

              <div className='flex flex-col justify-center items-center ease-out duration-200 hover:scale-125'>
                <FaHtml5 className='text-6xl'/>
                <p className='font-semibold text-center font-Montserrat'>
                  HTML
                </p>
              </div>

              <div className='flex flex-col justify-center items-center ease-out duration-200 hover:scale-125'>
                <FaCss3Alt className='text-6xl'/>
                <p className='font-semibold text-center font-Montserrat'>
                  CSS
                </p>
              </div>

              <div className='flex flex-col justify-center items-center ease-out duration-200 hover:scale-125'>
                <SiJavascript className='text-6xl'/>
                <p className='font-semibold text-center font-Montserrat'>
                  Javascript
                </p>
              </div>

              <div className='flex flex-col justify-center items-center ease-out duration-200 hover:scale-125'>
                <SiTypescript className='text-6xl'/>
                <p className='font-semibold text-center font-Montserrat'>
                  Typescript
                </p>
              </div>

              <div className='flex flex-col justify-center items-center ease-out duration-200 hover:scale-125'>
                <SiTensorflow className='text-6xl'/>
                <p className='font-semibold text-center font-Montserrat'>
                  Tensorflow
                </p>
              </div>

              <div className='flex flex-col justify-center items-center ease-out duration-200 hover:scale-125'>
                <SiOpencv  className='text-6xl'/>
                <p className='font-semibold text-center font-Montserrat'>
                  OpenCV
                </p>
              </div>

              <div className='flex flex-col justify-center items-center ease-out duration-200 hover:scale-125'>
                <SiGit className='text-6xl'/>
                <p className='font-semibold text-center font-Montserrat'>
                  Git
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skills