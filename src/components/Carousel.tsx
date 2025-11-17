"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import Card, { CardProps } from "@/components/Card";
import project_data from "@/data/projects.json";

const cards: CardProps[] = project_data.map((project) => ({
  title: project.title,
  description: project.description,
  status: project.status,
  image: `/assets/${project.name}.png`,
  stack: project.stack,
}));

const slotFor = (i: number, distX = 0, distY = 0) => {
  if (i === -2)
    return {
      x: "200%",
      y: distY,
      scale: 0.75,
      opacity: 0,
      zIndex: 0,
    };
  if (i === -1)
    return {
      x: -distX,
      y: distY,
      scale: 0.75,
      opacity: 0.75,
      zIndex: 10,
    };
  if (i === 1)
    return {
      x: distX,
      y: distY,
      scale: 0.75,
      opacity: 0.75,
      zIndex: 10,
    };
  if (i === 2)
    return {
      x: "-200%",
      y: distY,
      scale: 0.75,
      opacity: 0,
      zIndex: 0,
    };
  return { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 20 };
};

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  const defaultTransition = useMemo(
    () =>
      prefersReducedMotion
        ? { duration: 0.1 }
        : { duration: 0.6, easing: [0.22, 1, 0.36, 1] },
    [prefersReducedMotion]
  );

  const total = cards.length;

  const prevPrevIndex = (currentIndex - 2 + total) % total;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;
  const nextNextIndex = (currentIndex + 2) % total;

  const prevPrevControls = useAnimation();
  const prevControls = useAnimation();
  const centerControls = useAnimation();
  const nextControls = useAnimation();
  const nextNextControls = useAnimation();

  const handleNext = useCallback(async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const prom = Promise.all([
      prevControls.start({
        x: "100%",
        scale: 0.75,
        opacity: 0.5,
        zIndex: 0,
        transition: defaultTransition,
      }),
      centerControls.start({
        x: "-100%",
        y: 0,
        scale: 0.75,
        opacity: 0.75,
        transition: defaultTransition,
      }),
      nextControls.start({
        x: "-100%",
        y: 0,
        scale: 1,
        opacity: 1,
        transition: defaultTransition,
      }),
      nextNextControls.start({
        x: "-100%",
        y: 0,
        opacity: 0.75,
        transition: defaultTransition,
      }),
    ]);

    await prom;

    setCurrentIndex((i) => (i + 1) % total);

    await Promise.all([
      prevControls.set(slotFor(-1)),
      centerControls.set(slotFor(0)),
      nextControls.set(slotFor(1)),
      nextNextControls.set(slotFor(2)),
    ]);

    setIsAnimating(false);
  }, [
    isAnimating,
    total,
    prevControls,
    centerControls,
    nextControls,
    nextNextControls,
    defaultTransition,
  ]);

  const handlePrev = useCallback(async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const prom = Promise.all([
      prevPrevControls.start({
        x: "100%",
        y: 0,
        opacity: 0.75,
        transition: defaultTransition,
      }),
      prevControls.start({
        x: "100%",
        y: 0,
        scale: 1,
        opacity: 1,
        transition: defaultTransition,
      }),
      centerControls.start({
        x: "100%",
        y: 0,
        scale: 0.75,
        opacity: 0.75,
        transition: defaultTransition,
      }),
      nextControls.start({
        x: "-100%",
        scale: 0.75,
        opacity: 0.5,
        zIndex: 0,
        transition: defaultTransition,
      }),
    ]);

    await prom;

    setCurrentIndex((i) => (i - 1 + total) % total);

    await Promise.all([
      prevPrevControls.set(slotFor(-2)),
      prevControls.set(slotFor(-1)),
      centerControls.set(slotFor(0)),
      nextControls.set(slotFor(1)),
    ]);

    setIsAnimating(false);
  }, [
    isAnimating,
    total,
    prevPrevControls,
    prevControls,
    centerControls,
    nextControls,
    defaultTransition,
  ]);

  const handleDotClick = useCallback(
    async (index: number) => {
      if (index === currentIndex || isAnimating) return;

      const forwardSteps = (index - currentIndex + total) % total;
      const backwardSteps = (currentIndex - index + total) % total;
      const forward = forwardSteps <= backwardSteps;
      const steps = forward ? forwardSteps : backwardSteps;

      for (let i = 0; i < steps; i++) {
        if (forward) {
          await handleNext();
        } else {
          await handlePrev();
        }
      }
    },
    [currentIndex, isAnimating, total, handleNext, handlePrev]
  );

  const visible = useMemo(() => {
    return {
      prevPrev: cards[prevPrevIndex],
      prev: cards[prevIndex],
      center: cards[currentIndex],
      next: cards[nextIndex],
      nextNext: cards[nextNextIndex],
    };
  }, [currentIndex, prevPrevIndex, prevIndex, nextIndex, nextNextIndex]);

  return (
    <div className='w-screen'>
      <div className='flex items-center justify-center'>
        <motion.div
          className='cursor-pointer rounded-3xl'
          initial={slotFor(-2)}
          animate={prevPrevControls}
          // style={{ willChange: "transform, opacity" }}
        >
          <Card {...visible.prevPrev} />
        </motion.div>
        <motion.div
          onClick={handlePrev}
          className='cursor-pointer rounded-3xl'
          initial={slotFor(-1)}
          animate={prevControls}
          // style={{ willChange: "transform, opacity" }}
        >
          <Card {...visible.prev} />
        </motion.div>
        <motion.div
          className='cursor-pointer rounded-3xl'
          initial={slotFor(0)}
          animate={centerControls}
          // style={{ willChange: "transform, opacity" }}
        >
          <Link href={`/projects/${project_data[currentIndex].name}`}>
            <Card {...visible.center} />
          </Link>
        </motion.div>
        <motion.div
          onClick={handleNext}
          className='cursor-pointer rounded-3xl'
          initial={slotFor(1)}
          animate={nextControls}
          // style={{ willChange: "transform, opacity" }}
        >
          <Card {...visible.next} />
        </motion.div>
        <motion.div
          className='cursor-pointer rounded-3xl'
          initial={slotFor(2)}
          animate={nextNextControls}
          // style={{ willChange: "transform, opacity" }}
        >
          <Card {...visible.nextNext} />
        </motion.div>
      </div>
      <div className='flex flex-col justify-center items-center mt-4'>
        {/* Numbers */}
        <div className='mb-2'>
          {currentIndex + 1}/{cards.length}
        </div>
        {/* Dots */}
        <ul className='flex justify-center'>
          {cards.map((_, index) => (
            <li
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 m-2 rounded-full bg-secondary cursor-pointer ${
                index === currentIndex ? "!bg-accent scale-110" : ""
              }`}></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
