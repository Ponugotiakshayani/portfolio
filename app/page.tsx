import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaDownload, FaPaperPlane } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-100 via-white to-white min-h-screen text-gray-800 font-sans">
      <Navbar />

      <section
        id="home"
        className="flex flex-col items-center justify-center px-6 pt-24 pb-32 text-center gap-6"
      >
        <div className="relative w-[130px] h-[130px]">
          <Image
            src="/images/profile.png"
            alt="Akshayani Ponugoti"
            fill
            className="rounded-full object-cover border-4 border-white shadow"
          />
          <span className="absolute -bottom-2 -right-2 text-2xl">👋</span>
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight leading-tight dark:text-white">
          {"Hey, welcome! I'm Akshayani Ponugoti"}
        </h1>
        <p className="max-w-5xl text-2xl font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">
        A full-stack developer with 2+ years of experience crafting scalable and intuitive web applications. Take a quick peek at some of my featured work — and feel free to connect with me if something sparks your interest!
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-900 transition-all shadow-md"
          >
            <FaPaperPlane />
            Contact me here
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full text-sm hover:bg-purple-700 transition-all shadow-md"
          >
            <FaDownload />
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            className="bg-white border px-4 py-3 rounded-full shadow hover:shadow-md flex items-center"
          >
            <FaLinkedin className="text-blue-600 text-xl" />
          </a>
          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            className="bg-white border px-4 py-3 rounded-full shadow hover:shadow-md flex items-center"
          >
            <FaGithub className="text-gray-900 text-xl" />
          </a>
        </div>
      </section>

<section id="about" className="py-12"><About /></section>
<section id="projects" className="py-12 bg-gray-50 dark:bg-gray-800"><Projects /></section>
<section id="skills" className="py-12"><Skills /></section>
<section id="experience" className="py-12 bg-gray-50 dark:bg-gray-800"><Experience /></section>
<section id="education" className="py-12"><Education /></section>
<section id="contact" className="py-12"><Contact /></section>
    </main>
  );
}
