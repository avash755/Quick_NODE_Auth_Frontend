# Reusable Collection Authentication Frontend

A React and Vite frontend for the Reusable Collection authentication API. It provides signup, email OTP verification, login, password reset, protected user access, and a users list.

This project uses React Router for navigation, Axios for API requests, and Tailwind CSS for styling.

## Features

- Signup form with backend validation messages
- Email OTP verification
- Login with username or email
- Cookie-based session support
- Protected `/user` route
- Session check through `/api/auth/me`
- Password-reset screen
- User list fetched from the protected backend endpoint
- 404 page for unknown routes

## Requirements

- Node.js 20 or later
- npm
- The Reusable Collection Authentication API running locally

## Installation

1. Clone this repository and open the frontend folder:

   ```bash
   git clone <your-frontend-repository-url>
   cd signUpLoginFrontend
   ```

2. Install all dependencies:

   ```bash
   npm install
   ```

   This installs React, React Router, Axios, Vite, Tailwind CSS, and the packages listed in `package.json`.

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

4. Open the local address printed by Vite. The standard address is:

   ```text
   http://localhost:5173
   ```

5. Start the backend separately on `http://localhost:3000` before using signup, login, OTP, password reset, or user-list features.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts Vite’s local development server. |
| `npm run build` | Creates a production build in `dist/`. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Runs Oxlint. |

## Backend connection

The current frontend API calls use:

```text
http://localhost:3000/api/auth
```

Run the backend first, then use the frontend at `http://localhost:5173`. The backend CORS setting must allow this exact frontend origin and credentials.

Protected requests must include the HTTP-only login cookie:

```js
axios.get("http://localhost:3000/api/auth/users", {
  withCredentials: true
});
```

Use the same option for signup, OTP verification, login, logout, and session checks.

## User flow

1. Go to `/signup` and create an account.
2. Check email for the OTP.
3. Submit the OTP at `/otp`.
4. Log in at `/login`.
5. A successful login redirects to `/user`.
6. The protected route checks the session with `/api/auth/me`; an expired or missing session redirects to `/login`.

## Routes

| Route | Page |
| --- | --- |
| `/` | Redirects to `/user`. |
| `/signup` | Create an account. |
| `/otp` | Verify an email OTP. |
| `/login` | Sign in. |
| `/forget-password` | Reset password flow. |
| `/user` | Protected user list. |
| Any other route | 404 page. |

## Project structure

```text
signUpLoginFrontend/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── pages/
│       ├── Signup.jsx
│       ├── Otp.jsx
│       ├── Login.jsx
│       ├── ForgetPassword.jsx
│       └── User.jsx
├── vite.config.js
└── package.json
```

## Production notes

Before deployment, update the API URL used by Axios, allow the deployed frontend URL in backend CORS, use HTTPS, and set backend `NODE_ENV=production`. Never expose backend secrets in frontend files or public environment variables.

## Open-source use and contributions

You may use this frontend as a learning starter or customize it for your own authentication UI. Before publishing a fork, add a license that states how you want others to reuse it.

Issues and pull requests are welcome. Do not commit `.env` files, API keys, private URLs, or user data.

## Roadmap

I will improve this authentication frontend whenever I have free time, aiming for frequent daily progress instead of waiting for monthly updates.
