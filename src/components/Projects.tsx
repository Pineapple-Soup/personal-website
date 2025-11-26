import Link from 'next/link';
import Carousel from '@/components/Carousel';

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col justify-center items-center gap-8 py-12 md:py-0"
    >
      <h2 className="mt-8 text-center"> PROJECTS </h2>
      <sub className="text-center px-4"> Click the cards to explore my work </sub>
      <Carousel />
      <button className="p-2 bg-secondary rounded-lg cursor-pointer text-lg drop-shadow-xl hover:bg-accent hover:scale-110 transition-all duration-300">
        <Link href="/projects"> View All Projects </Link>
      </button>
    </section>
  );
}
