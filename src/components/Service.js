import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon3.svg";
import navIcon3 from "../assets/img/github-ico.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import html from '../assets/tech/html.png';
import css from '../assets/tech/css.png';
import javascript from '../assets/tech/javascript.png';
import reactjs from '../assets/tech/reactjs.png';
import redux from '../assets/tech/redux.png';
import nodejs from '../assets/tech/nodejs.png';
import mongodb from '../assets/tech/mongodb.png';
import threejs from '../assets/tech/threejs.svg';
import git from '../assets/tech/git.png';
import docker from '../assets/tech/docker.png';
import people1 from '../assets/img/header-img1.svg'
import people2 from '../assets/img/header-img2.svg'
import people3 from '../assets/img/me-before.svg'

export const SocialIcons = [
  {
    href: "https://www.linkedin.com/in/harshad-hindlekar-b94a07236/",
    imgSrc: navIcon1,
    altText: "linkdin",
  },
  {
    href: "https://www.instagram.com/h_a_r_s_h_a_d_2_4/",
    imgSrc: navIcon2,
    altText: "instagram",
  },
  {
    href: "https://github.com/HarshadHindlekar",
    imgSrc: navIcon3,
    altText: "github",
  }
];

export const TabIcons = [
  {
    key: 'home',
    value: 'Home'
  },
  {
    key: 'skills',
    value: 'Skills'
  }, {
    key: 'projects',
    value: 'Projects'
  }
];

export const projects = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
];


export const Technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
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

export const testimonials = [
  {
    img: people1,
    desc: 'A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers.',
    name: 'John',
    position: 'Developer'
  },
  {
    img: people2,
    desc: 'A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers.',
    name: 'Doe',
    position: 'Engineer'
  },
  {
    img: people3,
    desc: 'A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers.',
    name: 'Leena',
    position: 'SEO'
  }
];

export const tiltDefaultOptions = {
  reverse:        false,  // reverse the tilt direction
  max:            35,     // max tilt rotation (degrees)
  perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed:          1000,   // Speed of the enter/exit transition
  transition:     true,   // Set a transition on enter/exit.
  axis:           null,   // What axis should be disabled. Can be X or Y.
  reset:          true,    // If the tilt effect has to be reset on exit.
  easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}