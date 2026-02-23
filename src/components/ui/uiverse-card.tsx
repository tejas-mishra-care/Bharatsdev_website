'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, MessageCircle, ChevronDown } from 'lucide-react';

export function UiverseCard() {
    return (
        <div className="relative w-[290px] h-[300px] perspective-1000 group">
            <motion.div
                className="h-full border-[50px] border-transparent rounded-[50px] bg-gradient-to-br from-[#00ffd6] to-[#08e260] transition-all duration-500 ease-in-out preserve-3d shadow-[rgba(5,71,17,0)_40px_50px_25px_-40px,rgba(5,71,17,0.2)_0px_25px_25px_-5px] group-hover:rotate-x-[30deg] group-hover:rotate-y-[30deg] group-hover:shadow-[rgba(5,71,17,0.3)_30px_50px_25px_-40px,rgba(5,71,17,0.1)_0px_25px_30px_0px]"
                style={{ borderImageSource: 'inherit' }} // Fix for the border-radius issue in the snippet logic
            >
                <div className="absolute inset-2 rounded-[55px] rounded-tr-[100%] bg-gradient-to-b from-white/35 to-white/80 translate-z-[25px] border-l border-b border-white transition-all duration-500 ease-in-out preserve-3d" />

                <div className="p-[100px_60px_0px_30px] translate-z-[26px]">
                    <span className="block color-[#00894d] font-black text-xl">UIVERSE (3D UI)</span>
                    <span className="block text-[#00894d]/75 text-[15px] mt-5">Create, share, and use beautiful custom elements made with CSS</span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 p-[10px_12px] flex items-center justify-between translate-z-[26px] preserve-3d">
                    <div className="flex gap-[10px] preserve-3d">
                        <button className="w-8 h-8 p-1 bg-white rounded-full grid place-content-center shadow-[rgba(5,71,17,0.5)_0px_7px_5px_-5px] hover:bg-black group/btn1 transition-all duration-200 delay-[0.4s] group-hover:translate-z-[50px] group-hover:shadow-[rgba(5,71,17,0.2)_-5px_20px_10px_0px]">
                            <Instagram className="w-4 text-[#00894d] group-hover/btn1:text-white" />
                        </button>
                        <button className="w-8 h-8 p-1 bg-white rounded-full grid place-content-center shadow-[rgba(5,71,17,0.5)_0px_7px_5px_-5px] hover:bg-black group/btn2 transition-all duration-200 delay-[0.6s] group-hover:translate-z-[50px] group-hover:shadow-[rgba(5,71,17,0.2)_-5px_20px_10px_0px]">
                            <Twitter className="w-4 text-[#00894d] group-hover/btn2:text-white" />
                        </button>
                        <button className="w-8 h-8 p-1 bg-white rounded-full grid place-content-center shadow-[rgba(5,71,17,0.5)_0px_7px_5px_-5px] hover:bg-black group/btn3 transition-all duration-200 delay-[0.8s] group-hover:translate-z-[50px] group-hover:shadow-[rgba(5,71,17,0.2)_-5px_20px_10px_0px]">
                            <MessageCircle className="w-4 text-[#00894d] group-hover/btn3:text-white" />
                        </button>
                    </div>
                    <div className="flex items-center w-[40%] justify-end transition-all duration-200 ease-in-out hover:translate-z-[10px]">
                        <button className="bg-none border-none text-[#00c37b] font-black text-xs">View more</button>
                        <ChevronDown className="w-4 text-[#00c37b] stroke-[3px]" />
                    </div>
                </div>

                <div className="absolute right-0 top-0 preserve-3d pointer-events-none">
                    <div className="block absolute aspect-square rounded-full backdrop-blur-[5px] bg-[#00f9cb]/20 transition-all duration-500 ease-in-out shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] w-[170px] translate-z-[20px] top-2 right-2" />
                    <div className="block absolute aspect-square rounded-full backdrop-blur-[1px] bg-[#00f9cb]/20 transition-all duration-500 ease-in-out delay-[0.4s] shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] w-[140px] translate-z-[40px] group-hover:translate-z-[60px] top-[10px] right-[10px]" />
                    <div className="block absolute aspect-square rounded-full backdrop-blur-[5px] bg-[#00f9cb]/20 transition-all duration-500 ease-in-out delay-[0.8s] shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] w-[110px] translate-z-[60px] group-hover:translate-z-[80px] top-[17px] right-[17px]" />
                    <div className="block absolute aspect-square rounded-full backdrop-blur-[5px] bg-[#00f9cb]/20 transition-all duration-500 ease-in-out delay-[1.2s] shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] w-[80px] translate-z-[80px] group-hover:translate-z-[100px] top-[23px] right-[23px]" />
                    <div className="block absolute aspect-square rounded-full backdrop-blur-[5px] bg-[#00f9cb]/20 transition-all duration-500 ease-in-out delay-[1.6s] shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] w-[50px] translate-z-[100px] group-hover:translate-z-[120px] top-[30px] right-[30px] grid place-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="w-5 fill-white">
                            <path id="Path_6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)"></path>
                            <path id="Path_7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
                            <path id="Path_8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
                        </svg>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
