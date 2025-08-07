# GitHub Profile Visualiser

A web application for visualizing GitHub user profiles with intuitive, data-driven charts. Designed to provide insights into user activity, repository language usage, and contribution trends through clean and responsive UI.

---

## 🧭 Overview

The GitHub Profile Visualiser fetches and analyzes public data from the GitHub API, transforming it into actionable visual insights. Built with modern frontend tools, the application focuses on performance, scalability, and developer ergonomics.

---

## 🔧 Tech Stack

- **React** – Component-based UI framework
- **Vite** – Fast bundler and dev server
- **Tailwind CSS** – Utility-first styling
- **Recharts** – Declarative charting library
- **GitHub REST API** – Data source

---

## ✨ Features

- Search for any public GitHub profile
- Analyze commit activity across quarters
- Visualize language usage across repositories
- Interactive pie and bar charts for quick insights
- Responsive layout optimized for both desktop and mobile

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/KalyadapuVamshiKrishna/github_profile_visualiser.git
cd github_profile_visualiser
npm install
Create a .env file in the project root:
```
```env
VITE_GITHUB_API_KEY=your_personal_access_token_here
```
Start the development server:
```bash
npm run dev
```
⚠️ Note: GitHub's API imposes rate limits on unauthenticated requests. A personal access token is recommended for stable usage. This should never be committed to version control.

🛠️ Project Structure
```
src/
├── components/        // Modular, reusable UI components
├── services/          // API abstraction layer
├── assets/            // Static assets (e.g., logos)
├── App.jsx            // Main app shell
├── main.jsx           // Application entry point
└── index.css          // Tailwind base styles
```
🌐 Deployment
You can deploy this app on any static hosting service like Vercel, Netlify, or GitHub Pages.

npm run build
vercel deploy
Ensure your VITE_GITHUB_API_KEY is added in Vercel's environment variables.
