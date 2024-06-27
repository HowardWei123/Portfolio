import Image from "next/image"
import NavBar from "../components/NavBar"
import Main from "../components/Main"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col justify-center items-center w-full h-full">
        <NavBar />
        <Main />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </section>
    </main>
  )
}
