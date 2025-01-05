'use client';

import Card, { CardProps } from '@/components/Card';
import React, { useState } from 'react';
import Link from 'next/link';
import project_data from '@/data/projects.json';

const getImage = async (image: string) => {
    const img = await import(`@/../public/assets/${image}.png`);
    return img.default;
}

const cards: CardProps[] = await Promise.all(project_data.map(async (project) => {
    const image = await getImage(project.name);
    return {
        title: project.title,
        description: project.description,
        status: project.status,
        image: image,
        stack: project.stack,
    };
}));


export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(0);
    
    const handlePrevClick = () => {
        if (isAnimating) return;
        setIsAnimating(-1);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
            setIsAnimating(0);
        }, 250);
    };

    const handleNextClick = () => {
        if (isAnimating) return;
        setIsAnimating(1);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
            setIsAnimating(0);
        }, 250);
    };

    return (
        <div className="carousel">
            <div onClick={handlePrevClick} className={`flex-1 opacity-50 rounded-3xl translate-x-1/4 translate-y-8 ${isAnimating === -1 ? "transition-all ease-out duration-300 translate-x-full -translate-y-2 !opacity-100 z-20" : isAnimating === 1 ? "transition-all ease-out duration-300 !opacity-0" : ""}`}>
                <Card {...cards[currentIndex === 0 ? cards.length - 1 : currentIndex - 1]} />
            </div>
            <div className={`flex-1 z-10 rounded-3xl ${isAnimating === -1 ? "transition-all ease-out duration-300 translate-x-3/4 translate-y-8 opacity-50 -z-10" : isAnimating === 1 ? "transition-all ease-out duration-300 -translate-x-3/4 translate-y-8 opacity-50 z-20" : ""}`}>
                <Link href={`/projects/${currentIndex}`}>
                    <Card {...cards[currentIndex]} />
                </Link>
            </div>
            <div onClick={handleNextClick} className={`flex-1 opacity-50 rounded-3xl -translate-x-1/4 translate-y-8 ${isAnimating === -1 ? "transition-all ease-out duration-300 !opacity-0" : isAnimating === 1 ? "transition-all ease-out duration-300 -translate-x-full -translate-y-2 !opacity-100 z-20" : ""}`}>
                <Card {...cards[currentIndex === cards.length - 1 ? 0 : currentIndex + 1]} />
            </div>
        </div>
    );
};
