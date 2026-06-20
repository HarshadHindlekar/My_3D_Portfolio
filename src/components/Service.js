import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon3.svg";
import navIcon3 from "../assets/img/github-ico.png";
import windows11 from '../assets/img/windows 11.png'
import solarSystem from "../assets/img/project-img6.png";
import cssGridAnimation from "../assets/img/project-img5.png";
import sundownStudio from "../assets/img/Sundown-Studio-Clone.jpg";
import pokemon from '../assets/img/pokemon.png'

import bootstrap from '../assets/tech/Bootstrap.png'
import mui from '../assets/tech/MUI.png'
import reactjs from '../assets/tech/reactjs.png';
import spring from '../assets/tech/Spring_Boot.png'
import mongodb from '../assets/tech/mongodb.png';
import pgadmin from '../assets/tech/pgadmin.png'
import threejs from '../assets/tech/threejs.svg';
import git from '../assets/tech/git.png';

const nextjs = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8_YuI-40uCn2rzzrmifB-AQfdFuX0xsGvA&s';
const vuejs = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQybQ9296S3HQxCEmN2B7gK4a2H5hlUCBYKIA&s';
const nuxt3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskf59fnpQb2_vrBZlhbnAw3VDOFt2zHmWGg&s';
const shadcn = 'https://ui.shadcn.com/apple-touch-icon.png';
const fastapi = 'https://avatars.githubusercontent.com/u/156354296?s=280&v=4';

// const docker = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" rx="48" fill="%232496ed"/><path fill="%23fff" d="M76 120h24v-20H76zm28 0h24v-20h-24zm28 0h24v-20h-24zm-28 24h24v-20h-24zm28 0h24v-20h-24zm28-24h24v-20h-24z"/><path fill="%23fff" d="M196 132c-3 12-12 16-24 16H84c0 24 18 44 46 44 40 0 70-18 82-56 2-7-4-10-16-4z"/></svg>';
const awsAmplify = 'https://cloud-icons.onemodel.app/aws/Architecture-Service-Icons_01312023/Arch_Front-End-Web-Mobile/64/Arch_AWS-Amplify_64@5x.png';
const awsS3 = 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/aws-s3-9fy4y5f02sp6fm0wxo9qj.png/aws-s3-toi4erj6v293ib57kdic73.png?_a=DATAiZiuZAA0';
const awsEc2 = 'https://files.svgcdn.io/logos/aws-ec2.svg';
const awsRoute53 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3qaCfwYujU-tlwcLRNAVGsURQYclHXnVgw&s';



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
  }, {
    key: 'testimonials',
    value: 'Testimonials'
  }, {
    key: 'connect',
    value: 'Connect'
  }
];

export const projects1 = [
  {
    title: "🪟 Windows 11",
    description: "Using Advance React framework and Tailwind css created a clone web app of Windows 11 🪟",
    imgUrl: windows11,
    href: 'https://harshadhindlekar.github.io/Windows-11/',
  },
  {
    title: "On-Scroll Text Animations",
    description: "Some experiments with on-scroll 📜 typography 🌀 effects using SVG.🎞️",
    imgUrl: 'https://tympanus.net/codrops/wp-content/uploads/2024/01/clippathtext.jpg',
    href: 'https://harshadhindlekar.github.io/On-Scroll-Text-Animations/',
  },
  
  {
    title: "Harshad's Pokemon World",
    description: "In pokemon their is a poketab which helps trainers to identify trainers that tab i tried to build.",
    imgUrl: pokemon,
    href: 'https://harshadhindlekar.github.io/Harshad-s-Pokemon-world/',
  },
];

export const projects = [
  {
    title: "Rotating solar System",
    description: "Build a simulation of the Earth 🌎, Moon 🌛, and some planets 🌕🌑🌚 orbiting around the Sun 🌞 using HTML and CSS.",
    imgUrl: solarSystem,
    href: 'https://harshadhindlekar.github.io/Solar-System/',
  },
  {
    title: "Grid Item Hower Effect",
    description: "Some hover effects based on the grid 🥅 design Animation 🎞️",
    imgUrl: cssGridAnimation,
    href: 'https://harshadhindlekar.github.io/Grid-Item-Hover-Effect/',
  },
  {
    title: "Sundown Studio Clone",
    description: "Builded a clone of a Sundown Studio to demonstrate my skills in Animated Web Applications",
    imgUrl: sundownStudio,
    href: 'https://harshadhindlekar.github.io/Sundown-Studio/',
  },
];


export const Technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
    
  },
  {
    name: "Vue.js",
    icon: vuejs,
    
  },
  {
    name: "Nuxt 3",
    icon: nuxt3,
    
  },
  {
    name: "shadcn/ui",
    icon: shadcn,
    
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
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "FastAPI",
    icon: fastapi,
   
  },
  {
    name: "AWS Amplify",
    icon: awsAmplify,
    
  },
  {
    name: "AWS S3",
    icon: awsS3,
    
  },
  {
    name: "AWS EC2",
    icon: awsEc2,
    
  },
  {
    name: "AWS Route 53",
    icon: awsRoute53,
    
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
    name: "git",
    icon: git,
  },
  // {
  //   name: "Docker",
  //   icon: docker,
  // },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const createInitialAvatar = (initials, colorA, colorB) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${colorA}" />
          <stop offset="100%" stop-color="${colorB}" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="60" fill="url(#g)" />
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="42" font-weight="700">${initials}</text>
    </svg>
  `)}`;

