import Image from "next/image";

export default function Home() {
  return (
    <main className="px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Howard Wei</h1>
          <ul className="flex items-center">
            <li>Dark Mode icon should go here</li>
            <li>
              <a className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
                >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
