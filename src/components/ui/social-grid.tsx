'use client';

import React from 'react';
import { Instagram, Twitter, Github, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SocialGrid() {
    const buttonClass = "w-[90px] h-[90px] outline-none border-none bg-white shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px] transition-all duration-200 ease-in-out hover:cursor-pointer hover:scale-110 flex items-center justify-center";

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
                <button className={cn(buttonClass, "rounded-[90px_5px_5px_5px] hover:bg-[#cc39a4] group")}>
                    <Instagram className="w-[30px] h-[30px] text-[#cc39a4] group-hover:text-white transition-colors translate-x-3 translate-y-3" />
                </button>
                <button className={cn(buttonClass, "rounded-[5px_90px_5px_5px] hover:bg-[#03A9F4] group")}>
                    <Twitter className="w-[30px] h-[30px] text-[#03A9F4] group-hover:text-white transition-colors -translate-x-2 translate-y-3" />
                </button>
            </div>
            <div className="flex flex-row gap-2">
                <button className={cn(buttonClass, "rounded-[5px_5px_5px_90px] hover:bg-black group")}>
                    <Github className="w-[30px] h-[30px] text-black group-hover:text-white transition-colors translate-x-3 -translate-y-2" />
                </button>
                <button className={cn(buttonClass, "rounded-[5px_5px_90px_5px] hover:bg-[#8c9eff] group text-[#8c9eff]")}>
                    <MessageSquare className="w-[30px] h-[30px] group-hover:text-white transition-colors -translate-x-3 -translate-y-2" />
                </button>
            </div>
        </div>
    );
}
