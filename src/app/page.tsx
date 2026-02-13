import Image from "next/image";
import { Mail, Youtube, Github, Pen, ArrowDownToLine, Codepen } from "lucide-react";
import Contact from "@/components/Contact";
import WorkSection from "@/components/WorkSection";
import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";

export default function Home() {
  return (
    <main className="mx-auto max-w-[692px] px-6 py-12 leading-relaxed sm:py-16">
      {/* Header Section */}
      <div className="mt-8 mb-6 flex items-center gap-4">
        <Image
          alt="Archana"
          className="size-11 select-none rounded-full outline outline-black/5 dark:outline-white/5"
          height={100}
          width={100}
          src="/profile.jpg"
        />
        <div className="flex flex-col items-start justify-center">
          <span className="font-medium text-gray-1200 leading-snug">
            Archana Prabhat
          </span>
          <span className="whitespace-nowrap font-medium text-gray-1100 leading-snug">
            Frontend Developer
          </span>
        </div>
      </div>

      {/* Bio */}
      <p className="mb-6 text-gray-1100">
        I build modern web experiences with React and Next.js that feel
        effortless to use and thoughtfully engineered. I enjoy
        working where design meets technology, and I care deeply about detail,
        performance, and creating products that genuinely make people’s lives
        easier.
      </p>

      {/* Social Links */}
      <div className="mt-6 flex w-full flex-wrap justify-start gap-3">
        <SocialLink
          href="Archana_Resume.pdf"
          label="Resume"
          Icon={ArrowDownToLine}
        />
        <SocialLink
          href="mailto:archanaprabhathtk@gmail.com"
          label="Mail"
          Icon={Mail}
        />
        <SocialLink
          href="https://github.com/archanaprabhat"
          label="GitHub"
          Icon={Github}
        />
        <SocialLink
          href="https://medium.com/@archanaprabhat"
          label="Medium"
          Icon={Pen}
        />
        <SocialLink
          href="https://codepen.io/archanaprabhat"
          label="Codepen"
          Icon={Codepen}
        />
        <SocialLink
          href="https://www.youtube.com/@RedemptionArch/videos"
          label="Youtube"
          Icon={Youtube}
        />
      </div>


      {/* Projects Section Wrapper */}
      <div className="mt-16 w-full sm:mt-32">
        <div className="mb-5 flex w-full items-center font-medium text-gray-1200">
          Projects
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          <ProjectCard
            title="Sunva | People+AI"
            emoji="𓂈"
            projectUrl="https://www.youtube.com/watch?v=pF41AyUhE7w"
          />
          <ProjectCard
            title="Voice Notes"
            emoji="🗣"
            projectUrl="https://archanaprabhat.github.io/VoiceNotes/"
            githubUrl="https://github.com/archanaprabhat/VoiceNotes?tab=readme-ov-file"
          />
          <ProjectCard
            title="Harry Potter Sorting Hat"
            emoji="⚯ ͛"
            projectUrl="https://sorting-hat-magic.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/Harry_Potter_Sorting_Hat"
          />
          <ProjectCard
            title="Watchlistr"
            emoji="𓁺"
            projectUrl="https://cinmatic.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/CineMania"
          />
          <ProjectCard
            title="Consistency Tracker"
            emoji="🗓"
            projectUrl="https://tracker-nextjs-iqvc.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/Consistency"
          />
          <ProjectCard
            title="Dataverse"
            emoji="⛁"
            projectUrl="https://dataverse-nu.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/dataverse-cloud-erp"
          />
          <ProjectCard
            title="Chat App"  
            emoji="✉︎"
            projectUrl="https://www.youtube.com/shorts/--Hswuwx7jw"
            githubUrl="https://github.com/archanaprabhat/ChatApp"
          />
          <ProjectCard
            title="Real Time Tracker"
            emoji="⚲"
            projectUrl="https://www.youtube.com/watch?v=rFD_K5pVOc0"
            githubUrl="https://github.com/archanaprabhat/RealTime-Tracker"
          />
          <ProjectCard
            title="Chess"
            emoji="♟"
            projectUrl="https://www.youtube.com/watch?v=jX7EPPMupLs"
            githubUrl="https://github.com/archanaprabhat/chess"
          />
          <ProjectCard
            title="Artificium"
            emoji="☯︎"
            projectUrl="https://artificium-chi.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/Artificium"
          />
          <ProjectCard
            title="Workforce Chart"
            emoji="𓂃✍︎"
            projectUrl="https://workforce-chart.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/Workforce-Chart"
          />
        </div>
      </div>


      {/* Work Section */}
      <WorkSection />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <section className="mt-16 flex w-full items-center justify-between">
        <p className="select-none rounded-full bg-gray-300 px-3 py-1 font-medium text-gray-1100 text-sm">
          v1.0
        </p>
      </section>
    </main>
  );
}
