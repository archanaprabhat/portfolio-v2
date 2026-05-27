"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

const miscImages = [
  { src: "/misc/1st time in google office.jpg", caption: "1st time in google office" },
  { src: "/misc/tink-her-hack(13).JPG", caption: "tink-her-hack" },
  { src: "/misc/tinkerhub meetup.jpg", caption: "tinkerhub meetup" },
];

export default function MiscSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % miscImages.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + miscImages.length) % miscImages.length);

  return (
    <div className="mt-16 w-full sm:mt-24 flex justify-center">
      <style>{`
        @keyframes move-gradient {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: -200% 0%;
          }
        }
        .gradient-border-btn {
          background: linear-gradient(var(--btn-bg, #e5e7eb), var(--btn-bg, #e5e7eb)) padding-box,
                      linear-gradient(90deg, #4285f4, #a855f7, #ea4335, #fbbc05, #34a853, #4285f4) border-box;
          border: 1.5px solid transparent;
          background-size: 200% 100%;
          animation: move-gradient 6s linear infinite;
          --btn-bg: #e5e7eb;
        }
        .gradient-border-btn:hover {
          --btn-bg: #d1d5db;
          animation-duration: 3s;
        }
        .dark .gradient-border-btn {
          --btn-bg: #1f2937;
        }
        .dark .gradient-border-btn:hover {
          --btn-bg: #374151;
        }
      `}</style>
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-2 rounded-full text-sm font-medium text-gray-1200 transition-all active:scale-95 gradient-border-btn px-5 py-2.5"
      >
        <Camera size={16} className="text-gray-1100 transition-colors group-hover:text-gray-1200" />
        <span>Miscellaneous Gallery</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative flex flex-col items-center justify-center w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                aria-label="Close gallery"
              >
                <X size={24} />
              </button>

              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-black/50 shadow-2xl">
                <Image
                  src={miscImages[currentIndex].src}
                  alt={miscImages[currentIndex].caption}
                  fill
                  className="object-contain"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-4 rounded-full bg-black/50 p-3 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/70"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 rounded-full bg-black/50 p-3 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/70"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-lg font-medium text-white tracking-wide">
                  {miscImages[currentIndex].caption}
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  {miscImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
