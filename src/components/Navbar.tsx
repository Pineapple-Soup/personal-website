'use client';

import React, { useState } from "react";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <header className="fixed w-3/4 flex my-2 justify-between">
            <button onClick={toggleDarkMode}>{darkMode ? "Light" : "Dark"} Mode</button>
            <ul className="flex justify-between group w-1/2">
                {navItems.map((item, index) => (
                    <li className="transform hover:!opacity-100 group-has-[:hover]:opacity-50 hover:scale-110 duration-200" key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </header>
    );
}