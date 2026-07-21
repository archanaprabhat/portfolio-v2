"use client";

import Image from "next/image";
import { Mail, Youtube, Github, Pen, ArrowDownToLine, Codepen } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "@/components/Contact";
import WorkSection from "@/components/WorkSection";
import MiscSection from "@/components/MiscSection";
import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";
import ThemeToggle from "@/components/ThemeToggle";
import voiceNotesThumbnail from "@/assets/voicenotes_thumbnail.webp";
import watchlisterThumbnail from "@/assets/movieValut-thumb.webp";
import dataverseThumbnail from "@/assets/Dataverse.webp";
import sunvaThumbnail from "@/assets/SUNVA.webp";
import harryPotterThumbnail from "@/assets/harry potter-thumb.webp";
import chessThumbnail from "@/assets/chess.webp";
import habitThumbnail from "@/assets/habit-tracker.webp";
import chatThumbnail from "@/assets/chat.webp";
import mapThumbnail from "@/assets/map.webp";
import securityThumbnail from "@/assets/securityVul.webp";
import hlo from "@/assets/hlo.webp";
import BentoBoxThumbnail from "@/assets/bento_box.webp";
import insightCardIphoneThumbnail from "@/assets/insightCard.avif";


export default function Home() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <main className="mx-auto max-w-[692px] px-6 py-12 leading-relaxed sm:py-16">
      {/* Header Section */}
      <div className="mt-8 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsProfileOpen(true)}
            className="group relative size-11 overflow-hidden rounded-full outline outline-black/5 dark:outline-white/5 shrink-0 transition-transform hover:scale-105 focus:outline-none"
            aria-label="View profile picture"
          >
            <Image
              alt="Archana"
              className="select-none object-cover scale-[3] translate-x-[-10%] translate-y-[50%]"
              fill
              src="/profile.webp"
              priority
            />
          </button>
          <div className="flex flex-col items-start justify-center">
            <span className="font-medium text-gray-1200 leading-snug">
              Archana Prabhath
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
          href="/Archana_Resume.pdf"
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
          href="https://www.youtube.com/@Archana_Prabhath/videos"
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
            githubUrl="https://github.com/archanaprabhat/VoiceNotes"
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
            projectUrl="https://www.youtube.com/watch?v=3Xnf5V6NmL8"
            customPageUrl="/projects/bypassing-paywall"
          />
          <ProjectCard
            title="Cencus India HLO Map Generator"
            imageSrc={hlo}
            projectUrl="https://map-my-block-ruby.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/map_my_block"
          />
          <ProjectCard
            title="Sunva:Seamless conversation loop for the deaf "
            imageSrc={sunvaThumbnail}
            projectUrl="https://www.youtube.com/watch?v=vDGHeRZ_xHI&list=PLyERFVb5NMdy4Qppp2O0uhE-OLIKDfpLz&index=1"
          />
          <ProjectCard
            title="BentoBox"
            imageSrc={BentoBoxThumbnail}
            projectUrl="https://archanaprabhat.github.io/Bento-Box/"
            githubUrl="https://github.com/archanaprabhat/Bento-Box"
          />
          <ProjectCard
            title="Stagger Animation"
            imageSrc={insightCardIphoneThumbnail}
            projectUrl="https://archanaprabhat.github.io/insight-card-iphone/"
            githubUrl="https://github.com/archanaprabhat/insight-card-iphone"
          />
          <ProjectCard
            title="Peer-to-Peer Chess"
            imageSrc={chessThumbnail}
            projectUrl="https://www.youtube.com/watch?v=jX7EPPMupLs"
            githubUrl="https://github.com/archanaprabhat/chess"
            isExperiment={true}
          />
          <ProjectCard
            title="Real Time Tracker"
            imageSrc={mapThumbnail}
            projectUrl="https://www.youtube.com/watch?v=rFD_K5pVOc0"
            githubUrl="https://github.com/archanaprabhat/RealTime-Tracker"
            isExperiment={true}
          />
          <ProjectCard
            title="Socket.IO Chat App"
            imageSrc={chatThumbnail}
            projectUrl="https://www.youtube.com/shorts/--Hswuwx7jw"
            githubUrl="https://github.com/archanaprabhat/ChatApp"
            isExperiment={true}
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
            title="Dataverse"
            imageSrc={dataverseThumbnail}
            projectUrl="https://dataverse-nu.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/dataverse-cloud-erp"
          />

          <ProjectCard
            title="Consistency Tracker"
            imageSrc={habitThumbnail}
            projectUrl="https://tracker-nextjs-iqvc.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/Consistency"
            demoVideo="/consistency.mp4"
            techStack={[
              {
                category: "Frontend",
                items: "Next.js 14 (App Router), TypeScript, React, Tailwind CSS 4(Multiple themes)",
              },
              {
                category: "Backend, Database & Storage",
                items: "Firebase, Firebase Admin, Localstorage",
              },
              {
                category: "UI Components & Icons",
                items: "Lucide React & React Icons, Sonner, Emoji Picker React",
              },
            ]}
          />

          <ProjectCard
            title="Harry Potter Sorting Hat"
            imageSrc={harryPotterThumbnail}
            projectUrl="https://sorting-hat-magic.vercel.app/"
            githubUrl="https://github.com/archanaprabhat/Harry_Potter_Sorting_Hat"
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

      {/* Profile Image Modal */}
      <AnimatePresence>
        {isProfileOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsProfileOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 flex max-h-[85vh] max-w-[90vw] flex-col items-center justify-center overflow-hidden rounded-2xl bg-black/40 border border-white/10 shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button inside modal container */}
              <button
                onClick={() => setIsProfileOpen(false)}
                className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-2 text-white/80 transition-colors hover:bg-black/90 hover:text-white"
                aria-label="Close profile picture modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              {/* Full Profile Image */}
              <img
                src="/profile.webp"
                alt="Archana Prabhat - Full View"
                className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-inner"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
