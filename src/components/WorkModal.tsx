"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export interface WorkMediaItem {
  type: "image" | "video" | "pdf";
  src: string;
  caption?: string;
}

export interface WorkModalData {
  title: string;
  company: string;
  isStealth?: boolean;
  media?: WorkMediaItem[];
  description?: string;
  techStack?: string;
}

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: WorkModalData | null;
}

export default function WorkModal({ isOpen, onClose, data }: WorkModalProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrentMediaIndex(0); // Reset carousel on open
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!data) return null;

  const nextMedia = () => {
    if (data.media) {
      setCurrentMediaIndex((prev) => (prev + 1) % data.media!.length);
    }
  };

  const prevMedia = () => {
    if (data.media) {
      setCurrentMediaIndex((prev) => (prev - 1 + data.media!.length) % data.media!.length);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-gray-300 bg-gray-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4">
              <div>
                <h2 className="text-xl font-medium text-gray-1200">{data.title}</h2>
                <p className="text-sm font-normal text-gray-1100">@ {data.company}</p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-gray-1100 transition-colors hover:bg-gray-300 hover:text-gray-1200"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6">
              
              {/* Media Section */}
              {data.isStealth ? (
                <div className="mb-8 flex h-48 w-full items-center justify-center rounded-xl border border-dashed border-gray-400 bg-gray-200">
                  <span className="text-lg font-medium text-gray-1100">stealth and a :)</span>
                </div>
              ) : data.media && data.media.length > 0 ? (
                <div className="mb-8 flex flex-col items-center">
                  <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-gray-200 border border-gray-300">
                    
                    {data.media[currentMediaIndex].type === "image" && (
                      <Image
                        src={data.media[currentMediaIndex].src}
                        alt={data.media[currentMediaIndex].caption || "Work image"}
                        fill
                        className="object-contain"
                      />
                    )}
                    {data.media[currentMediaIndex].type === "video" && (
                      <video
                        src={data.media[currentMediaIndex].src}
                        controls
                        className="h-full w-full object-contain"
                        autoPlay
                        playsInline
                      />
                    )}
                    {data.media[currentMediaIndex].type === "pdf" && (
                      <iframe
                        src={`${data.media[currentMediaIndex].src}#toolbar=0`}
                        className="h-full w-full"
                        title="PDF Viewer"
                      />
                    )}

                    {/* Navigation Buttons */}
                    {data.media.length > 1 && (
                      <>
                        <button
                          onClick={prevMedia}
                          className="absolute left-4 rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/70"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextMedia}
                          className="absolute right-4 rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/70"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                  </div>
                  {/* Caption */}
                  {data.media[currentMediaIndex].caption && (
                    <p className="mt-3 text-sm font-medium text-gray-1100">
                      {data.media[currentMediaIndex].caption}
                    </p>
                  )}
                  {/* Indicators */}
                  {data.media.length > 1 && (
                    <div className="mt-4 flex gap-2">
                      {data.media.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === currentMediaIndex ? "w-6 bg-gray-1200" : "w-1.5 bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : null}

              {/* Description Section */}
              {data.description && (
                <div className="mb-8">
                  <p className="text-gray-1200 leading-relaxed whitespace-pre-wrap">
                    {data.description}
                  </p>
                </div>
              )}

              {/* Tech Stack Section */}
              {data.techStack && (
                <div className="rounded-xl border border-gray-300 bg-gray-100 p-5">
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-1100">
                    Tech Stack
                  </h3>
                  <p className="text-gray-1200 leading-relaxed">
                    {data.techStack}
                  </p>
                </div>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
