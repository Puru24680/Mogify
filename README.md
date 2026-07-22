# Mogify

Mogify is a premium AI appearance coach built with React, Vite, Tailwind CSS v4, Framer Motion, React Router, and Lucide React.

It is positioned as a professional SaaS product for appearance analysis, grooming guidance, hairstyle suggestions, skincare planning, and progress tracking.

## Current Status

The frontend is complete and production-ready.

The backend and database are not integrated yet. Current auth, profile, analysis history, and mock scoring are handled client-side with `localStorage` so the product can be used and demonstrated without an API.

## What’s Implemented

### Public Experience

- Premium landing page with animated hero section
- Glassmorphism navigation
- Feature section
- How it works section
- Testimonials section
- FAQ section
- Call to action section
- Responsive footer

### Authentication

- Login page
- Register page
- Client-side protected routes
- Persisted auth session in `localStorage`

### Workspace

- Dashboard page
- Analysis page
- History page
- Profile page
- 404 page
- Sidebar and topbar workspace shell

### Analysis Flow

- Image upload
- Image preview
- Loading state
- Overall score card
- Facial symmetry breakdown
- Jawline breakdown
- Eyes breakdown
- Hair breakdown
- Skin breakdown
- Additional presence and grooming signals
- Hairstyle recommendations
- Beard recommendations
- Fashion suggestions
- Skincare routine recommendations
- Saved analysis history

### UI and Motion

- Framer Motion transitions
- Fade up animations
- Fade in animations
- Hover lift interactions
- Button scale states
- Responsive layout across mobile, tablet, and desktop
- Soft gradients and glassmorphism surfaces
- Inter typography setup

## Feature Summary

- AI-powered appearance analysis
- Professional appearance coaching
- Grooming guidance
- Hairstyle recommendations
- Skincare suggestions
- Fashion direction
- Progress tracking
- History timeline
- Profile management
- Protected dashboard experience

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- React Router DOM
- Framer Motion
- Lucide React

## Routes

- `/` Home
- `/login` Login
- `/register` Register
- `/dashboard` Dashboard
- `/analysis` Analysis
- `/history` History
- `/profile` Profile
- `*` 404

## Project Structure

```text
mogify/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Backend and Database Work Still Needed

To turn this into a full production SaaS, the next integration layer should add:

- Real authentication API
- Database-backed user profiles
- Database-backed analysis history
- Image storage upload pipeline
- AI analysis service endpoint
- Persistent progress metrics
- Session/token refresh flow

## Notes

- The current frontend is intentionally self-contained for demo and portfolio use.
- The production build passes successfully.
- The app is already structured to accept a backend without needing a redesign of the UI layer.
