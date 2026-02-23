'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function ChipLoader({ className }: { className?: string }) {
    return (
        <div className={cn("flex justify-center items-center w-full h-full min-h-[300px]", className)}>
            <div className="w-full max-w-[600px]">
                <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <defs>
                        <linearGradient id="chipGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2d2d2d"></stop>
                            <stop offset="100%" stopColor="#0f0f0f"></stop>
                        </linearGradient>
                        <linearGradient id="textGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#eeeeee"></stop>
                            <stop offset="100%" stopColor="#888888"></stop>
                        </linearGradient>
                        <linearGradient id="pinGradient" x1="1" y1="0" x2="0" y2="0">
                            <stop offset="0%" stopColor="#bbbbbb"></stop>
                            <stop offset="50%" stopColor="#888888"></stop>
                            <stop offset="100%" stopColor="#555555"></stop>
                        </linearGradient>
                    </defs>

                    <g id="traces">
                        <path d="M100 100 H200 V210 H326" className="chip-loader-trace-bg"></path>
                        <path d="M100 100 H200 V210 H326" className="chip-loader-trace-flow stroke-[#9900ff] text-[#9900ff]"></path>

                        <path d="M80 180 H180 V230 H326" className="chip-loader-trace-bg"></path>
                        <path d="M80 180 H180 V230 H326" className="chip-loader-trace-flow stroke-[#00ccff] text-[#00ccff]"></path>

                        <path d="M60 260 H150 V250 H326" className="chip-loader-trace-bg"></path>
                        <path d="M60 260 H150 V250 H326" className="chip-loader-trace-flow stroke-[#ffea00] text-[#ffea00]"></path>

                        <path d="M100 350 H200 V270 H326" className="chip-loader-trace-bg"></path>
                        <path d="M100 350 H200 V270 H326" className="chip-loader-trace-flow stroke-[#00ff15] text-[#00ff15]"></path>

                        <path d="M700 90 H560 V210 H474" className="chip-loader-trace-bg"></path>
                        <path d="M700 90 H560 V210 H474" className="chip-loader-trace-flow stroke-[#00ccff] text-[#00ccff]"></path>

                        <path d="M740 160 H580 V230 H474" className="chip-loader-trace-bg"></path>
                        <path d="M740 160 H580 V230 H474" className="chip-loader-trace-flow stroke-[#00ff15] text-[#00ff15]"></path>

                        <path d="M720 250 H590 V250 H474" className="chip-loader-trace-bg"></path>
                        <path d="M720 250 H590 V250 H474" className="chip-loader-trace-flow stroke-[#ff3300] text-[#ff3300]"></path>

                        <path d="M680 340 H570 V270 H474" className="chip-loader-trace-bg"></path>
                        <path d="M680 340 H570 V270 H474" className="chip-loader-trace-flow stroke-[#ffea00] text-[#ffea00]"></path>
                    </g>

                    <rect x="330" y="190" width="140" height="100" rx="20" ry="20" fill="url(#chipGradient)" stroke="#222" strokeWidth="3"></rect>

                    <g>
                        {[205, 225, 245, 265].map(y => (
                            <rect key={`L-${y}`} x="322" y={y} width="8" height="10" fill="url(#pinGradient)" rx="2"></rect>
                        ))}
                        {[205, 225, 245, 265].map(y => (
                            <rect key={`R-${y}`} x="470" y={y} width="8" height="10" fill="url(#pinGradient)" rx="2"></rect>
                        ))}
                    </g>

                    <text x="400" y="240" fontFamily="Arial, sans-serif" fontSize="22" fill="url(#textGradient)" textAnchor="middle" alignmentBaseline="middle">
                        Loading AI
                    </text>

                    {/* Solder Joints */}
                    {[
                        [100, 100], [80, 180], [60, 260], [100, 350],
                        [700, 90], [740, 160], [720, 250], [680, 340]
                    ].map(([cx, cy], i) => (
                        <circle key={i} cx={cx} cy={cy} r="5" fill="black"></circle>
                    ))}
                </svg>
            </div>
        </div>
    );
}
