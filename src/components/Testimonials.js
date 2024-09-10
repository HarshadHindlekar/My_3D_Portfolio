import { Container } from "react-bootstrap";
import 'animate.css';
import '../css/Testimonials.css';
import { isMobile } from 'react-device-detect';
import TrackVisibility from 'react-on-screen';
import { PeopleCard } from "./Testimony-comps/PeopleCard";


export const Testimonials = () => {
    const chars = 'Testimonials'.split('');
    return (
        <TrackVisibility partialVisibility >
            {({ isVisible }) =>
                <section className={isVisible ? "testimonials" : ''} id="testimonials">
                    <Container className="testimonial-box">
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <p className="testimoni-paragraph">What others say 🗣️</p>
                            <h2 className={isVisible ? 'drop-text' : ''}>{chars.map((char, index) => (<span key={index} style={{ animationDelay: `${0.2 * index}s` }}>{char}</span>))}</h2>
                            <p>{isMobile ? "scroll to see more -->" : null}</p>
                            <PeopleCard />
                        </div>
                    </Container>
                </section>}
        </TrackVisibility>
    )
}
