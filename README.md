# 🚗 OBD-II Diagnostic Tool - Car Diagnostic Desktop App

A professional-grade desktop application for reading and interpreting OBD-II diagnostic trouble codes (DTCs), built using **Tauri**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## 📦 Tech Stack

- ⚙️ **Tauri** (Rust backend)
- ⚛️ **React** (frontend UI)
- 🧠 **TypeScript** (strict typing)
- 🎨 **Tailwind CSS** (modern utility-first styling)
- 🔍 **Fuse.js** (fuzzy search)
- 🛠️ **Heroicons** (SVG icons)

---

## 🎯 Features

### 🔍 Diagnostics
- **Instant Search** by code or description
- **850+ OBD-II codes** with severity levels
- **Code filtering** by category and type
- **Detailed views** with common causes and solutions
- **Visual badges** for severity and system type

### 💻 UI
- Clean and modern layout optimized for automotive use
- Filter panel and sidebar navigation.
- Export diagnostics as PDF or text report (planned)

---

## 🏗️ Project Structure

obd2-diagnostic-tool/
├── src/
│ ├── components/ # React UI components
│ ├── hooks/ # Custom React hooks
│ ├── types/ # TypeScript interfaces
│ ├── utils/ # Utility functions (e.g. export, parsing)
│ ├── data/ # Static JSON data (DTCs)
│ ├── App.tsx # Root component
│ ├── main.tsx # React DOM entry point
│ └── index.css # Tailwind CSS entry
├── src-tauri/ # Tauri Rust backend
│ ├── src/
│ │ ├── main.rs # Entry point for Rust
│ │ └── commands/ # Tauri commands (optional)
│ ├── icons/ # Application icons
│ └── tauri.conf.json # Tauri config
├── tailwind.config.js # Tailwind theme and plugin setup
├── vite.config.ts # Vite development config
├── tsconfig.json # TypeScript config
├── package.json # Project scripts and dependencies
├── yarn.lock # Yarn lock file
└── README.md # You are here

yaml
Copy
Edit

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- Yarn v1 (classic)
- Rust & Cargo
- Tauri CLI

### Setup Commands

```bash
# Create project (already done)
yarn create vite obd2-diagnostic-tool --template react-ts
cd obd2-diagnostic-tool

# Install dependencies
yarn install

# Add Tauri
yarn add -D @tauri-apps/cli
yarn add @tauri-apps/api
yarn tauri init

# Add styling and icons
yarn add -D tailwindcss postcss autoprefixer @tailwindcss/forms
yarn dlx tailwindcss init -p
yarn add @heroicons/react

# Add search engine
yarn add fuse.js

# Add type definitions
yarn add -D @types/react @types/react-dom
### 🧪 Development
# Run frontend only
yarn dev

# Build frontend
yarn build

# Preview frontend
yarn preview

# Build native app
yarn tauri:build

# Clean cache (if needed)
yarn cache clean
🎨 Design Standards
Fonts: Poppins, Inter, JetBrains Mono

Colors: Custom diagnostic, error, warning, success themes

Sizes: Font sizes scaled up 15% for better readability in desktop apps

UI Kit: Tailwind + Heroicons

## 🎨 Design Standards

🔐 License
This project is licensed under the MIT License © Abdulwahed Mansour 2025

💬 Contact
For feature requests or contributions, feel free to open an issue or email:
📧 abdulwahed.mansour@gmail.com

yaml
Copy
Edit

---

Let me know if you want a version in **Arabic**, a **dark mode screenshot**, or a **PDF export** of the README.
