# Raahi Frontend

This project contains the frontend code for the Raahi application. Below is a detailed description of the main files and their functionalities.

## Pages

### UserSignup.jsx

This component handles the user signup process. It collects the user's first name, last name, email, and password, and submits the data to create a new user account.

- **State Variables:**
  - `email`: Stores the user's email.
  - `password`: Stores the user's password.
  - `firstName`: Stores the user's first name.
  - `lastName`: Stores the user's last name.
  - `userData`: Stores the user data after form submission.

- **Functions:**
  - `submitHandler`: Handles the form submission, creates a new user object, and resets the form fields.

- **JSX Structure:**
  - A form with input fields for first name, last name, email, and password.
  - A submit button to create the account.
  - A link to the login page for existing users.

### UserLogin.jsx

This component handles the user login process. It collects the user's email and password, and submits the data to log the user into their account.

- **State Variables:**
  - `email`: Stores the user's email.
  - `password`: Stores the user's password.
  - `userData`: Stores the user data after form submission.

- **Functions:**
  - `submitHandler`: Handles the form submission and resets the form fields.

- **JSX Structure:**
  - A form with input fields for email and password.
  - A submit button to log in.
  - A link to the signup page for new users.
  - A link to the captain login page.

### Home.jsx

This component serves as the home page of the application. It provides a link for users to continue to the login page.

- **JSX Structure:**
  - A background image with a title.
  - A button to continue to the login page.

### CaptainSignup.jsx

This component handles the captain signup process. It collects the captain's first name, last name, email, and password, and submits the data to create a new captain account.

- **State Variables:**
  - `email`: Stores the captain's email.
  - `password`: Stores the captain's password.
  - `firstName`: Stores the captain's first name.
  - `lastName`: Stores the captain's last name.
  - `userData`: Stores the captain data after form submission.

- **Functions:**
  - `submitHandler`: Handles the form submission, creates a new captain object, and resets the form fields.

- **JSX Structure:**
  - A form with input fields for first name, last name, email, and password.
  - A submit button to create the account.
  - A link to the captain login page for existing captains.

### CaptainLogin.jsx

This component handles the captain login process. It collects the captain's email and password, and submits the data to log the captain into their account.

- **State Variables:**
  - `email`: Stores the captain's email.
  - `password`: Stores the captain's password.
  - `CaptainData`: Stores the captain data after form submission.

- **Functions:**
  - `submitHandler`: Handles the form submission and resets the form fields.

- **JSX Structure:**
  - A form with input fields for email and password.
  - A submit button to log in.
  - A link to the captain signup page for new captains.
  - A link to the user login page.

## Context

### UserContext.jsx

This file contains the context for managing user data throughout the application. It provides a context provider that stores the user's email and full name.

- **State Variables:**
  - `user`: Stores the user's email and full name.

- **Components:**
  - `UserContext`: Provides the user context to its children components.

- **Usage:**
  - Wrap the `UserContext` around components that need access to user data.
  - Use the `useContext` hook to access and update user data within the context.

