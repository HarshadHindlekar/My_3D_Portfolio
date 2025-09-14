import React, { useEffect, useState, useCallback } from "react";
import { testimonials } from "../Service";

export const PeopleCard = ({ activeIndex, setActiveIndex }) => {
    const [direction, setDirection] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(1);
        setActiveIndex(prev => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, testimonials.length]);

    // Auto-rotate testimonials on mobile
    useEffect(() => {
        if (window.innerWidth <= 768) {
            const interval = setInterval(() => {
                handleNext();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [activeIndex, handleNext]);

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(-1);
        setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    // For mobile swipe
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            // Swipe left
            handleNext();
        } else if (touchStart - touchEnd < -75) {
            // Swipe right
            handlePrev();
        }
    };

    return (
        <div className="testimonials-container">
            {/* Desktop View */}
            <div className="testimonial-track">
                <div 
                    className={`testimonial-card ${direction > 0 ? 'slide-in-right' : 'slide-in-left'}`}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    key={activeIndex}
                >
                    <div className="testimonial-content">
                        <div className="quote-icon">
                            <i className="fas fa-quote-left"></i>
                        </div>
                        <p className="testimonial-text">{testimonials[activeIndex].desc}</p>
                        <div className="testimonial-author">
                            <div className="author-image">
                                <img 
                                    src={testimonials[activeIndex].img} 
                                    alt={testimonials[activeIndex].name} 
                                    loading="lazy"
                                />
                            </div>
                            <div className="author-info">
                                <h4 className="author-name">{testimonials[activeIndex].name}</h4>
                                <p className="author-position">{testimonials[activeIndex].position}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Navigation Arrows */}
                <button 
                    className="testimonial-nav prev" 
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                    className="testimonial-nav next" 
                    onClick={handleNext}
                    aria-label="Next testimonial"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            
            {/* Mobile View */}
            <div className="mobile-scroll-hint">
                <i className="fas fa-arrow-right"></i>
                <span>Swipe to see more testimonials</span>
            </div>
            <div className="mobile-testimonials">
                {testimonials.map((test, index) => (
                    <div 
                        key={index} 
                        className={`mobile-testimonial ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <div className="testimonial-content">
                            <div className="quote-icon">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <p className="testimonial-text">{test.desc}</p>
                            <div className="testimonial-author">
                                <div className="author-image">
                                    <img src={test.img} alt={test.name} loading="lazy" />
                                </div>
                                <div className="author-info">
                                    <h4 className="author-name">{test.name}</h4>
                                    <p className="author-position">{test.position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};