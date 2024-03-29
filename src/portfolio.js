const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mejialaguna.github.io/P-folio/',
  title: 'JS/React',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jose L Mejia Laguna',
  role: 'Full Stack-WebDeveloper',
  description:
    'computer programmer who is proficient in both front and back end coding. Their primary responsibilities include designing user interactions on websites, developing servers, and databases for website functionality, and coding for mobile platforms.',
  resume:
    'https://docs.google.com/document/d/1IQp0sbz_pEytnZKSWT1QhlGhAf2iYAZNf1WZundt3GY/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/jose-luis-mejia-laguna-961306164/',
    github: 'https://github.com/mejialaguna?tab=repositories',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Lil-Tweet',
    description:
      'A small version of tweeter were you can leave your thoughts and let others leave their comments about you thought. You able to create, update or delete your messages. ',
    stack: [
      'HTML',
      '|',
      'JavaScript',
      '|',
      'React',
      '|',
      'React-dom',
      '|',
      'Router',
      '|',
      'Redux',
      '|',
      'Material ui - "MUI"',
      '|',
      'Semantic-ui',
      '|',
      'Apollo-Client',
      '|',
      'Graphql && graphql-tag',
      '|',
      'express',
      '|',
      'jwt-decode',
      '|',
      'moment',
      '|',
      'apollo-server-express',
      '|',
      'bcryptjs',
      '|',
      'jsonwebtoken',
      '|',
      'mongoose',
      '|',
      'nodemon',
    ],
    DeploymentSite: 'Deployment site: Heroku',
    sourceCode: 'https://github.com/mejialaguna/lil-tweet.git',
    livePreview: 'https://lil-tweet.herokuapp.com/',
  },
  {
    name: 'Journey Diary',
    description:
      "A daily record, private, the writer's own experiences, observations, feelings, attitudes, etc. a book for keeping such a record. a book or pad containing images , in which to note appointments and the like.",
    stack: [
      'CSS',
      '|',
      'JavaScript/ES6',
      '|',
      "React",
      '|',
      "Vite",
      '|',
      "React-Dom",
      '|',
      "React-Redux",
      '|',
      "React-Router-Dom",
      '|',
      "Reduxjs/toolkit",
      '|',
      "Firebase",
      '|',
       "mui/material",
      '|',
      'axios',
      '|',
    ],
    DeploymentSite: 'Deployment site: Vercel',
    sourceCode: 'https://github.com/mejialaguna/Journal_Diary',
    livePreview: 'https://journal-diary-nine.vercel.app/auth/login',
  },
  {
    name: 'Global-Trade',
    description:
      'Global Trade is a Single Page E-commerce Web Application. That allows all users to search for products based on categories, from the comfort of their home.',
    stack: [
      'Html',
      '|',
      'CSS',
      '|',
      'Material-ui',
      '|',
      'bootstrap',
      '|',
      'JavaScript',
      '|',
      'React',
      '|',
      'express',
      '|',
      'Node',
      '|',
      'Npm',
      '|',
      'mongodb',
      '|',
      'graphQl',
    ],
    DeploymentSite: 'Deployment site: Heroku',
    sourceCode: 'https://github.com/mejialaguna/global-trade.git',
    livePreview: 'https://still-eyrie-57534.herokuapp.com/',
  },
  {
    name: 'Netflix Style - YouTube',
    description:
      'Restricted version of youTube & netflix for under age kids , dont have to worry about inappropriate context easy to use and password-less entry',
    stack: [
      'Html',
      '|',
      'CSS',
      '|',
      'Material-Mui',
      '|',
      'JavaScript',
      '|',
      'React-Js',
      '|',
      'Next-Js',
      '|',
      'Jwt',
      '|',
      'magic-sdk/admin',
      '|',
      'framer-motion',
      '|',
      'YouTube-api',
      '|',
      'hasura',
      '|',
      'graphQl',
      '|',
      'vercel',
    ],
    DeploymentSite: 'Deployment site: Vercel',
    sourceCode: 'https://github.com/mejialaguna/nell-pipi',
    livePreview: 'https://kidstube.vercel.app',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Redux',
  'magic-sdk/admin',
  'framer-motion',
  'hasura',
  'graphql-tag',
  'react-router-dom',
  'React-bootstrap',
  'apollo-client',
  'Material-ui',
  'Semantic-ui',
  'node',
  'express',
  'apollo-server-express',
  'graphQl',
  'moment',
  'mongodb',
  'jsonwebtoken',
  'mongoose',
  'bcryptjs',
  'nodemon',
  'Mysql2',
  'Jest',
  'Git',
  'GH-pages',
  'Heroku',
  'Netlify',
  'vercel',
]
const contact = {
  email: 'mejialaguna@yahoo.com',
}

export { header, about, projects, skills, contact }
