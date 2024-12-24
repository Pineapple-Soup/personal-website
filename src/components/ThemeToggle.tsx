'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return window.matchMedia('(prefers-color-scheme: dark)').matches ? (
        <BsSunFill className="cursor-pointer my-auto size-10 icon-transition" onClick={() => setTheme("light")} />
        ) : (
        <BsFillMoonStarsFill className="cursor-pointer my-auto size-10 icon-transition" onClick={() => setTheme("dark")} />
        );

    return (
        (theme === "dark" || (theme === "system" && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? (
            <BsSunFill className="cursor-pointer my-auto size-10 icon-transition" onClick={() => setTheme("light")} />
        ) : (
            <BsFillMoonStarsFill className="cursor-pointer my-auto size-10 icon-transition" onClick={() => setTheme("dark")} />
        )
    );
}