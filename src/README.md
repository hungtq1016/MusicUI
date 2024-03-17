# Project Structure

The project is organized into several directories, each with a specific role in the application's architecture:

- `assets`: This directory contains all the static files that are used throughout the app, such as images, fonts, and global stylesheets.

- `components`: Here, you'll find Vue.js components that are used across different parts of the application. These are the reusable elements like buttons, input fields, and modals.

- `layouts`: Layout components are used to define different page structures within the app. For instance, you might have a main layout with a navbar and footer that's used across the site.

- `logistics`: Specially tailored for this application, it houses the logic that replaces the typical `.vue` files for pages. It likely includes JavaScript objects or functions that manage the operational parts of the application, such as data handling, interfacing with APIs for logistics operations, and other business logic.

- `middlewares`: Middleware functions in this directory can execute code, make changes to the request and response objects, end the request-response cycle, or call the next middleware in the stack.

- `router`: Contains the Vue Router configuration files, which define the routes and associated components for the application. It controls the navigation between views.

- `stores`: This is where the pinia store files reside. Pinia is used for state management in Vue.js applications. It helps maintain a central source of truth for the app's state.

- `types`: For applications that use TypeScript, this directory would include type definitions and interfaces that help with static type checking throughout the app.

- `utils`: Utility functions and helper scripts that can be used throughout the application to perform common tasks are stored here.

- `views`: Contains the Vue.js components that represent entire pages of the application. In the Vue Router configuration, routes are typically mapped to components in this folder.
