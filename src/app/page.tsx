import Image from "next/image";
import { Mail, Youtube, Github, Pen, ArrowDownToLine, Codepen } from "lucide-react";
import Contact from "@/components/Contact";
import WorkSection from "@/components/WorkSection";
import MiscSection from "@/components/MiscSection";
import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";
import ThemeToggle from "@/components/ThemeToggle";
import voiceNotesThumbnail from "@/assets/voicenotes_thumbnail.png";
import watchlisterThumbnail from "@/assets/movieValut-thumb.png"
import dataverseThumbnail from "@/assets/Dataverse.png"
import sunvaThumbnail from "@/assets/SUNVA.png"
import harryPotterThumbnail from "@/assets/harry potter-thumb.png"
import chessThumbnail from "@/assets/chess.png"
import habitThumbnail from "@/assets/habit-tracker.webp"
import chatThumbnail from "@/assets/chat.png"
import artificiumThumbnail from "@/assets/Artificium.jpg"
import mapThumbnail from "@/assets/map.png"
import securityThumbnail from "@/assets/securityVul.png"


export default function Home() {
  return (
    <main className="mx-auto max-w-[692px] px-6 py-12 leading-relaxed sm:py-16">
      {/* Header Section */}
      <div className="mt-8 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/profile.png" target="_blank" rel="noreferrer" className="shrink-0">
            <Image
              alt="Archana"
              className="size-11 select-none rounded-full object-cover outline outline-black/5 dark:outline-white/5 transition-transform hover:scale-105"
              height={100}
              width={100}
              src="/profile.png"
            />
          </a>
          <div className="flex flex-col items-start justify-center">
            <span className="font-medium text-gray-1200 leading-snug">
              Archana Prabhat
            </span>
            <span className="whitespace-nowrap font-medium text-gray-1100 leading-snug">
              Frontend Developer
            </span>
          </div>
        </div>
        <ThemeToggle />
      </div>

      {/* Bio */}
      <p className="mb-6 text-gray-1100">
        Building thoughtfully engineered, high-performance React and Next.js experiences, with a sharp eye for design and a focus on products that genuinely make life easier, fueled by curiosity and kaizen.
      </p>

      {/* Social Links */}
      <div className="mt-6 flex w-full flex-wrap justify-start gap-3">
        <SocialLink
          href="Archana_Resume.pdf"
          label="Resume"
          Icon={ArrowDownToLine}
        />
        <SocialLink
          href="https://github.com/archanaprabhat"
          label="GitHub"
          Icon={Github}
        />
        <SocialLink
          href="https://codepen.io/archanaprabhat"
          label="Codepen"
          Icon={Codepen}
        />
        <SocialLink
          href="https://medium.com/@archanaprabhat"
          label="Medium"
          Icon={Pen}
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
            title="Voice Notes Clone"
            imageSrc={voiceNotesThumbnail}
            projectUrl="https://archanaprabhat.github.io/VoiceNotes/"
            demoVideo="/voicenotes_demo.mp4"
            techStack={[
              {
                category: "Frontend",
                items: "HTML5, CSS3 (glassmorphism, animations, Grid, Flexbox), Vanilla JavaScript (ES6+ classes, async/await, Promises), SVGs from Figma and Lucide React",
              },
              {
                category: "Web APIs",
                items: "MediaRecorder, Web Audio (AudioContext, AnalyserNode), Canvas, IndexedDB, Fetch",
              },
              {
                category: "External Services",
                items: "Groq API (Whisper-large-v3, Llama 3.3 70B Versatile), Supabase",
              },
            ]}
          />
          <ProjectCard
            title="Bypassing paywall: Chrome Extension"
            imageSrc={securityThumbnail}
            projectUrl="https://archanaprabhat.github.io/VoiceNotes/"
            demoVideo="/voicenotes_demo.mp4"
            techStack={[
              {
                category: "Frontend",
                items: "HTML5, CSS3 (glassmorphism, animations, Grid, Flexbox), Vanilla JavaScript (ES6+ classes, async/await, Promises), SVGs from Figma and Lucide React",
              },
              {
                category: "Web APIs",
                items: "MediaRecorder, Web Audio (AudioContext, AnalyserNode), Canvas, IndexedDB, Fetch",
              },
              {
                category: "External Services",
                items: "Groq API (Whisper-large-v3, Llama 3.3 70B Versatile), Supabase",
              },
            ]}
          />
          <ProjectCard
            title="Dataverse"
            imageSrc={dataverseThumbnail}
            projectUrl="https://dataverse-nu.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/dataverse-cloud-erp"
          />
          <ProjectCard
            title="Sunva | People+AI"
            imageSrc={sunvaThumbnail}
            projectUrl="https://www.youtube.com/watch?v=pF41AyUhE7w"
          />
          <ProjectCard
            title="Peer-to-Peer Chess"
            imageSrc={chessThumbnail}
            projectUrl="https://www.youtube.com/watch?v=jX7EPPMupLs"
            githubUrl="https://github.com/archanaprabhat/chess"
          />
          <ProjectCard
            title="Watchlistr"
            imageSrc={watchlisterThumbnail}
            projectUrl="https://cinmatic.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/CineMania"
            demoVideo="/raftlabs_demo.mp4"
            techStack={[
              {
                category: "Frontend",
                items: "Next.js 14 (App Router), TypeScript, Tailwind CSS 4, Framer Motion, Lucide React",
              },
              {
                category: "Data & Storage",
                items: "IndexedDB (Watchlist persistence), Static JSON via SSG, Simulated Internal API",
              },
              {
                category: "External Services",
                items: "TMDB (The Movie Database) API and CDN for assets",
              },
            ]}
          />
          <ProjectCard
            title="Consistency Tracker"
            imageSrc={habitThumbnail}
            projectUrl="https://tracker-nextjs-iqvc.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/Consistency"
          />
          <ProjectCard
            title="Harry Potter Sorting Hat"
            imageSrc={harryPotterThumbnail}
            projectUrl="https://sorting-hat-magic.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/Harry_Potter_Sorting_Hat"
          />
          <ProjectCard
            title="Socket.IO Chat App"
            imageSrc={chatThumbnail}
            projectUrl="https://www.youtube.com/shorts/--Hswuwx7jw"
            githubUrl="https://github.com/archanaprabhat/ChatApp"
          />
          <ProjectCard
            title="Real Time Tracker"
            imageSrc={mapThumbnail}
            projectUrl="https://www.youtube.com/watch?v=rFD_K5pVOc0"
            githubUrl="https://github.com/archanaprabhat/RealTime-Tracker"
          />
          <ProjectCard
            title="Artificium"
            imageSrc={artificiumThumbnail}
            projectUrl="https://artificium-chi.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/Artificium"
          />
        </div>
      </div>


      {/* Work Section */}
      <WorkSection />

      {/* Misc Section */}
      <MiscSection />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <section className="mt-16 flex w-full items-center justify-between">
        <p className="select-none rounded-full bg-gray-300 px-3 py-1 font-medium text-gray-1100 text-sm">
          v1.0
        </p>
        <SocialLink
          href="mailto:archanaprabhathtk@gmail.com"
          label="Email"
          Icon={Mail}
        />
      </section>
    </main>
  );
}
