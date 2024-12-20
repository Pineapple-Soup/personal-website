import React from "react";

export default function Hero() {
   return (
    <section className="w-full place-items-center h-screen grid grid-cols-2">
        <div className="text-left">
            <h1>
                Hello,
                <span className="text-8xl inline-block hover:animate-wave hover:rotate-3 cursor-pointer ml-12">👋</span>
                I&apos;m Adithya
            </h1>
            <sub className="leading-snug">
                I love building things, solving puzzles, and learning new skills
            </sub>
        </div>
        <div className="">
            {/* Placeholder for image */}
        </div>
    </section>
   );
}