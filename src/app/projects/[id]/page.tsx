import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import project_data from '@/data/projects.json';

export default async function ProjectPage({ params }: { params: Promise<{ id: number }> }) {
    const id = (await params).id;
    const title = project_data[id].title;

    return (
        <main>
            <header className="navbar">
                <ThemeToggle />
                <button className="mx-4">
                    <Link href="/"> Back </Link>
                </button>
            </header>
            <section className="w-full h-screen flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold"> {title} </h2>
                <p className="my-12"> This page is a work in progress... </p>
                <p> (but you can check out the project my github!) </p>
            </section>
        </main>
    );
  }