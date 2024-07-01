import React from 'react'
import Image from 'next/image'
import ByTechImg from '../public/projImgs/byTechProj.png'
import EmotionAIImg from '../public/projImgs/EmotionAIData.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='flex flex-col mx-auto px-2 py-8 gap-4 justify-center items-center'>
            <h1 className='text-4xl text-cyan-700 font-Montserrat font-bold'>
                Projects
            </h1>

            <div className='grid lg:grid-cols-2 gap-8'>
              <div className='relative flex item-center justify-center h-auto w-full group rounded-xl p-4 group hover:bg-cyan-500'>
                <Image
                  src={ByTechImg}
                  width={400}
                  height={400}
                  className='rounded-xl shadow-xl group-hover:opacity-20'
                />
              </div>

              <div className='relative flex item-center justify-center h-auto w-full group rounded-xl p-4 group hover:bg-cyan-500'>
                <Image
                  src={EmotionAIImg}
                  width={400}
                  height={400}
                  className='rounded-xl shadow-xl group-hover:opacity-20'
                />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects