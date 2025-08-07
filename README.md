# GitHub Profile Visualiser 🔍

A sleek, modern web app that visualizes any GitHub user's profile in an insightful and interactive way using charts and clean UI. Just enter a GitHub username and get visual stats of their activity, languages, and repositories.

---

## 🚀 Features

- 🔎 Search any GitHub user's public profile
- 📊 Visualize:
  - Commit frequency by quarter
  - Most used languages
  - Language distribution per repository
- 📂 See repository names and basic metadata
- 🌙 Dark/light theme ready (optional)
- ⚡ Fast and responsive – built with React + Tailwind CSS + Recharts

---

## 📸 Demo

> Coming soon — deploy it on **Vercel** or **Netlify** and add your link here.

---

## 🛠️ Tech Stack

| Tech         | Description                        |
|--------------|------------------------------------|
| React        | Frontend framework                 |
| Tailwind CSS | Utility-first CSS styling          |
| Recharts     | Data visualization (charts, graphs)|
| GitHub API   | Data source for profiles and repos |
| Vite         | Build tool for faster development  |

---

## 📦 Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/KalyadapuVamshiKrishna/github_profile_visualiser.git

# 2. Move into the directory
cd github_profile_visualiser

# 3. Install dependencies
npm install

# 4. Add your GitHub API key in a .env file
echo "VITE_GITHUB_API_KEY=your_github_token_here" > .env

# 5. Start the development server
npm run dev
