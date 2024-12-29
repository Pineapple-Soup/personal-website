import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
    return (
        <header className="fixed w-3/4 flex py-6 justify-between z-50">
            <ThemeToggle />
            <ul className="flex justify-between align-center group w-1/2">
                {navItems.map((item, index) => (
                    <li className="cursor-pointer transform hover:!opacity-100 group-has-[:hover]:opacity-50 hover:scale-110 duration-200" key={index}>
                        <Link href={`#${item.toLowerCase()}`}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    );
}