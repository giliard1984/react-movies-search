# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Technologies involved

For the frontend:
* Vite
* React
* Typescript
* Antd
* Framer Motion
* Infinite scroll

## Setting Up & starting the vue project

For the frontend, please guarantee you have node 20+ installed on your machine.

Please access the `react-movies-search` folder.
Copy the .env.example and name it .env or .env.local
  You will need to obtain an API Read access token token from  TMDB (https://www.themoviedb.org/). By the way, it is free!
Run `yarn install`
Run `yarn run dev`
  This command should start the react project (PORT=5177)
  Frontend: http://localhost:5177/

![image](https://github.com/user-attachments/assets/a69bf0ce-52d6-40a0-b1b6-c76246118564)

![image](https://github.com/user-attachments/assets/cf9919ae-bb4e-4839-960b-771bd72caa19)


