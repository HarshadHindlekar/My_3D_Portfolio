import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon3.svg";
import navIcon3 from "../assets/img/github-ico.png";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import solarSystem from "../assets/img/project-img4.png";

import html from '../assets/tech/html.png';
import css from '../assets/tech/css.png';
import bootstrap from '../assets/tech/Bootstrap.png'
import mui from '../assets/tech/MUI.png'
import javascript from '../assets/tech/javascript.png';
import java from '../assets/tech/java.png';
import py from '../assets/tech/python.png';
import reactjs from '../assets/tech/reactjs.png';
import django from '../assets/tech/django.png'
import spring from '../assets/tech/Spring_Boot.png'
import mongodb from '../assets/tech/mongodb.png';
import pgadmin from '../assets/tech/pgadmin.png'
import threejs from '../assets/tech/threejs.svg';
import git from '../assets/tech/git.png';

import people1 from '../assets/img/header-img1.svg'
import people2 from '../assets/img/header-img2.svg'
import people3 from '../assets/img/me-before1.png'

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

export const projects1 = [
  {
    title: "Rotating solar System",
    description: "Build a simulation of the Earth 🌎, Moon 🌛, and some planets 🌕🌑🌚 orbiting around the Sun 🌞 using HTML and CSS.",
    imgUrl: solarSystem,
    href: 'https://github.com/HarshadHindlekar/Solar-System',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
    href: 'http',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
    href: 'http',
  },
];

export const projects = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
    href: 'http',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
    href: 'http',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
    href: 'http',
  },
];


export const Technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React 3 Fiber",
    icon: threejs,
  },
  {
    name: "MUI",
    icon: mui,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
   {
    name: 'PostgreSQL',
    icon: pgadmin,
  },
  {
    name: "Python",
    icon: py,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Django",
    icon: django,
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
  reverse: false,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}