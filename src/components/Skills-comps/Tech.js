import React from "react";
import BallCanvas from "./Ball";
import { Technologies } from "../Service";
import { isMobile } from 'react-device-detect';

const categories = {
  'Frontend': ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'MUI'],
  'Backend': ['Node.js', 'Java', 'Spring Boot', 'Python', 'Django'],
  'Databases': ['MongoDB', 'PostgreSQL'],
  'Tools': ['git', 'Docker', 'Three.js', 'React 3 Fiber']
};


const Tech = () => {
    // Group technologies by category
    const techByCategory = {};
    Technologies.forEach(tech => {
        for (const [category, items] of Object.entries(categories)) {
            if (items.some(item => tech.name.toLowerCase().includes(item.toLowerCase()))) {
                if (!techByCategory[category]) {
                    techByCategory[category] = [];
                }
                techByCategory[category].push(tech);
                return;
            }
        }
        // If no category matches, add to 'Other'
        if (!techByCategory['Other']) {
            techByCategory['Other'] = [];
        }
        techByCategory['Other'].push(tech);
    });

    return (
        <div className="tech-categories-container">
            {Object.entries(techByCategory).map(([category, techs]) => (
                <div key={category} className="tech-category">
                    <h3>{category}</h3>
                    <div className='balls-canvas-cointainer'>
                        {techs.map((tech) => (
                            <div className='ball-canvas-size' key={tech.name}>
                                {isMobile ? (
                                    <div className="tech-mobile">
                                        <img src={tech.icon} className="tech-icon" alt={tech.name} />
                                    </div>
                                ) : (
                                    <BallCanvas icon={tech.icon} />
                                )}
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tech;
