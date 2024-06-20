import Image from "next/image"
import NavBar from "../components/NavBar"
import Main from "../components/Main"

export default function Home() {
  return (
    <main>
      <section className="flex flex-col justify-center w-full h-full">
        <NavBar />
        <Main />
      </section>
    </main>
  );
}
