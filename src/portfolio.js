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
    name: 'poke-Dex',
    description:
      'This project was made to have quick access to pokemon data , to those who love the PokeVerse, instead of using many different API they can just come and use this tool and it will gather all the info for us.',
    stack: [
      'HTML',
      'JavaScript',
      'JQUERY',
      'MATERIALIZE',
      'WIKIPIDIA API',
      'POKE API',
    ],
    sourceCode: 'https://github.com/mejialaguna/poke-Dex.git',
    livePreview: 'https://mejialaguna.github.io/poke-Dex/',
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
      'Heroku',
    ],
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
      'Heroku',
    ],
    sourceCode: 'https://github.com/mejialaguna/global-trade.git',
    livePreview: 'https://still-eyrie-57534.herokuapp.com/',
  },
  {
    name: 'In-proccess',
    description: 'E-commerce.',
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
      'Heroku',
    ],
    sourceCode: 'https://github.com/mejialaguna/react_webSite.git',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'React-bootstrap',
  'Material UI',
  'Mysql2',
  'mongodb',
  'graphQl',
  'Heroku',
  'Git',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mejialaguna@yahoo.com',
}

export { header, about, projects, skills, contact }
