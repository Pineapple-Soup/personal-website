'use client';

import { CardProps } from './Card';
import Card from './Card';
import React, { useState } from 'react';


export interface CarouselProps {
    cards: readonly CardProps[];
}

const Carousel = ({ cards }: CarouselProps) => {
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
            {/* <div className={'hidden ${isAnimating === -1 ? "transition-all duration-0 inline" : ""}'}>
                <Card {...cards[currentIndex === 0 ? cards.length - 2 : currentIndex === 1 ? cards.length - 1 : currentIndex - 2]} />
            </div> */}
            <div onClick={handlePrevClick} className={`flex-1 opacity-50 rounded-3xl translate-x-1/4 translate-y-8 ${isAnimating === -1 ? "transition-all ease-out duration-300 translate-x-full -translate-y-2 !opacity-100 z-20" : isAnimating === 1 ? "transition-all ease-out duration-300 !opacity-0" : ""}`}>
                <Card {...cards[currentIndex === 0 ? cards.length - 1 : currentIndex - 1]} />
            </div>
            <div className={`flex-1 z-10 rounded-3xl ${isAnimating === -1 ? "transition-all ease-out duration-300 translate-x-3/4 translate-y-8 opacity-50 -z-10" : isAnimating === 1 ? "transition-all ease-out duration-300 -translate-x-3/4 translate-y-8 opacity-50 z-20" : ""}`}>
                <Card {...cards[currentIndex]} />
            </div>
            <div onClick={handleNextClick} className={`flex-1 opacity-50 rounded-3xl -translate-x-1/4 translate-y-8 ${isAnimating === -1 ? "transition-all ease-out duration-300 !opacity-0" : isAnimating === 1 ? "transition-all ease-out duration-300 -translate-x-full -translate-y-2 !opacity-100 z-20" : ""}`}>
                <Card {...cards[currentIndex === cards.length - 1 ? 0 : currentIndex + 1]} />
            </div>
        </div>
    );
};

export default Carousel;
