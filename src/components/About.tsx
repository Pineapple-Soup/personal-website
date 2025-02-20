"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ComputerScienceIcon,
  NeuroscienceIcon,
  NetworkIcon,
  MusicIcon,
} from "./Icons";

export default function About() {
  const [hover, setHover] = useState("");

  return (
    <section id='about' className='w-full h-screen grid grid-cols-2 group'>
      <div className='h-screen grid grid-cols-5 grid-rows-6 gap-4 mx-4'>
        <div
          className='col-span-2 col-start-2 row-start-2'
          onMouseOver={() => setHover("cs")}
          onMouseOut={() => setHover("")}>
          <ComputerScienceIcon
            className={`fill-current ${hover == "cs" ? "text-accent" : ""}`}
          />
        </div>
        <div
          className='col-span-2 col-start-4 row-start-3'
          onMouseOver={() => setHover("ns")}
          onMouseOut={() => setHover("")}>
          <NeuroscienceIcon
            className={`fill-current ${hover == "ns" ? "text-accent" : ""}`}
          />
        </div>
        <div
          className='col-span-2 col-start-1 row-start-4'
          onMouseOver={() => setHover("nw")}
          onMouseOut={() => setHover("")}>
          <NetworkIcon
            className={`fill-current ${hover == "nw" ? "text-accent" : ""}`}
          />
        </div>
        <div
          className='col-span-2 col-start-3 row-start-5'
          onMouseOver={() => setHover("m")}
          onMouseOut={() => setHover("")}>
          <MusicIcon
            className={`fill-current ${hover == "m" ? "text-accent" : ""}`}
          />
        </div>
      </div>
      <div className='h-screen flex flex-col justify-center'>
        <h2>ABOUT</h2>
        <p className='my-12'>
          Hi, I&apos;m Adithya Iyer. I&apos;m a student at UC Riverside double
          majoring in{" "}
          <span
            className={hover == "cs" ? "text-accent" : ""}
            onMouseOver={() => setHover("cs")}
            onMouseOut={() => setHover("")}>
            Computer Science
          </span>{" "}
          and{" "}
          <span
            className={hover == "ns" ? "text-accent" : ""}
            onMouseOver={() => setHover("ns")}
            onMouseOut={() => setHover("")}>
            Neuroscience
          </span>
          . I enjoy using technology to solve real-world problems. My passions
          include{" "}
          <span
            className={hover == "nw" ? "text-accent" : ""}
            onMouseOver={() => setHover("nw")}
            onMouseOut={() => setHover("")}>
            cybersecurity, machine learning, and connectomics
          </span>
          . When I&apos;m not coding or reading papers, you can find me
          practicing{" "}
          <span
            className={hover == "m" ? "text-accent" : ""}
            onMouseOver={() => setHover("m")}
            onMouseOut={() => setHover("")}>
            piano or guitar
          </span>
          .
        </p>
        <button className='ml-auto text-lg bg-secondary rounded-md px-4 py-2 drop-shadow-xl hover:bg-accent hover:scale-110'>
          <Link href='/bio'> Read More </Link>
        </button>
      </div>
    </section>
  );
}
