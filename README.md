# Eco Quiz App (Elia Bordoni typescript and react Project)

aggiungere link qui

# Indice

1. Description
2. Installation
3. Usage guide
4. Configuration
5. Contributing
6. License
7. Tecnologies

# 1. Description

This project is an environmental and global warming themed quiz. It aims to make people more aware of this major current issue in a simple yet entertaining way. The quiz consists of 10 multiple-choice questions, each with 4 possible answers, of which only one is correct. At the end of the test, the result is shown along with a brief comment, and the option to retake the test is provided.

# 2. Installation

This project was created using React and TypeScript with the Vite setup.

-   To download this, open your terminal and text "git clone https://github.com/eliab256/progetto-Typescript-e-React-di-Elia-Bordoni.git".
-   When you download it, you will find all the source files (src/), configuration files (vite.config.ts, tsconfig.json), and package.json,
    which lists the required ependencies, already included.
-   However, the actual dependencies (such as Vite, React, TypeScript, and other libraries) and the node_modules folder are not included and need to be generated.
    After downloading the project, you need to run npm install to install all the dependencies on your own and be able to run the project locally.
-   Now it’s time to download the external libraries. In this project, I used Redux Toolkit and React Router DOM.
    Redux toolkit installation: npm install @reduxjs/toolkit react-redux
    React Router DOM installation: npm install react-router-dom
-   Before you start working, make sure you have installed Prettier for code formatting, which will follow the guidelines found in the `.prettierrc.json` file.
    to install prettier text this on your terminal npm install --save-dev prettier
-   To start the development server, text: npm run dev. You will see the link to run the application, should be this http://localhost:5173/

Now you are ready to work on it.

# 3. Usage Guide

## The main components are:

1. App: The main component that manages the app's state and renders the different pages.
2. StartingPage: The initial page that presents the quiz and provides a description.
3. QuizPages: The page that displays the quiz questions and the button to proceed to the next question.
4. QuizCard: A component that shows a single quiz question and its corresponding answers.
5. EndingPage: The final page that displays the quiz results and provides feedback.

## Navigation in the App

The navigation within the app is designed to be user-friendly and intuitive, allowing users to easily move between different sections. Here’s how the navigation works:
StartingPage: When the app is launched, the StartingPage is displayed, introducing the topic of the quiz and providing instructions. Click the "Quiz Start" button to begin the quiz.
QuizPages: Once the quiz starts, you will be taken to the QuizPages, where you can see the first question. Each question is accompanied by a set of multiple-choice answers. After selecting an option, click the "Next question" button to proceed to the next question. If you try to continue without selecting an option, an error message will be shown.
EndingPage: At the end of the quiz, the EndingPage will be displayed, showing the number of correct answers and the percentage score. A congratulatory message is provided based on your performance in the quiz. You can restart the quiz by clicking the "Restart Quiz" button.

## Styles and Resources

All the styles in the app are managed through CSS. The images used in the quiz are located in the assets/Image folder, while the styles are found in the assets/Styles folder. Each component has its own individual CSS file.

## State managment

The application uses Redux to ensure centralized and scalable management of information. The project structure includes a `store` folder, which contains an `index.tsx` file for configuring the store and several slice files to manage specific states.
store/
├── index.tsx Redux store configuration
├── AnswersState.ts Manages the answers provided by users, the score of correct answers, and the response status.
├── ErrorsState.ts Management of errors when try to go ahead without give an answer
├── QuizState.ts Management of quiz state to moving around staring, quiz and ending pages
└── StatusState.ts Management of loading state and global errors

## Props

I created a dedicated file for the questions and answers that are passed via props. This file is located in the `data` folder and is called `dataQuiz`. It also includes the interface to ensure that there are no errors in the data passing.

# 5. Contributing

Thank you for your interest in contributing to the Environmental Quiz App! Every contribution is valuable and helps improve the project.
There are various ways you can contribute:

-   Bug Fixes: If you find a bug, feel free to submit a fix.
-   Adding New Features: Propose new features or improvements.
-   Documentation: Help improve the documentation by writing guides or enhancing existing ones.
-   Translations: Contribute by translating the app into other languages.
-   Testing and Refactoring: Run tests on the code and suggest improvements.
    How to Submit a Contribution
    Fork the repository: Click the "Fork" button in the upper right corner to create a copy of the repository in your GitHub account.
-   Clone your fork: git clone https://github.com/eliab256/progetto-Typescript-e-React-di-Elia-Bordoni.git
-   Create a Branch: git checkout -b branch-name
-   Make your change and test: npm test
-   Add and commit your change:
    git add .
    git commit -m "Descrizione delle modifiche
-   Send your branch to the fork: git push origin nome-branch
-   Create a pull request

Final Tips

-   Clarity: Ensure that the instructions are clear and easy to follow.
-   Test the Process: If possible, test the contribution process from an external perspective to ensure it flows smoothly.
-   Keep It Updated: Update this section if the guidelines change or if the project evolves.

# 6. License

This project is licensed under the MIT License. See the [License.txt](LICENSE) file for details.

# 7. Tecnologies

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
```

-   Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-   Optionally add `...tseslint.configs.stylisticTypeChecked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
    // Set the react version
    settings: { react: { version: '18.3' } },
    plugins: {
        // Add the react plugin
        react,
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
    },
});
```
