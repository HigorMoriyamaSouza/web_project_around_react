# Tripleten web_project_around_react

# Around the U.S. — React

A responsive social-style web application built with React and integrated with an external REST API.

This project is a React modernization of the **Around the U.S.** application. It allows users to manage profile information and interact with a collection of image cards while practicing component-based architecture, React state management, Context API, asynchronous API requests, and reusable UI components.

## Features

- Load user profile information from the API
- Edit the user's name and description
- Update the user's avatar
- Load image cards from the API
- Add new cards
- Delete cards
- Like and unlike cards
- Open card images in a preview popup
- Reusable popup and card components
- Shared user data through React Context
- Responsive layout for desktop, tablet, and mobile screens
- REST API integration for profile and card operations

## Technologies

- React 19
- JavaScript ES6+
- Vite
- HTML5
- CSS3
- React Context API
- React Hooks (`useState`, `useEffect`, `useContext`)
- Fetch API
- REST API
- ESLint
- BEM-style CSS organization

## React Architecture

The application is divided into reusable React components and keeps API communication separated from presentation logic.

Key responsibilities include:

- `App.jsx` — application-level state, API operations, popup state, card state, and user context provider
- `Main.jsx` — profile and card-list rendering and popup selection
- `Card.jsx` — individual card rendering and card interactions
- `Popup.jsx` — reusable popup container
- `EditProfile.jsx` — profile editing form
- `EditAvatar.jsx` — avatar editing form
- `NewCard.jsx` — new-card form
- `CardImage.jsx` — enlarged card-image preview
- `CurrentUserContext.js` — shared current-user data and update handlers
- `Api.js` — REST API communication layer

## Project Structure

```text
src/
├── blocks/                     # Component and layout styles
├── components/
│   ├── App.jsx
│   ├── Header/
│   ├── Footer/
│   └── Main/
│       ├── Main.jsx
│       └── components/
│           ├── Card/
│           └── Popup/
│               ├── Popup.jsx
│               └── components/
│                   ├── CardImage/
│                   ├── EditAvatar/
│                   ├── EditProfile/
│                   └── NewCard/
├── contexts/
│   └── CurrentUserContext.js
├── utils/
│   └── Api.js
├── vendor/
├── index.css
└── main.jsx
```

## API Integration

The application communicates with the TripleTen Around the U.S. REST API through the `Api` class.

Implemented API operations include:

- Get current user information
- Update profile information
- Update avatar
- Get cards
- Create a card
- Delete a card
- Like a card
- Remove a like from a card

API responses are used to update React state so that the interface reflects changes made by the user.

## Getting Started

### Prerequisites

Install a current version of Node.js and npm.

### Installation

Clone the repository:

```bash
git clone https://github.com/HigorMoriyamaSouza/web_project_around_react.git
```

Enter the project directory:

```bash
cd web_project_around_react
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The Vite development server is configured to run on port `3000`.

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run lint
```

Runs ESLint against the JavaScript and JSX source files.

```bash
npm run preview
```

Runs a local preview of the production build.

## What This Project Demonstrates

This project demonstrates practical experience with:

- Migrating a JavaScript application to React
- Component-based frontend architecture
- State-driven UI rendering
- Passing data and callbacks through props
- Sharing application data with React Context
- Handling asynchronous API requests
- Synchronizing server data with application state
- React form state management
- Reusable modal components
- Responsive frontend development
- Separation of API and UI responsibilities

## Repository

[GitHub — web_project_around_react](https://github.com/HigorMoriyamaSouza/web_project_around_react)

## Author

**Higor Moriyama Souza**

- GitHub: [HigorMoriyamaSouza](https://github.com/HigorMoriyamaSouza)
- LinkedIn: [higormoriyamasouza](https://www.linkedin.com/in/higormoriyamasouza)
