"use client";

import Image from "next/image";
import { useState } from "react";
import { FileText, Boxes } from "lucide-react";
import WorkModal, { WorkModalData } from "./WorkModal";

type WorkItem = {
    id: string;
    title: string;
    company?: string;
    date?: string;
    category: "career" | "writing";
    href?: string;
    target?: "_blank";
    preview: string;
    description?: string;
    modalData?: WorkModalData;
};

const workItems: WorkItem[] = [
    {
        id: "1",
        title: "SDE",
        company: "Asteriscus",
        date: "Jan 2024 - Present",
        category: "career",
        preview: "/asterisk.png",
        description: "Founding team member building products from scratch",
        modalData: {
            title: "SDE",
            company: "Asteriscus",
            description: "Currently, I am part of the founding engineering team at Asteriscus, building digital in-transit media systems for public transport with full over-the-air control. I work across the stack, developing advertiser-facing web platforms that support creative uploads, campaign scheduling, real-time device monitoring, and reach analytics. Beyond frontend development with React and Next.js, I handle backend services in Golang and contribute to end-to-end hardware-software integration across embedded Linux environments. My responsibilities include device provisioning, modem and network configuration, OTA update pipelines, and system reliability across distributed edge devices. I’ve worked extensively with Dockerized deployments and Kafka-based event pipelines, while implementing observability using Prometheus, Grafana, and Loki. Infrastructure and delivery workflows are managed through Terraform, Cloudflare, CI/CD pipelines, and system-level tooling including systemd and shell scripting. As a founding team member, I also contribute to product direction, testing, on-ground installations, investor demos, and operational execution.",
            techStack: "React.js, Next.js, JavaScript, Tailwind CSS, Golang, Linux, Docker, Kafka, SQLite, Prometheus, Grafana, Loki, Terraform, Cloudflare, CI/CD, NetworkManager/ModemManager, Rockchip boards, Raspberry Pi, systemd, Shell scripting."
        }
    },
    {
        id: "2",
        title: "Software Development Engineer",
        company: "Vymo",
        date: "May 2024 - Jan 2025",
        category: "career",
        preview: "/vymo.png",
        description: "Maintaining mission-critical fintech backend systems",
        modalData: {
            title: "Software Development Engineer",
            company: "Vymo",
            media: [
                { type: "image", src: "/vymo/1st fulltime job flexing.jpg", caption: "1st fulltime job flexing" },
                { type: "image", src: "/vymo/IMG-20240816-WA0008.jpg", caption: "Diwalii🪔" },
                { type: "image", src: "/vymo/PXL_20240808_082114988.RAW-01.COVER.jpg", caption: "work lunch" },
                { type: "image", src: "/vymo/messy workspace.jpg", caption: "messy workspace" },
                { type: "image", src: "/vymo/staying late.jpg", caption: "staying late" },
                { type: "image", src: "/vymo/watching all onboarding vdos.jpg", caption: "watching all onboarding vdos" },
            ],
            description: "As part of the engineering team at Metaz, I contributed to a large-scale microservices ecosystem built for Vymo, powering HDFC Bank’s bank-wide collections platform. I worked across both frontend and backend in a mission-critical fintech environment where stability and uptime were non-negotiable. My responsibilities included delivering feature enhancements, building performant user interfaces, and handling high-priority production issues under strict SLA requirements. I frequently diagnosed complex incidents such as distributed job failures, Kafka-driven event flow disruptions, API pipeline bottlenecks, and Airflow DAG breakdowns, restoring system reliability in live environments. I developed secure REST APIs using Node.js and Express.js, implementing authentication and authorization using JWT, OAuth, and Passport.js with robust session handling. I also worked on data pipelines across MongoDB, MySQL, and Elasticsearch to support digital payment reporting and operational analytics. Close collaboration with client and internal teams through agile ceremonies, Jira tracking, and disciplined Git workflows ensured consistent, high-quality releases.",
            techStack: "JavaScript(ES6), TypeScript, React.js, Node.js, Express.js, Microservices, REST APIs, JWT, OAuth, MongoDB/Mongoose, Airflow, SFTP, WebSockets, Version control(Git), Jira, Agile Scrum teams"
        }
    },
    {
        id: "3",
        title: "Frontend Volunteer",
        company: "People+AI",
        date: "Jan 2024 - Mar 2025",
        category: "career",
        preview: "/p+ai.jpeg",
        description: "Building accessible UI for the deaf community",
        modalData: {
            title: "Frontend Volunteer",
            company: "People+AI",
            media: [
                { type: "image", src: "/People+ai/IMG-20250308-WA0014.jpg", caption: "GopiEattan and Team" },
                { type: "image", src: "/People+ai/IMG-20250308-WA0020.jpg", caption: "😅" },
            ]
        }
    },
    {
        id: "4",
        title: "React Intern",
        company: "Gamersback",
        date: "Nov 2023 - May 2024",
        category: "career",
        preview: "/gamersback.jpeg",
        description: "Building gaming web experiences in React",
        modalData: {
            title: "React Intern",
            company: "Gamersback",
            media: [
                { type: "pdf", src: "/gamersback/GamersBack Experience.pdf", caption: "Internship Certificate" }
            ],
            description: "At Gamerback, I took full ownership of the frontend, building both the customer-facing product and the internal admin panel from the ground up within a monolithic setup. The application was developed using React.js with Vite, focusing on performance, scalability, and responsive design through Tailwind CSS and Material UI. I structured client-side navigation using React Router and implemented centralized state handling with Redux to maintain consistent data flow. Secure authentication and role-based access control were implemented using JWT for both user and admin journeys. Design handoffs from Figma were converted into reusable, accessible components while maintaining clean architecture and production-ready code. The work involved extensive use of HTML, CSS, JavaScript, and TypeScript, with a strong emphasis on smooth API integration and long-term maintainability.",
            techStack: "React.js, Vite, Tailwind CSS, Material UI, Context API, Redux, React Router, JWT, HTML/CSS, JavaScript, TypeScript, Responsive Design, Postman, Figma"
        }
    },
    {
        id: "4.5",
        title: "SDE Intern",
        company: "Glowtouch",
        date: "Mid 2023",
        category: "career",
        preview: "/glowtouch/GLOWTOUCH logo.webp",
        description: "Worked for a brief period",
        modalData: {
            title: "SDE Intern",
            company: "Glowtouch",
            media: [
                { type: "image", src: "/glowtouch/IMG_20230624_162700.jpg", caption: "Workspace" },
                { type: "video", src: "/glowtouch/everyones working.mp4", caption: "everyones working" },
            ]
        }
    },
    {
        id: "5",
        title: "Service Worker",
        category: "writing",
        href: "https://medium.com/@archanaprabhat/that-tab-you-closed-its-still-watching-you-meet-the-service-worker-38307807a8db",
        target: "_blank",
        preview: "⚙︎",
        description: "How apps stay alive after you close the tab",
    },
    {
        id: "6",
        title: "Push Notification",
        category: "writing",
        href: "https://medium.com/@archanaprabhat/push-notification-implementation-using-fcm-7b5bf2d0fb9a",
        target: "_blank",
        preview: "⎙",
        description: "Breaking down real-world notification flows",
    },
    {
        id: "7",
        title: "Options Object",
        category: "writing",
        href: "https://medium.com/@archanaprabhat/options-objects-explained-like-youre-5-884043fd88b3",
        target: "_blank",
        preview: "{}",
        description: "Making JavaScript options less confusing",
    },
    {
        id: "8",
        title: "React Batch Update",
        category: "writing",
        href: "https://medium.com/@archanaprabhat/setcount-count-1-works-until-it-doesnt-here-s-why-react-devs-swear-by-prev-prev-1-c240780e875b",
        target: "_blank",
        preview: "⟳",
        description: "Why stale state breaks React updates",
    },
    {
        id: "9",
        title: "Habit Tracker",
        category: "writing",
        href: "https://medium.com/@archanaprabhat/building-arc-a-track-a-simple-habit-tracker-for-beginners-using-react-tailwind-vite-9a32e2b18b14",
        target: "_blank",
        preview: "</>",
        description: "Code walkthrough",
    },
];

