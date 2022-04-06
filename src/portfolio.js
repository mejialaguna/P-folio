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
    'computer programmers who is proficient in both front and back end coding. Their primary responsibilities include designing user interactions on websites, developing servers, and databases for website functionality, and coding for mobile platforms.',
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
    name: 'lil-tweet',
    description:
      'A small version of tweeter where you can create messages , able to do CRUD operations just to show some Tech',
    stack: [
      'HTML',
      'JavaScript',
      'React',
      'React-dom',
      'Router',
      'Redux',
      'Material ui - "MUI"',
      'Semantic-ui',
      'Apollo-Client',
      'Graphql && graphql-tag',
      'express',
      'jwt-decode',
      'moment',
      'apollo-server-express',
      'bcryptjs',
      'jsonwebtoken',
      'mongoose',
      'nodemon',
    ],
    DeploymentSite: 'Deployment site: Heroku',
    sourceCode: 'https://github.com/mejialaguna/lil-tweet.git',
    livePreview: 'https://lil-tweet.herokuapp.com/',
  },
  {
    name: 'Dream-Home',
    description:
      'Real estate apps are mobile applications aimed at making the process of property transactions easy. These apps are designed in a way that makes it easy for buyers, sellers, realtors, landlords, and investors to find each other quickly and conveniently',
    stack: [
      'CSS',
      'JavaScript',
      'Node',
      'express',
      'ES6',
      'Node',
      'mySQL 2',
      'Sequelize',
      'Nodemon',
      'dotenv',
      'axios',
      'Handlebars',
      'bcrypt',
      'connect-session-sequelize',
      'Jest',
    ],
    DeploymentSite: 'Deployment site: Heroku',
    sourceCode: 'https://github.com/mejialaguna/Dream-Home.git',
    livePreview: 'https://sheltered-eyrie-12242.herokuapp.com/',
  },
  {
    name: 'global-trade',
    description:
      'Global Trade is a Single Page E-commerce Web Application. It allows users to search for products based on categories, add product to the cart and process credit card payment.',
    stack: [
      'Html',
      'CSS',
      'JavaScript',
      'React-bootstrap',
      'React-Mui',
      'express',
      'Node',
      'Npm',
      'React',
      'mongodb',
      'graphQl',
    ],
    DeploymentSite: 'Deployment site: Heroku',
    sourceCode: 'https://github.com/mejialaguna/global-trade.git',
    livePreview: 'https://still-eyrie-57534.herokuapp.com/',
  },
  {
    name: 'Netflix Style - youTube',
    description: 'Restricted version of youTube & netflix for under age kids , dont have to worry about inappropriate context easy to use and password-less entry',
    stack: [
      'Html',
      'CSS',
      'JavaScript',
      'React-Mui',
      'React-Js',
      "Next-Js",
      "Jwt",
      "magic-sdk/admin",
      "framer-motion",
      "YouTube-api",
      "hasura",      
      'graphQl',
      'vercel',
    ],
    sourceCode: 'https://kidstube.vercel.app/',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Redux',
  'Next-Js',
  'magic-sdk/admin',
  'framer-motion',
  'hasura',
  'graphql-tag',
  'react-router-dom',
  'React-bootstrap',
  'apollo-client',
  'Material UI || Mui',
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
  // email is optional - if left empty Contact section won't show up
  email: 'mejialaguna@yahoo.com',
}

export { header, about, projects, skills, contact }
