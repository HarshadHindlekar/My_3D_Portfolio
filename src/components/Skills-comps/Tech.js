import React from "react";
import BallCanvas from "./Ball";
import { Technologies } from "../Service";
import { isMobile } from 'react-device-detect';

const Tech = () => {
    return (
        <div className='balls-canvas-cointainer'>
            {Technologies.map((technology) => (
                <div className='ball-canvas-size' key={technology.name}>
                    {isMobile
                        ? <div className="image=mobile-div"><img src={technology.icon}  className="image-mobile"/></div>
                        : <BallCanvas icon={technology.icon} />}
                    <span>{technology.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Tech;
