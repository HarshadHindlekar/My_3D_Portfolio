import React, { useCallback, useState } from "react";
import { testimonials } from "../Service";

const getExcerpt = (text) => {
    if (text.length <= 250) return text;
    return `${text.slice(0, 247).trim()}...`;
};

export const PeopleCard = ({ activeIndex, setActiveIndex }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const activeTestimonial = testimonials[activeIndex];

    const renderAuthor = (test) => {
        const authorContent = (
            <>
                <div className="author-image">
                    <img
                        src={test.img}
                        alt={test.name}
                        loading="lazy"
                    />
                </div>
                <div className="author-info">
                    <h4 className="author-name">{test.name}</h4>
                    <p className="author-position">{test.position}</p>
                </div>
            </>
        );

        if (!test.profileUrl) {
            return <div className="testimonial-author">{authorContent}</div>;
        }

        return (
            <a
                className="testimonial-author testimonial-author-link"
                href={test.profileUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${test.name}'s LinkedIn profile`}
            >
                {authorContent}
            </a>
        );
    };

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex(prev => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, setActiveIndex]);

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <div className="signals-panel">
            <div className="signals-panel__quote" key={activeIndex}>
                <div className="quote-icon" aria-hidden="true">"</div>
                <p className="testimonial-text">{getExcerpt(activeTestimonial.desc)}</p>
                {renderAuthor(activeTestimonial)}
                <div className="signals-wave" aria-hidden="true">
                    {Array.from({ length: 24 }).map((_, index) => (
                        <span key={index} style={{ '--wave-height': `${14 + (index % 7) * 6}px` }} />
                    ))}
                </div>
            </div>
            <div className="signals-crew" aria-label="Select testimonial">
                {testimonials.map((test, index) => (
                    <button
                        key={test.name}
                        className={`signals-crew__avatar ${activeIndex === index ? 'is-active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`View testimonial from ${test.name}`}
                    >
                        <img src={test.img} alt="" loading="lazy" />
                    </button>
                ))}
            </div>
            <div className="signals-actions">
                <button className="testimonial-nav prev" onClick={handlePrev} aria-label="Previous testimonial">{'<'}</button>
                <button className="testimonial-nav next" onClick={handleNext} aria-label="Next testimonial">{'>'}</button>
            </div>
        </div>
    );
};
