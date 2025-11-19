'use client';

import { useTheme } from 'next-themes';
import { useState } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted] = useState(() => typeof window !== 'undefined');

  if (!mounted) return <BsSunFill className="cursor-pointer my-auto size-10 icon-transition" />;

  return theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? (
    <BsSunFill
      className="cursor-pointer my-auto size-10 icon-transition"
      onClick={() => setTheme('light')}
    />
  ) : (
    <BsFillMoonStarsFill
      className="cursor-pointer my-auto size-10 icon-transition"
      onClick={() => setTheme('dark')}
    />
  );
}
