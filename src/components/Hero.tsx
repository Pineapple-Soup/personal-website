import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDocumentScanner, MdEmail } from "react-icons/md";

export default function Hero() {
   return (
    <section id="home" className="w-full h-screen grid grid-cols-2">
        <div className="flex flex-col grow justify-center">
            <h1>
                Hello!
                <span className="text-8xl inline-block hover:animate-wave cursor-pointer ml-12">👋</span>
                <br/>
                I&apos;m Adithya
            </h1>
            <sub className="leading-normal">
                I love building things, solving puzzles, and learning new skills
            </sub>
            <div className="flex mx-auto my-12 rounded-full drop-shadow-xl">
                <a href="mailto:adithya.iyer@email.ucr.edu" target="_blank" rel="noreferrer noopener">
                    <MdEmail className="homeButton rounded-l-full"/>
                </a>
                <a href="https://drive.google.com/file/d/1cpX2s8RyJJZQsQ9Vy0ExwVyMRROp7L15/view?usp=sharing" target="_blank" rel="noreferrer noopener">
                    <MdDocumentScanner className="homeButton -mx-0.5"/>
                </a>
                <a href="https://www.linkedin.com/in/adithya-b-iyer" target="_blank" rel="noreferrer noopener">
                    <FaLinkedin className="homeButton -mx-0.5"/>
                </a>
                <a href="https://www.github.com/Pineapple-Soup" target="_blank" rel="noreferrer noopener">
                    <FaGithub className="homeButton rounded-r-full"/>
                </a>
            </div>
        </div>
        <div className="">
            {/* Placeholder for image */}
        </div>
    </section>
   );
}