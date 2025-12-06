"use client";

import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
            setTimeout(() => setStatus("idle"), 3000);
        }, 1000);
    };

    return (
        <section className="mt-16 w-full sm:mt-32">
            <div className="rounded-xl overflow-hidden border border-gray-300 hover:border-gray-400 transition-colors duration-200">
                <div className="h-[160px] w-full border-gray-300 border-b bg-gray-100">
                    <div className="relative flex h-full w-full items-center justify-center gap-2">
                        <div className="absolute top-1/2 left-1/2 flex h-full translate-x-[-50%] translate-y-[-50%] gap-32">
                            <span className="h-full border-gray-300 border-l"></span>
                            <span className="h-full border-gray-300 border-l"></span>
                        </div>
                        <div className="absolute top-1/2 left-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col gap-24">
                            <span className="w-full border-gray-300 border-t"></span>
                            <span className="w-full border-gray-300 border-b"></span>
                        </div>
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl shadow-custom border border-gray-300 bg-gray-200">
                            <svg
                                aria-label="Mail icon"
                                className="size-8 shrink-0 fill-gray-1100"
                                fill="none"
                                height="24"
                                role="graphics-symbol"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2.12015 6.20855C2.07321 6.40572 2.04691 6.60508 2.03057 6.80497C1.99997 7.17953 1.99998 7.63426 2 8.16138V15.8385C1.99998 16.3657 1.99997 16.8205 2.03057 17.195C2.06287 17.5904 2.13419 17.9836 2.32698 18.362C2.6146 18.9265 3.07355 19.3854 3.63803 19.673C4.01641 19.8658 4.40963 19.9371 4.80498 19.9694C5.17951 20 5.63422 20 6.16129 20H17.8385C18.3656 20 18.8205 20 19.195 19.9694C19.5904 19.9371 19.9836 19.8658 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C21.8658 17.9836 21.9371 17.5904 21.9694 17.195C22 16.8205 22 16.3657 22 15.8386V8.16144C22 7.6343 22 7.17954 21.9694 6.80497C21.9531 6.60507 21.9268 6.40572 21.8799 6.20855L13.8997 12.7378C12.7946 13.6419 11.2054 13.6419 10.1003 12.7378L2.12015 6.20855Z"></path>
                                <path d="M20.7406 4.55656C20.6207 4.47119 20.4943 4.39438 20.362 4.32698C19.9836 4.13419 19.5904 4.06287 19.195 4.03057C18.8205 3.99997 18.3657 3.99998 17.8386 4H6.16146C5.63434 3.99998 5.17953 3.99997 4.80498 4.03057C4.40963 4.06287 4.01641 4.13419 3.63803 4.32698C3.50575 4.39438 3.37927 4.47119 3.25943 4.55656L11.3668 11.1898C11.7351 11.4912 12.2649 11.4912 12.6332 11.1898L20.7406 4.55656Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex w-full shrink-0 flex-col items-start justify-center p-5">
                    <h2 className="font-medium text-gray-1200">Newsletter</h2>
                    <p className="mt-0.5 text-gray-1100">
                        I share stuff that I'm working on, new posts and resources here.
                    </p>
                    <form className="mt-3 flex w-full flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
                        <label className="sr-only" htmlFor="email">
                            Email address
                        </label>
                        <input
                            autoComplete="email"
                            className="h-10 shrink-0 grow rounded-lg border bg-gray-background px-4 text-gray-1200 outline-none placeholder:text-gray-800 border-gray-400 focus:border-gray-800 transition-colors duration-200 ease-out"
                            id="email"
                            inputMode="email"
                            placeholder="your@email.com"
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === "loading"}
                        />
                        <button
                            className="relative inline-flex h-10 w-full shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-lg px-4 font-medium sm:w-[120px] bg-gray-1200 text-gray-100 disabled:cursor-not-allowed disabled:opacity-60 transition-colors duration-200 ease-out select-none"
                            type="submit"
                            disabled={status === "loading"}
                        >
                            <span style={{ willChange: "transform", transform: "none" }}>
                                {status === "loading" ? "..." : status === "success" ? "✓ Done" : "Subscribe"}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
