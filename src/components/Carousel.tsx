"use client";

import Link from "next/link";
import React, { useState } from "react";
import Card, { CardProps } from "@/components/Card";
import project_data from "@/data/projects.json";

const getImage = async (image: string) => {
  const img = await import(`@/../public/assets/${image}.png`);
  return img.default;
};

const cards: CardProps[] = await Promise.all(
  project_data.map(async (project) => {
    const image = await getImage(project.name);
    return {
      title: project.title,
      description: project.description,
      status: project.status,
      image: image,
      stack: project.stack,
    };
  })
);

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(0);

  const handlePrevClick = (delay: number) => {
    if (isAnimating) return;
    setIsAnimating(-1);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cards.length - 1 : prevIndex - 1
      );
      setIsAnimating(0);
    }, delay);
  };

  const handleNextClick = (delay: number) => {
    if (isAnimating) return;
    setIsAnimating(1);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(0);
    }, delay);
  };

  const handleDotClick = (index: number, delay: number) => {
    if (index === currentIndex) return;
    const forwardDistance =
      (index - currentIndex + cards.length) % cards.length;
    const backwardDistance =
      (currentIndex - index + cards.length) % cards.length;
    const direction = forwardDistance <= backwardDistance ? 1 : -1;
    let steps = direction === 1 ? forwardDistance : backwardDistance;
    while (steps > 0) {
      if (direction === 1) {
        handleNextClick(delay);
      } else {
        handlePrevClick(delay);
      }
      steps--;
    }
  };

  return (
    <>
      <div className='carousel'>
        <div
          onClick={() => handlePrevClick(300)}
          className={`flex-1 opacity-50 rounded-3xl translate-x-1/4 translate-y-8 ${
            isAnimating === -1
              ? "transition-all ease-out duration-500 translate-x-full -translate-y-2 !opacity-100 z-20"
              : isAnimating === 1
              ? "transition-all ease-out duration-500 !opacity-0"
              : ""
          }`}>
          <Card
            {...cards[currentIndex === 0 ? cards.length - 1 : currentIndex - 1]}
          />
        </div>
        <div
          className={`flex-1 z-10 rounded-3xl ${
            isAnimating === -1
              ? "transition-all ease-out duration-500 translate-x-3/4 translate-y-8 opacity-50 -z-10"
              : isAnimating === 1
              ? "transition-all ease-out duration-500 -translate-x-3/4 translate-y-8 opacity-50 z-20"
              : ""
          }`}>
          <Link href={`/projects/${project_data[currentIndex].name}`}>
            <Card {...cards[currentIndex]} />
          </Link>
        </div>
        <div
          onClick={() => handleNextClick(300)}
          className={`flex-1 opacity-50 rounded-3xl -translate-x-1/4 translate-y-8 ${
            isAnimating === -1
              ? "transition-all ease-out duration-500 !opacity-0"
              : isAnimating === 1
              ? "transition-all ease-out duration-500 -translate-x-full -translate-y-2 !opacity-100 z-20"
              : ""
          }`}>
          <Card
            {...cards[currentIndex === cards.length - 1 ? 0 : currentIndex + 1]}
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        {/* Numbers */}
        {currentIndex + 1}/{cards.length}
        {/* Dots */}
        <ul className='flex justify-center'>
          {cards.map((_, index) => (
            <li
              key={index}
              onClick={() => handleDotClick(index, 100)}
              className={`w-2 h-2 m-2 rounded-full bg-secondary cursor-pointer ${
                index === currentIndex ? "!bg-accent scale-110" : ""
              }`}></li>
          ))}
        </ul>
      </div>
    </>
  );
}
