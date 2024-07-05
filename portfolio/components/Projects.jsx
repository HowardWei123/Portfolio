import React from 'react'
import ProjectElem from './ProjectElem'

import ByTechImg from '../public/projImgs/ByTechProj.png'
import EmotionAIImg from '../public/projImgs/EmotionAIData.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='flex flex-col mx-auto px-2 py-8 gap-4 justify-center items-center'>
            <h1 className='text-4xl py-4 text-cyan-700 dark:text-cyan-500 font-Montserrat font-bold'>
                Projects
            </h1>

            <div className='grid gap-8 w-[60%]'>
              <ProjectElem 
                title='ByTech'
                bgImg={ByTechImg}
                tech='Next | React | Typescript | Tailwind'
                projectDescription={
                  `
                  Classroom built for programming teachers. 
                  Allows teachers to host classrooms and publish coding assignments for their students. 
                  Gives teachers a leetcode-esque platform for them to publish 
                  their own programming problems, create test cases, and manage assignments. 
                  Compiles python into WASM to be run in browsers.
                  `
                }
                url="https://github.com/Teddygat0r/dualhacks"
              />

              <ProjectElem 
                title='EmotionAI'
                bgImg={EmotionAIImg}
                tech='Python | Tensorflow | Keras | OpenCV'
                projectDescription={
                  `
                  AI model that utilizes computer vision algorithms to detect emotions based on facial expressions.
                  Trained and tested on 36,000 48x48 grayscale images of 7 different classifications.
                  Achieved over 50% testing accuracy on all emotions, and 80% on 3 emotions.
                  Deployable via webcam.
                  `
                }
                url="https://github.com/HowardWei123/EmotionAI"
              />
            </div>
        </div>
    </div>
  )
}

export default Projects