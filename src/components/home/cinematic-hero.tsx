"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

// Japanese aesthetic labels and micrographics from user prompt
const MICROGRAPHICS = [
  "SOKAQOLA", "EXON", "FRESH CHUNKEY", "KIMBRA", "THE CAPUNG", 
  "BAGINK", "RUSHEL", "GINTAR", "ANGELOS", "CASKO", "SOFGLAT"
];

export function CinematicHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden flex flex-col font-sans bg-[hsl(var(--background))]",
        instrumentSerif.variable
      )}
      style={{
        "--background": "201 100% 13%",
        "--foreground": "0 0% 100%",
        "--muted-foreground": "240 4% 66%",
        "--primary": "0 0% 100%",
        "--primary-foreground": "0 0% 4%",
        "--secondary": "0 0% 10%",
        "--muted": "0 0% 10%",
        "--accent": "0 0% 10%",
        "--border": "0 0% 18%",
        "--input": "0 0% 18%",
      } as React.CSSProperties}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none mix-blend-luminosity opacity-80"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Decorative Micrographics - Japanese Poster Aesthetic */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-overlay opacity-30">
        <div className="absolute top-1/4 left-8 text-[0.65rem] tracking-[0.2em] font-mono rotate-90 origin-left text-white">
          {MICROGRAPHICS[0]} // {MICROGRAPHICS[1]}
        </div>
        <div className="absolute bottom-1/4 right-8 text-[0.65rem] tracking-[0.2em] font-mono -rotate-90 origin-right text-white">
          {MICROGRAPHICS[2]} // 響
        </div>
        <div className="absolute top-1/2 right-12 text-[0.6rem] tracking-widest font-mono text-white opacity-50 flex flex-col gap-1">
          <span>{MICROGRAPHICS[3]}</span>
          <span>{MICROGRAPHICS[4]}</span>
          <span>{MICROGRAPHICS[5]}</span>
          <span>静寂</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="text-3xl tracking-tight text-foreground font-instrument">
          Velorah<sup className="text-xs">®</sup>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm text-foreground transition-colors hover:text-foreground">Home</Link>
          <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Studio</Link>
          <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About</Link>
          <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Journal</Link>
          <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Reach Us</Link>
        </div>

        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-300">
          Begin Journey
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col flex-1 items-center justify-center text-center px-6 pt-32 pb-40 py-[90px]">
        {mounted && (
          <>
            <h1 className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground font-instrument">
              Where <em className="not-italic text-muted-foreground">dreams</em> rise{" "}
              <em className="not-italic text-muted-foreground">through the silence.</em>
            </h1>
            
            <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
              We&apos;re designing tools for deep thinkers, bold creators, and quiet rebels. 
              Amid the chaos, we build digital spaces for sharp focus and inspired work.
            </p>

            <button className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] cursor-pointer transition-transform duration-300">
              Begin Journey
            </button>
          </>
        )}
      </div>

      {/* Bottom Micrographics */}
      <div className="relative z-10 w-full border-t border-white/10 p-4 flex justify-between items-center text-[10px] uppercase tracking-widest text-muted-foreground max-w-7xl mx-auto">
        <span>{MICROGRAPHICS.slice(6, 9).join(" • ")}</span>
        <span className="hidden md:inline-block">JAPANESE POSTER STYLE // CINEMATIC UI</span>
        <span>{MICROGRAPHICS.slice(9, 11).join(" • ")}</span>
      </div>
    </div>
  );
}
