import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import '../css/Testimonials.css';
import { isMobile } from 'react-device-detect';
import TrackVisibility from 'react-on-screen';
import { PeopleCard } from "./Testimony-comps/PeopleCard";
import { useEffect, useState } from 'react';

export const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('testimonials');
            if (element) {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight * 0.8;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        
        // Auto-rotate testimonials
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % 3);
        }, 8000);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    return (
        <section 
            id="testimonials" 
            className={`testimonials ${isVisible ? 'visible' : ''}`}
        >
            <div className="testimonials-overlay"></div>
            <Container>
                <div className={`testimonial-header ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                    <p className="section-subtitle">What Others Say</p>
                    <h2 className="section-title">
                        Testimonials
                        <span className="underline"></span>
                    </h2>
                    {isMobile && (
                        <p className="scroll-hint">
                            <i className="fas fa-arrow-right"></i> Swipe to see more
                        </p>
                    )}
                </div>
                
                <PeopleCard activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                
                {!isMobile && (
                    <div className="testimonial-dots">
                        {[0, 1, 2].map((index) => (
                            <button
                                key={index}
                                className={`dot ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`View testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
};
