User Management App
This project is a User Management App built using React, Vite, and Tailwind CSS. It includes features such as user interaction, routing, and modal handling.

Features
React for building the UI.
Vite for fast builds and development environment.
Tailwind CSS for styling.
Axios for API requests.
React Router for managing navigation and routes.
React Icons for integrating icons.
React Hot Toast for providing notifications.
Responsive Modals using react-responsive-modal.

Pages
/: Users List
/edit/user/:id
: Edit User
/login: Login Page
/notfound: Not Found Page
Prerequisites
Before running the project, ensure you have the following installed on your system:

Node.js (v14 or higher)
npm or yarn

Installation
Clone the repository:

git clone https://github.com/dsndf/usermanagementapp.git

Navigate to the project directory:

cd usermanagementapp

Install dependencies:

Using npm: npm install
Or, using yarn: yarn install

Running the Project
After the dependencies are installed, you can run the project locally.

Start the development server:

Using npm: npm run dev
Or, using yarn: yarn dev
This will start the development server, and the app will be available at http://localhost:3000 (or another port if specified).

Building the app for production:

To build the app for production: npm run build
Or, using yarn: yarn build
The production build will be stored in the dist folder.

Preview the production build:

After building the project, you can preview the build by running: npm run preview
Or, using yarn: yarn preview

Linting
To check and fix the code for any linting errors, use the following command:

npm run lint

Or, using yarn:

yarn lint

Assumptions and Considerations
React Router is used for managing the navigation across different routes/pages.
Tailwind CSS is used for styling, so there are no additional CSS files. You can customize the tailwind.config.js file for theme changes.
Axios is used for making API requests; ensure to configure the base URL and manage API responses properly.
Vite is used as the build tool for its fast and efficient bundling.

Folder Structure
user-management-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/        # Images, logos, and static assets
│   ├── components/    # Reusable UI components
│   ├── pages/         # Pages for each route
│   ├── App.jsx        # Main App component
│   ├── index.jsx      # ReactDOM rendering
├── .eslintrc.js       # ESLint configuration
├── tailwind.config.js # Tailwind configuration
├── package.json       # Project dependencies and scripts
├── vite.config.js     # Vite configuration
└── README.md          # Project documentation
License
This project is licensed under the MIT License.