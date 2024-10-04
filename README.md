# Eco Quizz (Elia Bordoni typescript and react Project)

aggiungere link qui

## Indice

1. Description
2. Installation
3. Usage guide
4. Configuration
5. Contributing
6. License
7. Tecnologies

## 1. Description

This project is an environmental and global warming themed quiz. It aims to make people more aware of this major current issue in a simple yet entertaining way. The quiz consists of 10 multiple-choice questions, each with 4 possible answers, of which only one is correct. At the end of the test, the result is shown along with a brief comment, and the option to retake the test is provided.

2. Installation

This project was created using React and TypeScript with the Vite setup.

-   To download this, open your terminal and text "git clone https://github.com/eliab256/Progetto-HTML-e-CSS-di-Elia-Bordoni.git".
-   When you download it, you will find all the source files (src/), configuration files (vite.config.ts, tsconfig.json), and package.json, which lists the required ependencies, already included.
-   However, the actual dependencies (such as Vite, React, TypeScript, and other libraries) and the node_modules folder are not included and need to be generated.
    After downloading the project, you need to run npm install to install all the dependencies on your own and be able to run the project locally.

# React + TypeScript + Vite

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
