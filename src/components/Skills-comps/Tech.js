import React from "react";
import BallCanvas from "./Ball";
import { technologies } from "./Const";

const Tech = () => {
    return (
        <div className='balls-canvas-cointainer'>
            {technologies.map((technology) => (
                <div className='ball-canvas-size' key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                    <span>{technology.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Tech;
