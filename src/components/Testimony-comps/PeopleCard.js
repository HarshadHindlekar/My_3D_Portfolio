import React from "react";
import { testimonials, tiltDefaultOptions } from "../Service";
import { Tilt } from "react-tilt";

export const PeopleCard = () => {

    return (
        <div className="people-container">
            {testimonials.map((test, key) => {
                return (
                    <Tilt options={tiltDefaultOptions} className="tilt-box">
                        <div className="people-box" key={key}>
                            <div className="img-container"><img src={test.img} className="people-img" alt={test.name} /></div>
                            <p className="people-paragraph">{test.desc}</p>
                            <div className="people-name-box">
                                <h4 className="people-name">{test.name}</h4>
                                <p className="people-position">-{test.position}</p>
                            </div>
                        </div>
                    </Tilt>
                )
            })}
        </div>
    )
};