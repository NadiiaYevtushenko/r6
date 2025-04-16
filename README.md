# 📦 React Router Basic App (Vite + TypeScript)

This project demonstrates basic client-side routing in React using **React Router DOM**.  
It contains three pages: Home, About, and Contact — and uses `NavLink` for navigation.

---

## 🧩 Features

### 🧭 React Router Setup
- Uses `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`
- Navigation implemented with `NavLink` and active link highlighting
- Three simple components:
    - `/` → Home
    - `/about` → About
    - `/contact` → Contact

### 🖼️ UI
- Simple layout with a horizontal navigation bar
- Light theme with custom blue highlights

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Home.tsx           # Home page
│   ├── About.tsx          # About page
│   └── Contact.tsx        # Contact page
├── App.tsx                # Route definitions and NavLink logic
├── main.tsx               # ReactDOM root entry
├── App.css                # Global styling
├── index.css              # Base style reset
├── Navigation.module.css  # NavLink and navbar styling
├── vite-env.d.ts          # Vite types
└── assets/react.svg       # Default asset (not used)
```

---

## 🚀 Running Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

Open your browser at:  
👉 **http://localhost:5173**

---

## 🌐 Deployment

Deploy on platforms like **Vercel** or **Netlify** for static hosting.

### Example for Vercel:
```bash
npm install -g vercel
vercel
```

---

## 🧠 Technologies Used

- ⚛️ React + TypeScript
- 🧭 React Router DOM
- 🧩 Vite
- 🎨 CSS Modules + base styles

---
## 👉 Live Demo

**Live Deployment:**  
[Vercel Project]()