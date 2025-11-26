'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ComputerScienceIcon, NeuroscienceIcon, NetworkIcon, MusicIcon } from './Icons';

export default function About() {
  const [active, setActive] = useState('');

  const handleHover = (id: string) => setActive(id);
  const handleLeave = () => setActive('');

  const getIconClass = (id: string) =>
    `fill-current transition-colors duration-300 ${active === id ? 'text-accent' : 'text-foreground'}`;

  const getTextClass = (id: string) =>
    `cursor-pointer transition-colors duration-300 ${active === id ? 'text-accent' : ''}`;

  return (
    <div
      id="about"
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 md:py-0 md:px-12 lg:px-0"
    >
      <div className="order-2 md:order-1 h-[40vh] md:h-screen grid grid-cols-2 grid-rows-2 md:grid-cols-5 md:grid-rows-6 gap-4 md:gap-0 p-4 md:p-0 items-center justify-items-center">
        <div
          className="md:col-span-2 md:col-start-2 md:row-start-2 w-24 h-24 md:w-full md:h-full"
          onMouseEnter={() => handleHover('cs')}
          onMouseLeave={handleLeave}
          onClick={() => setActive(active === 'cs' ? '' : 'cs')}
        >
          <ComputerScienceIcon className={getIconClass('cs')} />
        </div>
        <div
          className="md:col-span-2 md:col-start-4 md:row-start-3 w-24 h-24 md:w-full md:h-full"
          onMouseEnter={() => handleHover('ns')}
          onMouseLeave={handleLeave}
          onClick={() => setActive(active === 'ns' ? '' : 'ns')}
        >
          <NeuroscienceIcon className={getIconClass('ns')} />
        </div>
        <div
          className="md:col-span-2 md:col-start-1 md:row-start-4 w-24 h-24 md:w-full md:h-full"
          onMouseEnter={() => handleHover('nw')}
          onMouseLeave={handleLeave}
          onClick={() => setActive(active === 'nw' ? '' : 'nw')}
        >
          <NetworkIcon className={getIconClass('nw')} />
        </div>
        <div
          className="md:col-span-2 md:col-start-3 md:row-start-5 w-24 h-24 md:w-full md:h-full"
          onMouseEnter={() => handleHover('m')}
          onMouseLeave={handleLeave}
          onClick={() => setActive(active === 'm' ? '' : 'm')}
        >
          <MusicIcon className={getIconClass('m')} />
        </div>
      </div>

      <div className="order-1 md:order-2 flex flex-col justify-center px-8 md:px-0">
        <h2 className="text-center md:text-left mb-8 md:mb-0">ABOUT</h2>
        <p className="my-8 md:my-12 text-center md:text-left">
          Hi, I&apos;m Adithya Iyer. I&apos;m a student at UC Riverside double majoring in{' '}
          <span
            className={getTextClass('cs')}
            onMouseEnter={() => handleHover('cs')}
            onMouseLeave={handleLeave}
            onClick={() => setActive(active === 'cs' ? '' : 'cs')}
          >
            Computer Science
          </span>{' '}
          and{' '}
          <span
            className={getTextClass('ns')}
            onMouseEnter={() => handleHover('ns')}
            onMouseLeave={handleLeave}
            onClick={() => setActive(active === 'ns' ? '' : 'ns')}
          >
            Neuroscience
          </span>
          . I enjoy using technology to solve real-world problems. My passions include{' '}
          <span
            className={getTextClass('nw')}
            onMouseEnter={() => handleHover('nw')}
            onMouseLeave={handleLeave}
            onClick={() => setActive(active === 'nw' ? '' : 'nw')}
          >
            cybersecurity, machine learning, and connectomics
          </span>
          . When I&apos;m not coding or reading papers, you can find me practicing{' '}
          <span
            className={getTextClass('m')}
            onMouseEnter={() => handleHover('m')}
            onMouseLeave={handleLeave}
            onClick={() => setActive(active === 'm' ? '' : 'm')}
          >
            piano or guitar
          </span>
          .
        </p>
        <button className="mx-auto md:ml-auto md:mr-0 text-lg bg-secondary rounded-md px-4 py-2 drop-shadow-xl hover:bg-accent hover:scale-110 transition-all duration-300">
          <Link href="/bio"> Read More </Link>
        </button>
      </div>
    </div>
  );
}
