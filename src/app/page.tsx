import Image from "next/image";
import { Mail, Twitter, Github } from "lucide-react";
import Newsletter from "@/components/Newsletter";
import WorkSection from "@/components/WorkSection";


export default function Home() {
  return (
    <main className="mx-auto max-w-[692px] px-6 py-12 leading-relaxed sm:py-16">
      {/* Header Section */}
      <div className="mt-8 mb-6 flex items-center gap-4">
        <Image
          alt="Archana"
          className="-outline-offset-1 size-11 select-none rounded-full outline outline-black/5 dark:outline-white/5"
          height={100}
          width={100}
          src="/profile.jpg"
        />
        <div className="flex flex-col items-start justify-center">
          <span className="font-medium text-gray-1200 leading-snug">
            Archana Prabhat
          </span>
          <span className="whitespace-nowrap font-medium text-gray-1100 leading-snug">
            Full Stack Developer
          </span>
        </div>
      </div>

      {/* Bio */}
      <p className="mb-6 text-gray-1100">
        I'm a full stack developer passionate about building elegant and
        performant web applications. I specialize in React, Next.js, and modern
        web technologies. I love creating seamless user experiences and writing
        clean, maintainable code.
      </p>

      {/* Social Links */}
      <div className="mt-6 flex w-full flex-wrap justify-start gap-3">
        <a
          aria-label="Mail"
          className="flex h-9 cursor-pointer select-none items-center gap-1.5 will-change-[transform, colors] rounded-full bg-gray-300 pr-4 pl-[14px] font-medium transition-[colors, transform] duration-200 ease-out hover:bg-gray-400 active:scale-[0.97]"
          href="mailto:your.email@example.com"
          rel="noreferrer"
          target="_blank"
        >
          <Mail className="size-[18px]" />
          Mail
        </a>
        <a
          aria-label="Twitter"
          className="flex h-9 cursor-pointer select-none items-center gap-1.5 will-change-[transform, colors] rounded-full bg-gray-300 pr-4 pl-[14px] font-medium transition-[colors, transform] duration-200 ease-out hover:bg-gray-400 active:scale-[0.97]"
          href="https://twitter.com/yourusername"
          rel="noreferrer"
          target="_blank"
        >
          <Twitter className="size-[18px]" />
          Twitter
        </a>
        <a
          aria-label="GitHub"
          className="flex h-9 cursor-pointer select-none items-center gap-1.5 will-change-[transform, colors] rounded-full bg-gray-300 pr-4 pl-[14px] font-medium transition-[colors, transform] duration-200 ease-out hover:bg-gray-400 active:scale-[0.97]"
          href="https://github.com/yourusername"
          rel="noreferrer"
          target="_blank"
        >
          <Github className="size-[18px]" />
          GitHub
        </a>
      </div>

      {/* Projects Section */}
      <div className="mt-16 w-full sm:mt-32">
        <div className="mb-5 flex w-full items-center font-medium text-gray-1200">
          Projects
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Project Card 1 */}
          <a
            aria-label="Project 1"
            className="flex flex-col items-center justify-center rounded-xl bg-gray-100 shadow-custom overflow-hidden transition-[colors, box-shadow] duration-200 ease-in-out will-change-transform hover:shadow-custom-hover border border-gray-300 hover:border-gray-400"
            href="#"
          >
            <div className="relative flex aspect-[192/100] w-full items-center justify-center gap-2 bg-gray-100">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl shadow-custom border border-gray-300 bg-gray-200">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center px-4 pb-4 font-medium">
              <span className="">Project Name</span>
              <span className="font-normal text-gray-1100">
                Project description goes here
              </span>
            </div>
          </a>

          {/* Project Card 2 */}
          <a
            aria-label="Project 2"
            className="flex flex-col items-center justify-center rounded-xl bg-gray-100 shadow-custom overflow-hidden transition-[colors, box-shadow] duration-200 ease-in-out will-change-transform hover:shadow-custom-hover border border-gray-300 hover:border-gray-400"
            href="#"
          >
            <div className="relative flex aspect-[192/100] w-full items-center justify-center gap-2 bg-gray-100">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl shadow-custom border border-gray-300 bg-gray-200">
                <span className="text-2xl">💻</span>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center px-4 pb-4 font-medium">
              <span className="">Another Project</span>
              <span className="font-normal text-gray-1100">
                Another project description
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Work Section */}
      <WorkSection />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <section className="mt-16 flex w-full items-center justify-between">
        <p className="select-none rounded-full bg-gray-300 px-3 py-1 font-medium text-gray-1100 text-sm">
          v1.0
        </p>
      </section>
    </main>
  );
}
