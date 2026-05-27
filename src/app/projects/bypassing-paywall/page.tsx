import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Exposing Critical Vulnerabilities in Manorama Media Platform: From Paywall Bypass to 20+ Premium Magazine",
  description: "Responsible Disclosure",
  openGraph: {
    title: "Exposing Critical Vulnerabilities in Manorama Media Platform: From Paywall Bypass to 20+ Premium Magazine",
    description: "Responsible Disclosure",
    images: [
      {
        url: "/OG_vul.png",
      }
    ],
  },
};

export default function BypassingPaywallPage() {
  return (
    <main className="mx-auto max-w-[692px] px-6 py-12 leading-relaxed sm:py-16">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-1100 hover:text-gray-1200 transition-colors">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>

      <h1 className="text-2xl font-medium text-gray-1200 mb-6 leading-tight">
        Exposing Critical Vulnerabilities in Manorama Media Platform: From Paywall Bypass to 20+ Premium Magazine
      </h1>

      <div className="mb-8 overflow-hidden rounded-xl bg-gray-100 border border-gray-300">
        <img
          src="/manorama.webp"
          alt="Manorama Vulnerability Demonstration"
          className="w-full h-auto object-contain rounded-xl"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-medium text-gray-1200">When Tinkering Goes Too Far:</h2>
        <h2 className="text-xl font-medium text-gray-1200 mb-4">Built a Custom Chrome Extension to Prove a Massive Media Paywall Was Broken</h2>
        <p className="text-gray-1200 leading-relaxed whitespace-pre-wrap">
          Okay, so all this time I was just some developer who never felt helpful for the family. You know how it is, if you work with computers, your family thinks you can do literally everything, like hacking into someone’s Instagram. Since I obviously can’t do any of that, I was basically just the tech person in the house who wasn't really "useful" in their eyes.
          <br /> <br />

          But this whole tinkering around changed things. It finally got me some validation around them, and honestly, it also helped a massive media organization get their security up.
          <br /> <br />

          <h2 className="text-xl font-medium text-gray-1200 mb-4">The Backstory</h2>
          Whenever I visited my aunt’s place, she’d always have a few of those popular women's magazines lying around, the ones with celebrity covers and lifestyle articles. Growing up, I used to just flip through them when I was bored. I honestly thought I was wasting my time back then, never thinking it would ever connect to anything I do now.
          <br /> <br />
          Cut to recently. My aunt really wanted to start reading those magazines again. They had stopped buying the physical copies a while back because, managing a mountain of paper is a chore. So she came up to me and asked, "Hey, can we take an online subscription for this?"
          <br /> <br />
          Now, since I'm a programmer, whenever I open any website, I have this habit. I can’t just browse normally. I have to inspect the page and play around with the front-end to see how they implemented things. Mostly I don't find anything because the code is all bundled and looks like gibberish. But I have this hobby where if a website has really cool images or assets, I love collecting them just for the sake of it. I literally call them "AdichMatiya" assets (stolen assets, though I never actually use them anywhere, I just like keeping them).
          <br /> <br />
          So, I was on their platform, inspecting elements and trying to grab some assets for my collection.
          <br /> <br />

          <h2 className="text-xl font-medium text-gray-1200 mb-4">Wait... This Shouldn't Be Happening</h2>
          While I was looking at how things were set up on the site, I noticed something with their JWT and authentication flow. I was just tweaking around with it, trying a few different things to see how it would respond.
          <br /> <br />
          I hit refresh and... boom. Something happened.
          <br /> <br />
          I looked at my screen and was like, "What? Me? No way. This is not possible. It must be a glitch."
          <br /> <br />
          So I tried it again on a different section just to be sure. Same thing. I was able to actually get through to 20+ premium content titles on their website. This media house actually has a massive platform with all those different premium magazines under them, everything from politics and farming to science digests and children's books. And because of this authentication issue, I could see all of it. I mean, it was unbelievable. This was a massive vulnerability.
          <br /> <br />


          <h2 className="text-xl font-medium text-gray-1200 mb-4">Building the Proof</h2>
          I knew the fundamentals of how these platforms work under the hood, so I knew exactly what I needed to do to demonstrate how serious this was. I needed to prove that someone could easily automate this and scrape their entire library.
          <br /> <br />
          First, I quickly built a custom Chrome extension to handle the logic right in the browser. Then, to actually pull the data, I used a Python script that would download the premium content pages automatically.
          <br /> <br />
          Once I had everything running smoothly, I recorded a quick video showing the whole process in action, the extension working, the script downloading the pages, and the premium content loading up perfectly.
          <br /> <br />
          <div className="flex justify-start">
            <a
              href="https://www.youtube.com/watch?v=3Xnf5V6NmL8"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-gray-1200 px-6 py-2.5 font-medium text-gray-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Watch the Extension Demo I sent them</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <br /> <br />
          <h2 className="text-xl font-medium text-gray-1200 mb-4">Hunting Down the Right People (Enter OSINT)</h2>
          Knowing this was a huge security gap, I had to report it. But this is a massive media house with a crazy number of employees. There was no point in sending an email to a generic support inbox because a lower-level staff member would probably just ignore it or delete it.
          <br /> <br />
          OSINT (Open Source Intelligence) was pretty new to me, but I used it to dig around and map out the organization. It helped me find the email addresses of the actual people at the top who could handle this, including the tech leads and the CEO.
          <br /> <br />
          I sent a detailed mail explaining what I found, attached the demonstration video showing the Chrome extension and Python script at work, and sent it to everyone on that list.
          <br /> <br />
          They caught on quickly, realized how serious it was, and the dev team patched the issue.
          <br /> <br />
          So yeah, that’s how a random afternoon of messing around ended up helping a lot. Honestly, it just felt good to finally use my coding skills for something tangible that people around me could actually understand. I went from being the person who "works in tech but gets blamed when the internet goes down" to actually making a difference out there. At least now I have a solid answer the next time my family asks what exactly it is that I do all day on my laptop.

        </p>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-lg font-medium text-gray-1200">Tech Stack</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-300 bg-gray-100 p-4">
            <h4 className="mb-2 font-medium text-gray-1100">Tech</h4>
            <p className="text-sm text-gray-1000 leading-relaxed">
              Chrome Extension (Manifest v3, content scripts, background workers, Chrome APIs, DOM interaction, CSP/CORS, Chrome DevTools, JavaScript/TypeScript)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
