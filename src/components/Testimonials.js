import { Container } from "react-bootstrap";
import 'animate.css';
import '../css/Testimonials.css';
import { PeopleCard } from "./Testimony-comps/PeopleCard";
import { useEffect, useState } from 'react';
import { testimonials } from './Service';
import { MissionSection } from "./MissionSection";
import { MissionVisual } from "./MissionVisual";

export const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('testimonials');
            if (element) {
                const rect = element.getBoundingClientRect();
                setIsVisible(rect.top < window.innerHeight * 0.8);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % testimonials.length);
        }, 8000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    return (
        <MissionSection
            id="testimonials"
            number="04"
            label="Signals"
            eyebrow="Signals"
            className={`testimonials ${isVisible ? 'visible' : ''}`}
        >
            <Container fluid className="signals-container">
                <div className="signals-layout">
                    <PeopleCard activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                    <div className={`testimonial-header ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                        <MissionVisual variant="signals" className="signals-section-visual" alt="Astronaut receiving transmission signals in orbit" />
                        <h2>Signals From The Crew</h2>
                        <p>Kind words from teammates and collaborators across missions.</p>
                        <a
                            className="mission-btn mission-btn--ghost"
                            href="https://www.linkedin.com/in/harshad-hindlekar/details/recommendations/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Read More Signals
                        </a>
                    </div>
                </div>
            </Container>
        </MissionSection>
    );
};
