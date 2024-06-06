import Image from "next/image"
import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <main className="px-10">
      <section className="min-h-screen">
        <NavBar />
      </section>
    </main>
  );
}
