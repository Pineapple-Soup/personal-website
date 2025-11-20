import Link from 'next/link';
import project_data from '@/data/projects.json';

export default async function ProjectPage({ params }: { params: Promise<{ name: string }> }) {
  const name = (await params).name;
  const id = project_data.findIndex((project) => project.name === name);
  const title = project_data[id].title;
  const github = project_data[id].github;

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold"> {title} </h2>
      <p className="my-12"> This page is a work in progress... </p>
      <p>
        {' '}
        (but you can check out the project on my{' '}
        <Link href={github} className="underline">
          GitHub
        </Link>
        !){' '}
      </p>
    </div>
  );
}
