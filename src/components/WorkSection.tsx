"use client";

import Image from "next/image";
import { useState } from "react";
import { FileText, Boxes } from "lucide-react";

type WorkItem = {
    id: string;
    title: string;
    date: string;
    category: "career" | "writing";
    href: string;
    target?: "_blank";
    preview: string;
    description?: string;
};

const workItems: WorkItem[] = [
    {
        id: "1",
        title: "SDE",
        date: "Jan 2024 - Present",
        category: "career",
        href: "https://asterisk.ad/",
        target: "_blank",
        preview: "/asterisk.png",
        description: "Building scalable web applications",
    },
    {
        id: "2",
        title: "Node.js Developer",
        date: "May 2024 - Jan 2025",
        category: "career",
        href: "https://vymo.com/",
        target: "_blank",
        preview: "/vymo.png",
        description: "Building scalable web applications",
    },
    {
        id: "3",
        title: "Frontend Volunteer",
        date: "Jan 2024 - Mar 2025",
        category: "career",
        href: "https://peopleplus.ai/",
        target: "_blank",
        preview: "/p+ai.jpeg",
        description: "Building scalable web applications",
    },
    {
        id: "4",
        title: "React Intern",
        date: "Nov 2023 - May 2024",
        category: "career",
        href: "https://www.gamersback.com/",
        target: "_blank",
        preview: "/gamersback.jpeg",
        description: "Building scalable web applications",
    },
    {
        id: "5",
        title: "Service Worker",
        date: "Nov 2023 - May 2024",
        category: "writing",
        href: "https://www.gamersback.com/",
        target: "_blank",
        preview: "⚙️",
        description: "Building scalable web applications",
    },

];

export default function WorkSection() {
    const [filter, setFilter] = useState<"career" | "writing">("career");

    const filteredItems = workItems.filter((item) => item.category === filter);

    return (
        <div className="mt-16 w-full sm:mt-32">
            <div className="mb-5 flex w-full items-center font-medium text-gray-1200">Work</div>
            <div className="mb-5 flex gap-2">
                <button
                    aria-label="Career"
                    className={`filter-pill ${filter === "career"
                        ? "bg-gray-1200 text-gray-100"
                        : "bg-gray-300 text-gray-1200 hover:bg-gray-400"
                        }`}
                    type="button"
                    onClick={() => setFilter("career")}
                >
                    Career
                </button>
                <button
                    aria-label="Writing"
                    className={`filter-pill ${filter === "writing"
                        ? "bg-gray-1200 text-gray-100"
                        : "bg-gray-300 text-gray-1200 hover:bg-gray-400"
                        }`}
                    type="button"
                    onClick={() => setFilter("writing")}
                >
                    <FileText className="size-[18px]" />
                    Writing
                </button>
            </div>
            <div className="flex flex-col gap-2">
                {filteredItems.map((item) => (
                    <a
                        key={item.id}
                        aria-label={item.title}
                        className="group -mx-3 flex h-auto items-center justify-center gap-4 rounded-xl py-3 pr-4 pl-3 hover:bg-gray-200"
                        href={item.href}
                        target={item.target ?? "_blank"}
                        rel="noopener noreferrer"
                    >
                        <div className="relative aspect-[158/100] h-20 shrink-0 overflow-hidden rounded-lg bg-gray-100 shadow-custom border border-gray-300 flex items-center justify-center">
                            {item.preview.startsWith('/') ? (
                                <Image
                                    src={item.preview}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            ) : (
                                <span className="text-3xl">{item.preview}</span>
                            )}
                        </div>
                        <div className="flex w-full min-w-0 flex-col items-start justify-center gap-0.5">
                            <span className="w-full truncate font-medium text-gray-1200">{item.title}</span>
                            {item.description && (
                                <span className="w-full truncate text-sm text-gray-1100">{item.description}</span>
                            )}
                            <span className="shrink-0 whitespace-nowrap text-sm text-gray-1000">{item.date}</span>
                        </div>
                        <div className="hidden size-8 shrink-0 items-center justify-center rounded-full bg-gray-300 sm:flex">
                            {item.category === "writing" ? (
                                <FileText className="size-4 fill-gray-1000" />
                            ) : (
                                <Boxes className="size-4 fill-gray-1000" />
                            )}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
