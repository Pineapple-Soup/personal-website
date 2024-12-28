import Carousel from "@/components/Carousel";
import { CardProps, ProjectStatus } from "@/components/Card";
import interplanetary from "../../public/assets/interplanetary.png";
import scicaml from "../../public/assets/scicaml.png";
import sudoku from "../../public/assets/sudoku.png";
import website from "../../public/assets/website.png";
import autochemlab from "../../public/assets/autochemlab.png";

export default function Projects() {
    
    const cards: readonly CardProps[] = [
        {
            title: "InteR'Planetary",
            description: "Webapp to customize and test exoplanet habitability",
            status: "Completed" as ProjectStatus,
            image: interplanetary,
            stack: ["React", "Three.js", "Python", "Flask"],
        },
        {
            title: "SciCaml",
            description: "An OCaml Machine Learning Library",
            status: "In Progress" as ProjectStatus,
            image: scicaml,
            stack: ["OCaml", "Dune"],
        },
        {
            title: "Sudoku Solver",
            description: "Interative Sudoku Solver with CLI and GUI options",
            status: "Completed" as ProjectStatus,
            image: sudoku,
            stack: ["Python", "Tkinter"],
        },
        {
            title: "Personal Website",
            description: "The website you're on right now!",
            status: "In Progress" as ProjectStatus,
            image: website,
            stack: ["React", "Next.js", "TailwindCSS"],
        },
        {
            title: "AutoChemLab",
            description: "A tool to automate Organic Chemistry Pre-Lab Assignments",
            status: "Completed" as ProjectStatus,
            image: autochemlab,
            stack: ["Python"],
        },
    ];

    return (
        <section id="projects" className="w-full h-screen flex flex-col items-center">
            <h2 className="my-12"> PROJECTS </h2>
            <sub className="mb-20"> Click the cards to explore my work </sub>
            <Carousel cards={cards} />
        </section>
    );
}