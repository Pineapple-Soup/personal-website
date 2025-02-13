import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function ProjectPage() {
  return (
    <main>
      <header className='navbar'>
        <ThemeToggle />
        <button className='mx-4'>
          <Link href='/'> Back </Link>
        </button>
      </header>
      <section className='w-full h-screen flex flex-col justify-center items-center'>
        <h2 className='text-4xl font-bold'> Projects </h2>
        <p className='my-12'> Work in progress... </p>
      </section>
    </main>
  );
}
