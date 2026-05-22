"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";

export interface TechStackItem {
  category: string;
  items: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  demoVideo?: string;
  techStack?: TechStackItem[];
  projectUrl: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  demoVideo,
  techStack,
  projectUrl,
}: ProjectModalProps) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-gray-300 bg-gray-100 shadow-2xl dark:border-gray-800 dark:bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4 dark:border-gray-800">
              <h2 className="text-xl font-medium text-gray-1200">{title}</h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-gray-1100 transition-colors hover:bg-gray-300 hover:text-gray-1200 dark:hover:bg-gray-800"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6">
              {demoVideo && (
                <div className="mb-8 overflow-hidden rounded-xl bg-black">
                  <video
                    src={demoVideo}
                    controls
                    className="w-full"
                    autoPlay
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {techStack && techStack.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-4 text-lg font-medium text-gray-1200">Tech Stack</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {techStack.map((stack, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-gray-300 bg-gray-200 p-4 dark:border-gray-800 dark:bg-gray-800/50"
                      >
                        <h4 className="mb-2 font-medium text-gray-1100">
                          {stack.category}
                        </h4>
                        <p className="text-sm text-gray-1000 leading-relaxed">
                          {stack.items}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-end border-t border-gray-300 p-4 px-6 dark:border-gray-800">
              <a
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-gray-1200 px-6 py-2.5 font-medium text-gray-100 transition-transform hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-black"
              >
                <span>Live</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
