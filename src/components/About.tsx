import React from "react";

export default function About() {
    return (
        <section className="w-full h-screen grid grid-cols-2">
            <div>
                {/* Placeholder for Images */}
            </div>
            <div className="flex flex-col justify-center">
                <h2>
                    ABOUT
                </h2>
                <p className="my-12">
                    Hi, I&apos;m Adithya Iyer. I&apos;m a student at UC Riverside double majoring in Computer Science and Neuroscience. 
                    I enjoy using technology to solve real-world problems. My passions include cybersecurity, machine learning, and connectomics. 
                    When I&apos;m not coding or reading papers, you can find me practicing piano or guitar.
                </p>
                <button className="ml-auto text-lg bg-secondary rounded-md px-4 py-2 hover:bg-accent hover:scale-110" style={{ boxShadow: "5px 5px 4px 0 rgba(0, 0, 0, 0.25)" }}>
                    Read More
                </button>
            </div>
        </section>
    );
}