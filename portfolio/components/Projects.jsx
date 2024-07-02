import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectElem from './ProjectElem'
import ByTechImg from '../public/projImgs/byTechProj.png'
import EmotionAIImg from '../public/projImgs/EmotionAIData.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='flex flex-col mx-auto px-2 py-8 gap-4 justify-center items-center'>
            <h1 className='text-4xl py-4 text-cyan-700 font-Montserrat font-bold'>
                Projects
            </h1>

            <div className='grid lg:grid-cols-2 gap-8'>
              <ProjectElem 
                title='ByTech'
                bgImg={ByTechImg}
                techUsed=''
                projUrl='/'
              />

              <ProjectElem 
                title='EmotionAI'
                bgImg={EmotionAIImg}
                techUsed=''
                projUrl='/'
              />
            </div>
        </div>
    </div>
  )
}

export default Projects