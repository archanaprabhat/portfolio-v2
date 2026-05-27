"use client";

import { Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import ProjectModal, { TechStackItem } from "./ProjectModal";

import { useRouter } from "next/navigation";

interface ProjectCardProps {
  title: string;
  emoji?: string;
  imageSrc?: string | StaticImageData;
  projectUrl: string;
  githubUrl?: string;
  description?: string;
  demoVideo?: string;
  demoImage?: string;
  techStack?: TechStackItem[];
  customPageUrl?: string;
}

export default function ProjectCard({
  title,
  emoji,
  imageSrc,
  projectUrl,
  githubUrl,
  description,
  demoVideo,
  demoImage,
  techStack,
  customPageUrl,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const hasModalContent = !!demoVideo || !!demoImage || (techStack && techStack.length > 0);

  const handleCardClick = () => {
    if (customPageUrl) {
      router.push(customPageUrl);
    } else if (hasModalContent) {
      setIsModalOpen(true);
    } else {
      window.open(projectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={title}
        className="project-card cursor-pointer"
        onClick={handleCardClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
      >
        <div className="relative flex aspect-[192/100] w-full items-center justify-center bg-gray-100 overflow-hidden border-b border-gray-300">
          {imageSrc ? (
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          ) : (
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl shadow-custom border border-gray-300 bg-gray-200">
              <span className="text-2xl">{emoji}</span>
            </div>
          )}
        </div>
        <div className="flex w-full flex-col p-4 font-medium">
          <span>{title}</span>
          {githubUrl && (
            <a
              href={githubUrl}
              className="font-normal text-gray-1100 self-end"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Github />
            </a>
          )}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        demoVideo={demoVideo}
        demoImage={demoImage}
        description={description}
        techStack={techStack}
        projectUrl={projectUrl}
      />
    </>
  );
}
