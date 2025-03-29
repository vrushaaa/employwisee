# EmployWise React Application (Vite)

## Overview
This is a React application built with Vite, integrating with the [Reqres API](https://reqres.in/) for user management. It fulfills the requirements of the EmployWise assignment, covering authentication, paginated user listing, and CRUD operations, with additional bonus features for an enhanced user experience.

## Features
- **Level 1: Authentication**
  - Login screen with email and password validation.
  - Token persistence in `localStorage` for session management.
- **Level 2: User Listing**
  - Paginated list of users fetched from the Reqres API.
  - Displays first name, last name, and avatar in a responsive card layout.
  - Pagination controls for navigating pages.
- **Level 3: CRUD Operations**
  - Edit user details (first name, last name, email) with pre-filled forms.
  - Delete users from the list with immediate UI updates.
  - Success/error messaging for API operations.
- **Bonus Features**
  - **React Router**: Navigation between Login, User List, and Edit User pages.
  - **Client-Side Search/Filtering**: Search users by name in the user list.
  - **Hosted on GitHub Pages**: Deployed at [employwisee](https://vrushaaa.github.io/employwisee/).

## Setup
To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vrushaaa/employwisee.git
   cd employwise-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/employwise-app/](http://localhost:5173/employwise-app/) in your browser (note the base path).

## Usage
- **Login**: Use the credentials `eve.holt@reqres.in` (email) and `cityslicka` (password) to log in.
- **User List**: Browse users, search by name, and use pagination to navigate.
- **Edit/Delete**: Click "Edit" to modify user details or "Delete" to remove a user.
- **Logout**: Return to the login page via the "Logout" button.

## Technologies Used
- **React**: Frontend framework with hooks (`useState`, `useEffect`, etc.).
- **Vite**: Build tool for fast development and production builds.
- **Tailwind CSS**: Utility-first CSS framework for responsive styling.
- **Axios**: HTTP client for API requests.
- **React Router**: Client-side routing for navigation.
- **GitHub Pages**: Hosting platform for static deployment.

## Assumptions & Considerations
- **API Behavior**: The Reqres API mocks DELETE and PUT responses (returns 204/200 status codes without persisting changes), so edits/deletes are reflected client-side only during the session.
- **Error Handling**: Basic error messages are displayed for API failures and form validation; assumes API responses are consistent.
- **Routing**: GitHub Pages requires a `404.html` redirect workaround for React Router to handle deep links (e.g., `/users`, `/edit/:id`).
- **Styling**: Tailwind CSS ensures responsiveness, tested on desktop and mobile screen sizes.

## Deployment
- **Hosted on GitHub Pages**: [https://yourusername.github.io/employwise-app/](https://yourusername.github.io/employwise-app/)
- **Deployment Process**:
  - Built with `npm run build` and deployed using `gh-pages` (`npm run deploy`).
  - Configured with a custom `base` path (`/employwise-app/`) in `vite.config.js` and `App.jsx` to match the GitHub Pages URL structure.

## How to Deploy
To deploy your own version to GitHub Pages:
1. Update `vite.config.js` and `App.jsx` with your repository name as the `base` path.
2. Set the `homepage` in `package.json` to `https://yourusername.github.io/your-repo-name/`.
3. Run:
   ```bash
   npm run build
   npm run deploy
   ```
4. Configure GitHub Pages in your repository settings to use the `gh-pages` branch.

HOPE Y'ALL LIKE IT!