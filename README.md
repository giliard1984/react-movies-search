# Movies Search Engine

The purpose of this project, is to showcase a few interesting concepts around React.
* For instance, a useDebounce hook is used to prevent users from hammering the endpoint.
* Some important states and methods are placed at the Context API level.
* Also, the use of the Outlet is leveraged here (It abstracts the layout component logic, so the children are injected into it, providing a new component (High-Order Components concept).
* Lets not forget about the infinite scroll implementation, making the interation a little bit better for users.


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


## Next steps

This section aims to express the points that are either missing, or should be implemented, for this project to function better.

* [ ] Implement skeleton, so when loading the new data, we can see it in a more friendly way
