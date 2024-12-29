import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function BioPage() {
    return (
        <main>
            <header className="fixed w-3/4 my-2 flex justify-between items-center">
                <ThemeToggle />
                <button className="mx-4"> 
                    <Link href="/"> Back </Link>
                </button>
            </header>
            <section className="w-full h-screen flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold"> About Me </h2>
                <p className="my-12"> Work in progress... </p>
            </section>
        </main>
    );
}