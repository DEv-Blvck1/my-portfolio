import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  nextjs,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Developer',
    icon: frontend,
  },
  // {
  //   title: 'Backend Developer',
  //   icon: backend,
  // },
  {
    title: 'UI/UX Component Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  // {
  //   title: 'Front-End Developer',
  //   company_name: 'Cover Hunt',
  //   icon: coverhunt,
  //   iconBg: '#333333',
  //   date: 'Aug 2021 - Feb 2022',
  // },
  {
    title: 'Volunteer',
    company_name: 'Lagos state school of programming',
    icon: microverse,
    iconBg: '#333333',
    date: 'Apr 2022 - Mar 2024',
  },
  {
    title: 'Frontend Internship',
    company_name: 'Avetium consult Ltd.',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2024 - Nov 2024',
  },
  {
    title: 'Software Developer',
    company_name: 'Avetium technologies',
    icon: dcc,
    iconBg: '#333333',
    date: 'Nov 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Chopeasy',
    description: ' Full-featured order management and analytics dashboard for Nigerian food vendors.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/DEv-Blvck1/chopeasy',
    demo: 'https://chopeasy-ng.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'pocketledger',
    description:
      ' Income/expense tracker with category budget limits, overspend alerts, 7-month spending trend chart, and savings rate',

    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/DEv-Blvck1/pocketledger',
    demo: 'https://pocketledger-beta.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'trustrent',
    description: 'Multi-property lease tracker with rent payment records, receipt number logging, 60-day expiry renewal alerts and one-tap',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/DEv-Blvck1/trustrent',
    demo: 'https://trustrent.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'vitaltrack',
    description: ` Consolidated health dashboard tracking calories, water, sleep, steps, mood, and heart rate with radial progress rings`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/DEv-Blvck1/vitaltrack',
    demo: 'https://vitaltrack-ruby.vercel.app/',
  },
  {
    id: 'project-5',
    name: 'Lawlah penner portfolio',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/DEv-Blvck1/A-writer-s-portfolio',
    demo: 'https://lawlahpenner.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
