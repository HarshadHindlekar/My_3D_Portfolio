// import { html, css, javascript, reactjs, redux, nodejs, mongodb, threejs, git, docker } from '../../assets/tech';
import html from '../../assets/tech/html.png';
import css from '../../assets/tech/css.png';
import javascript from '../../assets/tech/javascript.png';
import reactjs from '../../assets/tech/reactjs.png';
import redux from '../../assets/tech/redux.png';
import nodejs from '../../assets/tech/nodejs.png';
import mongodb from '../../assets/tech/mongodb.png';
import threejs from '../../assets/tech/threejs.svg';
import git from '../../assets/tech/git.png';
import docker from '../../assets/tech/docker.png';


export const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};