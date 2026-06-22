import React from "react";
import { Technologies } from "../Service";

const categories = {
  'Frontend': ['React JS', 'Next.js', 'Vue.js', 'Nuxt 3', 'shadcn', 'Bootstrap', 'MUI'],
  'Backend / Databases': ['Node.js', 'Spring Boot', 'FastAPI', 'MongoDB', 'PostgreSQL'],
  'Tools / Cloud': ['git', 'React 3 Fiber', 'AWS Amplify', 'AWS S3', 'AWS EC2', 'AWS Route 53']
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
            {Object.entries(techByCategory).map(([category, techs], categoryIndex) => (
                <div key={category} className="tech-category" style={{ '--category-index': categoryIndex }}>
                    <h3>{category}</h3>
                    <div className='balls-canvas-cointainer'>
                        {techs.map((tech, techIndex) => (
                            <div
                                className='ball-canvas-size'
                                key={tech.name}
                                style={{ '--tech-index': techIndex }}
                            >
                                <div className="tech-mobile">
                                    <img src={tech.icon} className="tech-icon" alt={tech.name} />
                                </div>
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
