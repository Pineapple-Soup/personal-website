import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDocumentScanner, MdEmail } from "react-icons/md";

export default function Hero() {
   return (
    <section className="w-full h-screen grid grid-cols-2">
        <div className="flex flex-col grow justify-center">
            <h1>
                Hello!
                <span className="text-8xl inline-block hover:animate-wave cursor-pointer ml-12">👋</span>
                I&apos;m Adithya
            </h1>
            <sub className="leading-normal">
                I love building things, solving puzzles, and learning new skills
            </sub>
            <div className="flex mx-auto my-12 rounded-full" style={{ boxShadow: "-10px 10px 4px 0 rgba(0, 0, 0, 0.25)" }}>
                <MdEmail className="homeButton rounded-l-full"/>
                <MdDocumentScanner className="homeButton -mx-0.5"/>
                <FaLinkedin className="homeButton -mx-0.5"/>
                <FaGithub className="homeButton rounded-r-full"/>
            </div>
        </div>
        <div className="">
            {/* Placeholder for image */}
        </div>
    </section>
   );
}