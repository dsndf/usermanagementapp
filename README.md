# User Management App

A user management application that provides functionality for viewing, filtering, searching, editing, and deleting users. It includes pagination for the user list and uses Context API for global state management. Authentication is handled via session tokens stored in local storage.

## Features

- **User List**: View a list of users with pagination support.
- **Filter & Search**: Filter users based on certain criteria and search by name or email.
- **Edit & Delete**: Admins can edit or delete users.
- **Authentication**: Session management using local storage for token storage.
- **Global State Management**: Utilizes React's Context API for managing global state.

## Project Structure

The project is powered by **React** and **Vite** for a fast development experience. **Tailwind CSS** is used for styling, while **Axios** is employed for API calls. The app is set up with **React Router** for routing and **Context API** for global state management.

## Tech Stack

- **React 18.3.1**
- **Vite** as the build tool
- **Tailwind CSS** for styling
- **Axios** for handling API requests
- **React Router DOM** for routing
- **Context API** for state management
- **Local Storage** for token-based session management

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**


## Run Locally

Clone the project

```bash
  git clone https://github.com/dsndf/usermanagementapp
```

Go to the project directory

```bash
  cd usermanagementapp
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Building the Project

To build the project for production:

```bash
  npm run build
```

## Linting the Project

Run the lint command to check for issues:

```bash
  npm run lint
```

## Assumptions and Considerations

- **Session Management**: The application uses local storage to store session tokens for authentication purposes. No server-side session management is implemented.
- **Authentication**: The project assumes a valid token is stored in local storage after a successful login. This token is required for authenticated API calls.
- **Pagination**: Implemented to handle large datasets efficiently.
- **Global State Management**: Managed using React's Context API to maintain consistent user data and session states across the app.
- **API Integration**: Axios is used for handling API requests. The project assumes the necessary API endpoints are pre-configured and respond with expected data formats.

## Future Enhancements

- **Role-based Access Control**: Implement fine-grained access control to restrict actions like editing and deleting users based on the user's role (e.g., admin, editor, etc.).
- **Server-side Session Management**: To improve security, session tokens can be managed on the server side instead of relying solely on local storage for token storage.
- **Error Handling**: Enhance the application with robust error handling mechanisms for failed API calls to provide better user feedback and improve debugging.

## Demo

https://usermanagementapp-epb5.onrender.com

## License


This structure uses the same format for every step. Let me know if any further tweaks are needed!


