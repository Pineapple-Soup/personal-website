import Link from 'next/link';
import Carousel from '@/components/Carousel';

export default function Projects() {
  return (
    <section id="projects" className="w-full h-screen flex flex-col justify-evenly items-center">
      <h2 className="mt-8"> PROJECTS </h2>
      <sub> Click the cards to explore my work </sub>
      <Carousel />
      <button className="p-2 bg-secondary rounded-lg cursor-pointer text-lg drop-shadow-xl hover:bg-accent hover:scale-110">
        <Link href="/projects"> View All Projects </Link>
      </button>
    </section>
  );
}
