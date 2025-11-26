'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const animateMenuButton = {
    initial: false,
    animate: { rotate: isOpen ? 90 : 0 },
    whileTap: { scale: 0.95, transition: { duration: 0.25 } },
    transition: { duration: 0.5 },
  };

  const animateMenuItems = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -25 },
    transition: { duration: 0.5 },
  };

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <div className="sticky top-0 w-full flex justify-between py-4 px-8 text-2xl z-50 backdrop-blur-md bg-background/75">
      <div className="top-0">
        <ThemeToggle />
      </div>
      <ul className="hidden md:flex justify-between items-center group w-3/4 lg:w-1/2">
        {navItems.map((item, index) => (
          <li
            className="cursor-pointer transform hover:opacity-100! group-has-[:hover]:opacity-50 hover:scale-110 duration-200"
            key={index}
          >
            <Link href={`/#${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-col items-end z-50">
        <motion.button
          {...animateMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:cursor-pointer"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <FaXmark size={30} className="transition-all hover:scale-105" />
          ) : (
            <FaBars size={30} className="transition-all hover:scale-105" />
          )}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              {...animateMenuItems}
              className="flex flex-col items-end gap-y-4 rounded-b-lg p-4 origin-top-right"
              role="navigation"
              aria-label="Mobile navigation menu"
            >
              {navItems.map((item, index) => (
                <li
                  className="cursor-pointer transform hover:opacity-100! group-has-[:hover]:opacity-50 hover:scale-110 duration-200"
                  key={index}
                >
                  <Link href={`/#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
