import Carousel from "@/components/Carousel";

export default function Projects() {
    return (
        <section id="projects" className="w-full h-screen flex flex-col items-center">
            <h2 className="my-12"> PROJECTS </h2>
            <sub className="mb-20"> Click the cards to explore my work </sub>
            <Carousel />
        </section>
    );
}