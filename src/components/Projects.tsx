import Link from "next/link";
import Carousel from "@/components/Carousel";

export default function Projects() {
    return (
        <section id="projects" className="w-full h-screen flex flex-col justify-evenly items-center">
            <h2 className="mt-8"> PROJECTS </h2>
            <sub className=""> Click the cards to explore my work </sub>
            <Carousel />
            <button className="bg-secondary text-lg drop-shadow-xl hover:bg-accent hover:scale-110 rounded-lg p-2 my-2">
                <Link href="/projects"> View All Projects </Link>
            </button>
        </section>
    );
}