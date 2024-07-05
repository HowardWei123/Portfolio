import React from 'react'
import SkillsItem from './SkillsItem'

import CSS3Logo from '../public/icons/icons8-css3.svg'
import GitLogo from '../public/icons/icons8-git.svg'
import HTML5Logo from '../public/icons/icons8-html-5.svg'
import JavaLogo from '../public/icons/icons8-java.svg'
import JavascriptLogo from '../public/icons/icons8-javascript.svg'
import NextjsLogo from '../public/icons/icons8-next.js.svg'
import OpencvLogo from '../public/icons/icons8-opencv.svg'
import PythonLogo from '../public/icons/icons8-python.svg'
import ReactjsLogo from '../public/icons/icons8-react-native.svg'
import TailwindLogo from '../public/icons/icons8-tailwindcss.svg'
import TensorflowLogo from '../public/icons/Tensorflow.svg'
import TypescriptLogo from '../public/icons/icons8-typescript.svg'

const Skills = () => {
  return (
    <div id='skills' className='w-full'>
        <div className='flex flex-col mx-auto px-2 py-8 gap-4 justify-center items-center'>
            <h1 className='text-4xl text-cyan-700 dark:text-cyan-500 font-Montserrat font-bold'>
                Skills
            </h1>
            <div className='w-[50%] flex flex-wrap justify-center items-center gap-8 mt-12'>
              <SkillsItem 
                title='Next'
                logo={NextjsLogo}
              />
              <SkillsItem 
                title='React'
                logo={ReactjsLogo}
              />
              <SkillsItem 
                title='Tailwind'
                logo={TailwindLogo}
              />
              <SkillsItem 
                title='Python'
                logo={PythonLogo}
              />
              <SkillsItem 
                title='Java'
                logo={JavaLogo}
              />
              <SkillsItem 
                title='HTML'
                logo={HTML5Logo}
              />
              <SkillsItem 
                title='CSS'
                logo={CSS3Logo}
              />
              <SkillsItem 
                title='Javascript'
                logo={JavascriptLogo}
              />
              <SkillsItem 
                title='Typescript'
                logo={TypescriptLogo}
              />
              <SkillsItem 
                title='Tensorflow'
                logo={TensorflowLogo}
              />
              <SkillsItem 
                title='OpenCV'
                logo={OpencvLogo}
              />
              <SkillsItem 
                title='Git'
                logo={GitLogo}
              />
            </div>
        </div>
    </div>
  )
}

export default Skills