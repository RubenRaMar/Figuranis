# Boilerplate for React apps

With Vite + TypeScript

## Scripts

`npm run dev`: starts a development server

`npm run build`: builds the app

`npm run preview`: runs the built app

`npm run lint`: runs ESLint

`npm run test`: runs vitest(test)

# FIGURAniS [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Ruben-Ramirez-Final-Project-front-202304-bcn&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Ruben-Ramirez-Final-Project-front-202304-bcn)

## Introduction

Welcome to the FIGURAniS project! This is a private collection management application specifically designed for anime collectibles. In this project, you can add, remove, create, and view anime figures in your collection. The application provides various features such as authentication, figure listing, figure details, figure addition and modification forms, error and success modals, and a 404 page.

You can access the live version of the project here.

- https://ruben-ramirez-final-project-front-202.netlify.app/figures

## Technologies Used

The FIGURAniS project utilizes the following technologies:

### Front-end:

- React: A JavaScript library for building user interfaces.
- React Router: A routing library for React applications.
- Redux Toolkit: A state management solution for React applications.
- Axios: A promise-based HTTP client for making API requests.
- Styled Components: A CSS-in-JS library for styling React components.
- Fontsource: A library for easily importing and using web fonts in projects.

### Development and Build Tools:

- https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E Vite: A fast development build tool.
- https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white TypeScript: A typed superset of JavaScript.
- https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white Eslint: A pluggable linting utility for JavaScript and TypeScript.
- https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E Prettier: An opinionated code formatter.
- Vitest: A test runner for Vite.
- Husky: A Git hooks library.
- Commitlint: A linting library for commit messages.

# Installation

To run the FIGURAniS project locally, follow these steps:

#### 1 - Clone the repository:

- git clone https://github.com/isdi-coders-2023/Ruben-Ramirez-Final-Project-front-202304-bcn

#### 2 - Install the dependencies:

- cd project-folder

- npm install

#### 3 - Start the development server:

- npm run dev

# Figure Properties

### Each figure in the collection has the following properties:

- Image: The URL or path to the image representing the figure.
- Purchased: Indicates whether the figure has been purchased.
- Manufacturer: The manufacturer or brand of the figure.
- Franchise: The franchise to which the figure belongs.
- Character: The character associated with the figure.
- Material: The material used to make the figure.
- Title: The title or name of the figure.
- Weight: The weight of the figure.
- Price: The price of the figure.
- Size: The size of the figure.

# API Documentation

The figuranis project will connect to a custom API to retrieve and update figure data. The API documentation will be provided separately.

Feel free to explore the live version of the project and manage your anime figure collection. Enjoy!
