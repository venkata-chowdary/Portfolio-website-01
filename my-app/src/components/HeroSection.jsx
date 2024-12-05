"use client"
import { useState } from "react"



export function HeroSection() {
    return (
        <div className="ml-4 px-2 lg:px-6 lg:max-w-6xl lg:mx-auto flex flex-col mt-40 lg:mt-12">
            <h1 className="text-5xl lg:text-9xl font-bold tracking-tighter leading-none">Venkata Chowdary</h1>
            <h3 className="lg:ml-3 text-2xl lg:text-6xl mt-3 lg:mt-4 font-normal opacity-80 leading-tight w-3/5">I build tech, debug life, deploy dreams!</h3>
            <div className="w-fit lg:ml-3 my-3 lg:my-4 relative group cursor-pointer">

                <a href="/about" className="block text-xl lg:text-2xl font-medium tracking-wide mb-3 z-10 relative">Read more about me →</a>
                <div className="h-[4px] lg:h-[5px] z-0 group-hover:h-5/6 transistion-all duration-300 bg-[#de1d8d] absolute bottom-2 left-0 w-full">
                </div>
            </div>
        </div>

    )
}