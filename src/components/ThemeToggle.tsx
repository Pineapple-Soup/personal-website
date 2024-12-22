'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    return (
        theme === "dark" ? (
            <BsSunFill className="cursor-pointer my-auto size-10 icon-transition" onClick={() => setTheme("light")} />
        ) : (
            <BsFillMoonStarsFill className="cursor-pointer my-auto size-10 icon-transition" onClick={() => setTheme("dark")} />
        )
    );
}