'use client';

import React from 'react';
import { Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const WA_URL = `https://wa.me/917077130651?text=${encodeURIComponent("Hello BharatsDev, I need to develop a project. Let's connect!")}`;

export function SocialGrid() {
    const buttonClass = "w-[90px] h-[90px] outline-none border-none bg-white shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px] transition-all duration-200 ease-in-out hover:cursor-pointer hover:scale-110 flex items-center justify-center";

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
                <a href="https://www.instagram.com/bharatsdev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={cn(buttonClass, "rounded-[90px_5px_5px_5px] hover:bg-[#cc39a4] group")}>
                    <Instagram className="w-[30px] h-[30px] text-[#cc39a4] group-hover:text-white transition-colors translate-x-3 translate-y-3" />
                </a>
                <a href="https://www.linkedin.com/company/109890130/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={cn(buttonClass, "rounded-[5px_90px_5px_5px] hover:bg-[#0077B5] group")}>
                    <Linkedin className="w-[30px] h-[30px] text-[#0077B5] group-hover:text-white transition-colors -translate-x-2 translate-y-3" />
                </a>
            </div>
            <div className="flex flex-row gap-2">
                <a href="https://www.youtube.com/@bharatsdev" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={cn(buttonClass, "rounded-[5px_5px_5px_90px] hover:bg-[#FF0000] group")}>
                    <Youtube className="w-[30px] h-[30px] text-[#FF0000] group-hover:text-white transition-colors translate-x-3 -translate-y-2" />
                </a>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={cn(buttonClass, "rounded-[5px_5px_90px_5px] hover:bg-[#25D366] group text-[#25D366]")}>
                    <MessageCircle className="w-[30px] h-[30px] group-hover:text-white transition-colors -translate-x-3 -translate-y-2" />
                </a>
            </div>
        </div>
    );
}
