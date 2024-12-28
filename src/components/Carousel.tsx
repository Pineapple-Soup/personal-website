'use client';
import { CardProps } from './Card';
import Card from './Card';
import React, { useState } from 'react';


export interface CarouselProps {
    cards: readonly CardProps[];
}

const Carousel = ({ cards }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <div onClick={handlePrevClick} className="opacity-50 rounded-3xl translate-x-1/4 translate-y-8">
                <Card {...cards[currentIndex === 0 ? cards.length - 1 : currentIndex - 1]} />
            </div>
            <div className="z-10 rounded-3xl">
                <Card {...cards[currentIndex]} />
            </div>
            <div onClick={handleNextClick} className="opacity-50 rounded-3xl -translate-x-1/4 translate-y-8">
                <Card {...cards[currentIndex === cards.length - 1 ? 0 : currentIndex + 1]} />
            </div>
        </div>
    );
};

export default Carousel;