export default function WorkSection() {
    const [filter, setFilter] = useState<"career" | "writing">("career");
    const [selectedModalData, setSelectedModalData] = useState<WorkModalData | null>(null);

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
                {filteredItems.map((item) => {
                    const isModal = !!item.modalData;

                    return (
                        <a
                            key={item.id}
                            aria-label={item.title}
                            className="group -mx-3 flex h-auto items-center justify-center gap-4 rounded-xl py-3 pr-4 pl-3 hover:bg-gray-200 cursor-pointer"
                            href={isModal ? undefined : item.href}
                            target={isModal ? undefined : (item.target ?? "_blank")}
                            rel={isModal ? undefined : "noopener noreferrer"}
                            onClick={(e) => {
                                if (isModal) {
                                    e.preventDefault();
                                    setSelectedModalData(item.modalData!);
                                }
                            }}
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
                                    <span className="text-3xl font-medium text-gray-1000">{item.preview}</span>
                                )}
                            </div>
                            <div className="flex w-full min-w-0 flex-col items-start justify-center gap-0.5">
                                <span className="w-full truncate font-medium text-gray-1200">
                                    {item.title}
                                </span>
                                {item.company && (
                                    <span className="font-normal text-gray-1100 text-sm">
                                        {item.company}
                                    </span>
                                )}
                                {item.description && (
                                    <span className="w-full truncate text-sm text-gray-1100 mt-0.5">{item.description}</span>
                                )}
                                {item.date && <span className="shrink-0 whitespace-nowrap text-sm text-gray-1000">{item.date}</span>}
                            </div>
                            <div className="hidden size-8 shrink-0 items-center justify-center rounded-full bg-gray-300 sm:flex">
                                {item.category === "writing" ? (
                                    <FileText className="size-4 fill-gray-1000" />
                                ) : (
                                    <Boxes className="size-4 fill-gray-1000" />
                                )}
                            </div>
                        </a>
                    );
                })}
            </div>

            <WorkModal
                isOpen={!!selectedModalData}
                onClose={() => setSelectedModalData(null)}
                data={selectedModalData}
            />
        </div>
    );
}
