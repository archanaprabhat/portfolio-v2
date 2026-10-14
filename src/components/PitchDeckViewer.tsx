"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PitchDeckViewerProps {
  fileUrl: string;
}

export default function PitchDeckViewer({ fileUrl }: PitchDeckViewerProps) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(640);
  const [loadError, setLoadError] = useState(false);

  const onLoadSuccess = useCallback(({ numPages: total }: { numPages: number }) => {
    setNumPages(total);
    setPageNumber(1);
    setLoadError(false);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      const max = Math.min(644, window.innerWidth - 48);
      setContainerWidth(Math.max(280, max));
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && pageNumber > 1) {
        setPageNumber((p) => p - 1);
      }
      if (e.key === "ArrowRight" && pageNumber < numPages) {
        setPageNumber((p) => p + 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [pageNumber, numPages]);

  if (loadError) {
    return (
      <p className="text-sm text-gray-1100">
        Could not load the PDF here.{" "}
        <a
          href={fileUrl}
          target="_blank"
          rel="noreferrer"
          className="text-gray-1200 underline decoration-gray-400 underline-offset-2"
        >
          Open in a new tab
        </a>
        .
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
        <Document
          file={fileUrl}
          onLoadSuccess={onLoadSuccess}
          onLoadError={() => setLoadError(true)}
          loading={
            <div className="flex h-[min(70vh,480px)] items-center justify-center text-sm text-gray-1000">
              Loading pitch deck…
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            width={containerWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous page"
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
          className="flex size-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-1200 transition-colors hover:border-gray-400 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="size-5" />
        </button>

        {numPages > 0 && (
          <span className="min-w-[4.5rem] text-center text-sm font-medium text-gray-1100">
            {pageNumber} / {numPages}
          </span>
        )}

        <button
          type="button"
          aria-label="Next page"
          disabled={numPages === 0 || pageNumber >= numPages}
          onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
          className="flex size-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-1200 transition-colors hover:border-gray-400 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
