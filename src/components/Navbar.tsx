'use client';

import React, { useState } from "react";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <header className="flex py-2 justify-between">
            <button onClick={toggleDarkMode}>{darkMode ? "Light" : "Dark"} Mode</button>
            <ul className="flex w-1/2 justify-between">
                {navItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </header>
    );
}