export const testimonials = [
  {
    img: createInitialAvatar('SD', '#0f766e', '#2563eb'),
    desc: 'I had the pleasure of working with Harshad on the SkillJourney product, where we collaborated closely on several core features. Harshad brought strong technical expertise, particularly in React and Python (including Azure Functions), which played a key role in the development and scalability of our platform. His ability to break down complex problems and implement clean, efficient solutions made a significant impact on our progress. Beyond his technical skills, Harshad was always reliable, proactive, and easy to work with - qualities that made team collaboration smooth and productive. I truly appreciated his dedication and problem-solving approach, and I am confident he will be a valuable asset to any team he joins.',
    name: 'Saurabh Deshpande',
    position: 'Tech Lead | Building AI-Powered SaaS Platforms',
    profileUrl: 'https://www.linkedin.com/in/sdeshpande0311/'
  },
  {
    img: createInitialAvatar('ST', '#ea580c', '#be123c'),
    desc: 'I had the pleasure of working with Harshad Hindlekar at Cloudfinch Information Technologies. Harshad is a talented frontend developer with strong technical skills and a great eye for detail. He consistently delivered high-quality work and was always proactive in finding solutions to challenges. It was a great experience collaborating with him, and I am confident he will be a valuable asset to any team he joins.',
    name: 'Shivansh Tyagi',
    position: 'Full Stack Developer | Vue js, Nuxt js, Spring Boot',
    profileUrl: 'https://www.linkedin.com/in/tyagishivansh/'
  },
  {
    img: createInitialAvatar('PP', '#16a34a', '#0891b2'),
    desc: 'I highly recommend Harshad for his exceptional technical expertise and dedication to software development. He is a highly skilled and versatile developer, always ready to take on new challenges with enthusiasm. Harshad played a crucial role in our team, contributing significantly to both backend and frontend development. His expertise in React and Angular helped build dynamic and user-friendly interfaces, while his strong backend development skills in Python and microservices architecture ensured seamless functionality. He was also instrumental in deploying Azure pipelines, managing MongoDB databases, and optimizing cloud infrastructure. Additionally, Harshad has hands-on experience integrating LLMs like ChatGPT and Gemini, enhancing our applications with AI-driven capabilities. His ability to work across different technologies and troubleshoot complex issues made a huge difference in our project success. Beyond his technical skills, Harshad is incredibly helpful and collaborative. He actively supports his teammates, shares his knowledge, and quickly adapts to new technologies. His problem-solving mindset and eagerness to learn make him a valuable asset to any team. I strongly recommend Harshad for any opportunity that values expertise in modern tech stacks, AI integration, and cloud-based solutions.',
    name: 'Parth Pardeshi',
    position: 'Business Analyst | SQL | Python | Azure | Power BI',
    profileUrl: 'https://www.linkedin.com/in/parth-pardeshi-008481268/'
  },
  {
    img: createInitialAvatar('RN', '#475569', '#16a34a'),
    desc: '"Fast, Skilled, Techie, Jack of all Trades" are some words I would use to describe Harshad after working with him for 6 months at Skilljourney, where he excelled in his role as a Full Stack Developer. Harshad brought a diverse and impressive skill set to our team, including extensive experience with ReactJS, HTML, CSS, Python, and Azure DevOps, among other technologies. Harshad demonstrated exceptional proficiency in both front-end and back-end development. His expertise in ReactJS enabled him to build dynamic, responsive user interfaces, while his knowledge of Python, OpenAI API, and Azure Functions facilitated the development of robust server-side applications and integration of OpenAI\'s LLM models in backend applications. His adeptness with CosmosDB and Azure Blob Storage ensured efficient and scalable database management. Alongside development, he was also responsible for deployment on Azure Pipelines where he showcased crucial problem solving abilities. With two years of experience in the field, Harshad has consistently demonstrated strong problem-solving abilities, an Agile approach to development, and a commitment to delivering fast and high-quality solutions. In addition to his technical expertise, Harshad displayed excellent collaboration skills and a proactive attitude. He contributed significantly to team discussions, effectively communicated complex technical concepts, suggested clear actionables to improve coding practices and create a positive working environment. In summary, I highly recommend Harshad for any Full Stack Developer position. His comprehensive skill set, including ReactJS, TypeScript, Spring Boot, Laravel, MongoDB, PostgreSQL, and his unique background in 3D animation, make him an invaluable asset to any organization.',
    name: 'Rudraksh Naik',
    position: 'Ex-SDE Intern @ Amazon | MSCS @ SJSU | AI / ML Enthusiast',
    profileUrl: 'https://www.linkedin.com/in/rudrax/'
  },
  {
    img: createInitialAvatar('AS', '#ca8a04', '#0f766e'),
    desc: 'I had the pleasure of working with Harshad Hindlekar during our internship, and I was consistently impressed by his technical skills and leadership. With expertise in React, Azure Functions, and OpenAI APIs, he builds solutions that are both user-friendly and technically sound. As the lead developer at NorthStar, he is driving the development of a career guidance platform, skillfully combining AI and scalable architecture. His ability to turn complex ideas into efficient and practical solutions is outstanding. Harshad is also a great team player - always willing to help, tackle challenges, and ensure that tasks are done to the highest standard. He is an invaluable asset to any team, and I highly recommend him.',
    name: 'Asmi Sinha',
    position: 'Software Developer at Ericsson India | Ex-Intern at SkillJourney',
    profileUrl: 'https://www.linkedin.com/in/asmi-sinha-9b690a247/'
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
