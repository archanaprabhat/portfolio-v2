import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  emoji: string;
  projectUrl: string;
  githubUrl?: string;
  description?: string;
}

export default function ProjectCard({
  title,
  emoji,
  projectUrl,
  githubUrl,
  description,
}: ProjectCardProps) {
  return (
    <a
      aria-label={title}
      className="project-card"
      href={projectUrl}
    >
      <div className="relative flex aspect-[192/100] w-full items-center justify-center gap-2 bg-gray-100">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl shadow-custom border border-gray-300 bg-gray-200">
          <span className="text-2xl">{emoji}</span>
        </div>
      </div>
      <div className="flex w-full flex-col px-4 pb-4 font-medium">
        <span>{title}</span>
        {description && (
          <span className="font-normal text-gray-1100">{description}</span>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            className="font-normal text-gray-1100 self-end"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        )}
      </div>
    </a>
  );
}
