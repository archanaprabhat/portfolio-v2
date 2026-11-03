import dynamic from "next/dynamic";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const PitchDeckViewer = dynamic(() => import("@/components/PitchDeckViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-48 items-center justify-center rounded-xl border border-gray-300 bg-gray-100 text-sm text-gray-1000">
      Loading pitch deck…
    </div>
  ),
});

const PITCH_PDF = "/map-my-block/pitch-deck.pdf";
const LIVE_URL = "https://map-my-block-ruby.vercel.app/";
const GITHUB_URL = "https://github.com/archanaprabhat/map_my_block";
const HACKATHON_VIDEO = "/map-my-block/video.mp4";
const HOST_FEATURE_IMAGE = "/map-my-block/host-feature.webp";

export const metadata: Metadata = {
  title: "Map My Block — Census India HLO Map Generator",
  description:
    "Hackathon project (team Lone Cartographer): Census India HLO map generator, Top 50 notable project.",
  openGraph: {
    title: "Map My Block — Census India HLO Map Generator",
    description:
      "Hackathon project (team Lone Cartographer): Census India HLO map generator, Top 50 notable project.",
    images: [{ url: "/map-my-block/hackathon-top-50.png" }],
  },
};

export default function MapMyBlockPage() {
  return (
    <main className="mx-auto max-w-[692px] px-6 py-12 leading-relaxed sm:py-16">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-1100 transition-colors hover:text-gray-1200"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>

      <h1 className="mb-6 text-2xl font-medium leading-tight text-gray-1200">
        Map My Block: Census India HLO Map Generator
      </h1>

      <div className="mb-3">
        <h2 className="text-lg font-medium text-gray-1200">Hackathon demo</h2>
      </div>
      <div className="mb-3 overflow-hidden rounded-xl bg-black">
        <video
          controls
          className="w-full"
          playsInline
          preload="auto"
        >
          <source src={HACKATHON_VIDEO} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="mb-8 text-sm text-gray-1000 leading-relaxed">
        Heads up: I had a 4-minute limit for this video and very much went over, so I sped it up a lot to fit.
        It&apos;s basically gibberish at that speed, try dropping the playback speed if you want to actually
        follow along.
      </p>

      <div className="mb-3">
        <h2 className="text-lg font-medium text-gray-1200">Pitch deck</h2>
        <p className="mt-2 text-sm text-gray-1100 leading-relaxed">
          One slide at a time—use the arrows to move between pages.
        </p>
      </div>
      <div className="mb-8">
        <PitchDeckViewer fileUrl={encodeURI(PITCH_PDF)} />
      </div>

      <div className="mb-3">
        <h2 className="text-lg font-medium text-gray-1200">Top 50 out of 3,000+ submissions</h2>
      </div>
      <div className="mb-8 overflow-hidden rounded-xl border border-gray-300 bg-gray-100">
        <Image
          src="/map-my-block/hackathon-top-50.png"
          alt="Map My Block listed among notable projects in the Top 50"
          width={1024}
          height={480}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="mb-3">
        <h2 className="text-lg font-medium text-gray-1200">Featured on the results stream</h2>
        <p className="mt-2 text-gray-1100 leading-relaxed">
          While walking through the Top 50 on the hackathon results livestream, the host called out{" "}
          <strong>Map My Block</strong> on screen alongside the full notable-projects list.
        </p>
      </div>
      <div className="mb-8 overflow-hidden rounded-xl border border-gray-300 bg-gray-100">
        <Image
          src={HOST_FEATURE_IMAGE}
          alt="Hackathon host highlighting Map My Block in the Top 50 notable projects"
          width={1917}
          height={1080}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="mb-8 space-y-4 text-gray-1200 leading-relaxed">
        <p>
          Okay so the why behind this is pretty simple. My sister is a Census HLO agent,basically a census
          enumerator, and everything about her job was manual. Like actual paper-and-pen manual. I just wanted
          to make her life easier, so I built this to automate it. That&apos;s the whole story, honestly, and
          it&apos;s all in the demo video anyway.
        </p>
        <p>
          Built this (team name: <strong>Lone Cartographer</strong>, because it was just me, lol) at a
          hackathon, and out of 3,000+ submissions it made it to the <strong>Top 50</strong>. That genuinely
          means a lot, and getting called out on the results livestream for it was unreal.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <a
          href={LIVE_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-6 py-2.5 font-medium text-gray-1200 transition-[colors,transform] hover:border-gray-400 hover:bg-gray-200 active:scale-[0.98]"
        >
          <span>Live app</span>
          <ExternalLink size={16} />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-6 py-2.5 font-medium text-gray-1200 transition-[colors,transform] hover:border-gray-400 hover:bg-gray-200 active:scale-[0.98]"
        >
          <span>GitHub</span>
          <Github size={16} />
        </a>
      </div>
    </main>
  );
}
