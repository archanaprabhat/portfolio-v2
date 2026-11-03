"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Item = { src: string; caption: string };

const items: Item[] = [
  { src: "/misc/1st-time-in-google-office.jpg", caption: "1st time in google office" },
  { src: "/misc/tink-her-hack(13).JPG", caption: "tink-her-hack" },
  { src: "/misc/tinkerhub-meetup.jpg", caption: "tinkerhub meetup" },
];

const sizes = "(min-width: 640px) 33vw, 100vw";

function Section({
  index,
  name,
  hover,
  children,
}: {
  index: string;
  name: string;
  hover: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20 first:mt-10">
      <header className="mb-5 flex items-baseline justify-between gap-4 border-b border-gray-300 pb-3">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-gray-1000">{index}</span>
          <h2 className="font-medium text-gray-1200">{name}</h2>
        </div>
        <p className="text-right text-sm text-gray-1000">{hover}</p>
      </header>
      {children}
    </section>
  );
}

/* 01 — Cursor tilt with a moving glare */
function TiltCard({ item }: { item: Item }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tf, setTf] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50, on: false });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTf(`perspective(900px) rotateX(${(0.5 - py) * 14}deg) rotateY(${(px - 0.5) * 14}deg) scale3d(1.03,1.03,1.03)`);
    setGlare({ x: px * 100, y: py * 100, on: true });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        setTf("");
        setGlare((g) => ({ ...g, on: false }));
      }}
      style={{ transform: tf, transition: "transform 0.25s ease-out" }}
      className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200 shadow-lg will-change-transform"
    >
      <Image src={item.src} alt={item.caption} fill sizes={sizes} className="object-cover" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glare.on ? 1 : 0,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.45), transparent 55%)`,
        }}
      />
      <p className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/50 px-3 py-2 text-sm text-white backdrop-blur-sm">
        {item.caption}
      </p>
    </div>
  );
}

/* 02 — Polaroids that straighten and lift */
function Polaroid({ item, i }: { item: Item; i: number }) {
  const tilt = [-4, 3, -2][i % 3];
  return (
    <figure
      className="group relative bg-white p-3 pb-14 shadow-md ring-1 ring-black/5 transition-all duration-500 ease-out hover:z-10 hover:-translate-y-3 hover:rotate-0 hover:scale-105 hover:shadow-2xl"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-200">
        <Image src={item.src} alt={item.caption} fill sizes={sizes} className="object-cover" />
      </div>
      <figcaption className="absolute bottom-4 left-0 right-0 text-center font-serif text-sm italic text-gray-900">
        {item.caption}
      </figcaption>
    </figure>
  );
}

/* 03 — Caption curtain that rises from the bottom with a REC pulse */
function CurtainCard({ item }: { item: Item }) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-200">
      <Image
        src={item.src}
        alt={item.caption}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 font-mono text-[11px] tracking-widest text-white backdrop-blur-sm">
        <span className="size-1.5 animate-pulse rounded-full bg-red-500" />
        REC
      </span>
      <div className="absolute inset-x-0 bottom-0 translate-y-[60%] bg-gradient-to-t from-black/90 to-black/20 px-4 pb-4 pt-12 transition-transform duration-500 ease-out group-hover:translate-y-0">
        <p className="text-sm font-medium text-white">{item.caption}</p>
        <p className="mt-1 translate-y-2 text-xs text-white/60 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          Captured on the day
        </p>
      </div>
    </div>
  );
}

/* 04 — Camera viewfinder: brackets close in, exposure readout appears */
function ViewfinderCard({ item }: { item: Item }) {
  const corner = "absolute size-5 border-white/90 transition-all duration-500 ease-out";
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-md bg-gray-200">
      <Image
        src={item.src}
        alt={item.caption}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
      />
      <span className={`${corner} left-3 top-3 border-l-2 border-t-2 group-hover:left-5 group-hover:top-5`} />
      <span className={`${corner} right-3 top-3 border-r-2 border-t-2 group-hover:right-5 group-hover:top-5`} />
      <span className={`${corner} bottom-3 left-3 border-b-2 border-l-2 group-hover:bottom-5 group-hover:left-5`} />
      <span className={`${corner} bottom-3 right-3 border-b-2 border-r-2 group-hover:bottom-5 group-hover:right-5`} />
      <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 bg-white/0 transition-colors duration-500 group-hover:bg-white/70" />
      <span className="absolute left-1/2 top-1/2 h-6 w-px -translate-y-1/2 bg-white/0 transition-colors duration-500 group-hover:bg-white/70" />
      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] tracking-wide text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        f/2.8 · 1/250 · ISO 200
      </p>
    </div>
  );
}

/* 05 — Film strip: the hovered frame widens, others compress */
function FilmStrip() {
  return (
    <div className="flex h-72 w-full flex-col justify-between overflow-hidden rounded-lg bg-neutral-900 px-2 py-3">
      <div className="h-2.5 w-full bg-[repeating-linear-gradient(90deg,#171717_0_10px,transparent_10px_22px)]" />
      <div className="flex h-full gap-2 py-2">
        {items.map((item) => (
          <div key={item.src} className="group relative min-w-0 flex-1 overflow-hidden rounded-sm transition-[flex] duration-500 ease-out hover:flex-[3]">
            <Image src={item.src} alt={item.caption} fill sizes={sizes} className="object-cover" />
            <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-8 font-mono text-xs text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
      <div className="h-2.5 w-full bg-[repeating-linear-gradient(90deg,#171717_0_10px,transparent_10px_22px)]" />
    </div>
  );
}

/* 06 — Spotlight: hovering one frame dims and desaturates the rest */
function SpotlightGrid() {
  return (
    <div className="group/grid grid grid-cols-1 gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.src}
          className="relative aspect-[3/4] overflow-hidden rounded-xl transition-all duration-500 ease-out group-hover/grid:opacity-40 group-hover/grid:grayscale hover:!opacity-100 hover:!grayscale-0 hover:z-10 hover:scale-[1.06] hover:shadow-2xl"
        >
          <Image src={item.src} alt={item.caption} fill sizes={sizes} className="object-cover" />
          <p className="absolute bottom-0 inset-x-0 bg-black/60 px-3 py-2 text-xs text-white">{item.caption}</p>
        </div>
      ))}
    </div>
  );
}

/* 07 — Flip card: the back side reveals a short note */
function FlipCard({ item, note }: { item: Item; note: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="aspect-[4/5] [perspective:1000px]"
    >
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-xl bg-gray-200 [backface-visibility:hidden]">
          <Image src={item.src} alt={item.caption} fill sizes={sizes} className="object-cover" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between rounded-xl border border-gray-300 bg-gray-100 p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-gray-800 dark:bg-gray-900">
          <p className="font-mono text-[11px] uppercase tracking-widest text-gray-1000">Note</p>
          <p className="text-base leading-relaxed text-gray-1200">{note}</p>
          <p className="text-sm font-medium text-gray-1100">{item.caption}</p>
        </div>
      </div>
    </div>
  );
}

/* 08 — Stacked deck that fans out horizontally */
function StackedDeck() {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative mx-auto h-80 w-full max-w-md"
    >
      {items.map((item, i) => (
        <div
          key={item.src}
          className="absolute top-0 aspect-[3/4] w-[46%] overflow-hidden rounded-xl bg-gray-200 shadow-xl transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)]"
          style={{
            left: open ? `${i * 27}%` : `${i * 4}%`,
            zIndex: open ? i + 1 : items.length - i,
            transform: `rotate(${open ? 0 : (i - 1) * 4}deg)`,
          }}
        >
          <Image src={item.src} alt={item.caption} fill sizes="200px" className="object-cover" />
        </div>
      ))}
      <p className="absolute -bottom-8 inset-x-0 text-center text-sm text-gray-1100">
        {open ? "Pick one" : "Hover to deal"}
      </p>
    </div>
  );
}

/* 09 — Iris wipe: a circle opens from the center to reveal color */
function IrisCard({ item }: { item: Item }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-full bg-gray-200">
      <Image src={item.src} alt={item.caption} fill sizes={sizes} className="object-cover grayscale" />
      <Image
        src={item.src}
        alt=""
        fill
        sizes={sizes}
        aria-hidden
        className="object-cover transition-[clip-path] duration-700 ease-out [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(75%_at_50%_50%)]"
      />
      <p className="absolute inset-x-0 bottom-6 text-center text-sm font-medium text-white opacity-0 drop-shadow transition-all duration-500 group-hover:opacity-100">
        {item.caption}
      </p>
    </div>
  );
}

/* 10 — Editorial: a big outlined index number fills in, the title slides up */
function EditorialCard({ item, i }: { item: Item; i: number }) {
  return (
    <div className="group relative">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
        <Image
          src={item.src}
          alt={item.caption}
          fill
          sizes={sizes}
          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
        />
      </div>
      <span className="absolute -top-6 -left-2 select-none text-7xl font-light tabular-nums text-transparent [-webkit-text-stroke:1px_var(--gray-1200)] transition-colors duration-500 group-hover:text-gray-1200">
        0{i + 1}
      </span>
      <h3 className="mt-3 overflow-hidden font-serif text-xl text-gray-1200">
        <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-1">{item.caption}</span>
      </h3>
    </div>
  );
}

export default function MiscVariationsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-12 sm:pt-16">
      <div className="mb-2">
        <h1 className="text-2xl font-medium text-gray-1200">Miscellaneous Gallery — 10 directions</h1>
        <p className="mt-1 text-gray-1000">Each section is a different gallery treatment with its own hover behavior.</p>
      </div>

      <Section index="01" name="Cursor Tilt" hover="3D tilt follows the pointer, with a light glare">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <TiltCard key={item.src} item={item} />
          ))}
        </div>
      </Section>

      <Section index="02" name="Polaroid Pile" hover="Snaps straight, lifts and scales up">
        <div className="grid grid-cols-1 gap-8 px-2 sm:grid-cols-3">
          {items.map((item, i) => (
            <Polaroid key={item.src} item={item} i={i} />
          ))}
        </div>
      </Section>

      <Section index="03" name="Caption Curtain" hover="Photo zooms, caption rises with a REC tag">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <CurtainCard key={item.src} item={item} />
          ))}
        </div>
      </Section>

      <Section index="04" name="Viewfinder" hover="Corner brackets close in, exposure readout appears">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <ViewfinderCard key={item.src} item={item} />
          ))}
        </div>
      </Section>

      <Section index="05" name="Film Strip" hover="Hovered frame widens, others compress">
        <FilmStrip />
      </Section>

      <Section index="06" name="Spotlight" hover="Others dim and desaturate around the focus">
        <SpotlightGrid />
      </Section>

      <Section index="07" name="Flip Card" hover="Card flips to reveal a note on the back">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <FlipCard item={items[0]} note="The first day, still a little in awe of the place." />
          <FlipCard item={items[1]} note="Hacking late, one hour before the demo." />
          <FlipCard item={items[2]} note="Meeting the community that started it all." />
        </div>
      </Section>

      <Section index="08" name="Stacked Deck" hover="Photos fan out like a hand of cards">
        <StackedDeck />
      </Section>

      <Section index="09" name="Iris" hover="Circle opens from center and reveals color">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <IrisCard key={item.src} item={item} />
          ))}
        </div>
      </Section>

      <Section index="10" name="Editorial" hover="Index number fills in, photo deepens, title lifts">
        <div className="grid grid-cols-1 gap-8 pt-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <EditorialCard key={item.src} item={item} i={i} />
          ))}
        </div>
      </Section>
    </main>
  );
}
