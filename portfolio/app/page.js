'use client'

import {useState} from 'react'
import NavBar from "../components/NavBar"
import Main from "../components/Main"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Footer from '../components/Footer'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const handleDark = () => {
    setDarkMode(!darkMode)
  }
  return (
    <main className={darkMode ? 'dark' : ''}>
      <section className="flex flex-col justify-center items-center w-full h-full gap-32 bg-slate-200 dark:bg-slate-800">
        <NavBar handleDark={handleDark}/>
        <Main />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </section>
    </main>
  )
}
