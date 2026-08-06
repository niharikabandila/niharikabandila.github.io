# Niharika Bandila Portfolio

![Built with Vite](https://img.shields.io/badge/built%20with-Vite-646cff?logo=vite&logoColor=white)
![Made with React](https://img.shields.io/badge/made%20with-React-61dafb?logo=react&logoColor=white)

A professional portfolio website built with React and Vite. The site presents technical skills, work experience, featured projects, certifications, and contact details in a polished, modern interface.

## Live Demo

- https://niharikabandila.github.io/

## Overview

This portfolio is designed to provide a strong professional presence online by combining:

- an elegant responsive layout
- animated section transitions
- clearly organized experience and skills
- a modern dark visual style
- easy contact access for recruiters and collaborators

## Key Features

- Responsive portfolio sections for desktop and mobile
- Animated content transitions with Framer Motion
- Tailwind CSS-based styling for consistency and maintainability
- Component-driven interface for reusable structure
- Icon support through `lucide-react` and `react-icons`

## Technology Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- React Icons

## Project Structure

- `src/App.jsx` — primary application layout and section rendering
- `src/components/` — reusable portfolio components
- `src/index.css` / `src/App.css` — global and component styles
- `index.html` — application shell and root mount point

## Setup

### Prerequisites

- Node.js
- pnpm

### Install Dependencies

```bash
pnpm install
```

### Run Locally

```bash
pnpm dev
```

Then open the local URL shown in the terminal.

### Build for Production

```bash
pnpm build
```

### Preview the Production Build

```bash
pnpm preview
```

## Deployment

This portfolio is ready for static hosting and can be deployed on GitHub Pages, Vercel, or Netlify.

### GitHub Pages

1. Publish the repository on GitHub.
2. In repository settings, enable Pages and set the source to the `main` branch with `/ (root)`.
3. Build the site:

```bash
pnpm build
```

4. Deploy the `dist/` directory.

### Vercel

1. Import the repository into Vercel.
2. Select `Vite` as the framework.
3. Set the build command to `pnpm build` and the output directory to `dist`.

### Netlify

1. Connect the repository to Netlify.
2. Set the build command to `pnpm build`.
3. Set the publish directory to `dist`.

## Scripts

- `pnpm dev` — start the development server
- `pnpm build` — create a production build
- `pnpm preview` — preview the production build locally
- `pnpm lint` — run ESLint across the project

## Notes

This repository is structured for easy maintenance and future content updates. Add new work samples, certifications, or personal branding content as needed.
