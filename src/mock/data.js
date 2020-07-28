import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dev-Resume', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Diego Braga',
  subtitle: "I'm a Software Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    '19 jun 1994, Fortaleza, Brazil. Passionate about learning new technologies, mentored by my web designer uncle ‘Amaurir Tavares’ at age of 11 I built my own computer ‘component by component’ and designed my first HTML web page from scratch, growing up in Europe I had the opportunity to learn more languages and in 2013 I got my leaving certificate at ‘Liceo artistico Paul Klee N. Barabino, Genoa, Italy. ',
  paragraphTwo:
    'Back in Brazil in 2014 I’ve been working in the Hospitality Industry and studying International Relations at Unifor, Fortaleza. In October of 2015 due to an unfortunate traffic accident that constricted me to a wheelchair, I had to stop my activities in order to recover.',
  paragraphThree:
    'In 2017 I started my first Bootcamp learning  Python and Javascript for games and interactive web pages and built my first mobile app using Ionic on my own initiative. In 2018 I finished my second Bootcamp, Full Stack Software Development, ReactJS, React Native and Node.js  at Rocketseat where even today I still follow their methodologie, courses work and contribute to the community. In 2019 I received my Google IT Support Professional Certificate after completing 5 courses designed by Google and I keep working to develop and aprimorate my skills. ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// SKILLS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'html.png',
    title: 'HTML',
    info:
      'I create amazing web and mobile applications using the simple and traditional html, applying all the semantinc and best pratices for a well structured project.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'css.png',
    title: 'CSS',
    info:
      'I create beaultiful, well designed and responsive applications manually using classes, id, selectors etc or libraries such as Bootstrap or Styled-Components, layouts in flex-box or css-grid for amazing and fluid containers.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'javascript.png',
    title: 'Javascript',
    info:
      'I create animated and interactive applications using the pure and traditional javascript to communicate to the backend, validations and data management.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react.png',
    title: 'ReactJS',
    info:
      'One of the most popular Framework in modern frontend development, React for Web and React Native Mobile.',
    info2:
      'Typescript, Styled-Components, Date-Fns, Axios, Jest, React Hooks, Router-dom, React-Navigation, ESlint and Prettier.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nodejs.png',
    title: 'Node.js',
    info:
      'Building APIs rest, consistent server side applocations using Node.js writting in Javascript',
    info2:
      'Typescript, Express, bcryptjs, jsonwebtoken, Axios, Docker, date-fns, multer, typeorm, uuidv4, eslint and prettier. noSQL and SQL Databases.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'diebraga0055@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/diebraga',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/diebraga',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/diebraga/?hl=en',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
