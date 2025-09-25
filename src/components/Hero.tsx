"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const fullText = "conçoit et développe des applications modernes, performantes et scalables.";
    let index = 0;
    let direction: 1 | -1 = 1;
    const intervalId = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index += direction;
      if (index > fullText.length + 8) {
        direction = -1;
      }
      if (index <= 0) {
        direction = 1;
      }
    }, 36);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="container mx-auto px-4 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div ref={containerRef} className={`pl-14 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} transition-all duration-700`}>
        <p className="text-sm text-zinc-400 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">Bienvenue sur mon portfolio —</p>
        <h1 className="text-[44px] leading-[1.1] sm:text-[64px] lg:text-[72px] font-retina tracking-tight">
          Sacha Nahmani
        </h1>
        <p className="mt-3 text-[20px] sm:text-[22px] text-indigo-500 font-medium">
          <span>{typedText}</span>
          <span className="ml-1 text-indigo-300 animate-pulse" aria-hidden="true">|</span>
        </p>

        <p className="mt-2 text-sm text-zinc-400">Passionné par le web et les technologies modernes.</p>

        <div className="mt-10 text-sm text-zinc-400 space-y-3 pr-2">
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="https://github.com/Sacha200"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-indigo-200/90 hover:text-white transition-colors bg-gradient-to-br from-indigo-900/40 to-violet-900/30 hover:from-indigo-700/50 hover:to-violet-700/40 shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,.35)]"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
              <span>Ouvrir GitHub</span>
            </a>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText("git clone https://github.com/Sacha200/portfolio-sacha.git");
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 1500);
              }}
              className="relative inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-indigo-200/90 hover:text-white transition-colors bg-gradient-to-br from-indigo-900/40 to-violet-900/30 hover:from-indigo-700/50 hover:to-violet-700/40 shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,.35)]"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="font-mono text-xs bg-foreground/5 px-2 py-0.5 rounded">{isCopied ? "Copié!" : "Copier"}</span>
              <span className="font-mono text-xs hidden sm:inline">git clone https://github.com/Sacha200/portfolio-sacha.git</span>
            </button>
          </div>

          <div className="font-mono text-[13px] text-zinc-400">
            <span className="text-zinc-500">$</span>
            <span className="ml-2 align-middle">
              <span className="after:content-['|'] after:ml-1 after:inline-block after:animate-pulse after:text-zinc-200"> npx create-portfolio</span>
            </span>
          </div>

          <div className="pt-2">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md hover:shadow-[0_0_30px_rgba(99,102,241,.45)] transition-all"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>

    
    </section>
  );
}


