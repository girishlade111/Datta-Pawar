ac# Datta Pawar - Documented Events

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF)
![License](https://img.shields.io/badge/license-MIT-green)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)

A cinematic, visually immersive web application that presents a chronological anthology of documented events, statements, and observations. Built with React, Vite, and Tailwind CSS, featuring smooth animations and a premium dark-themed design.

## 📋 Overview

Datta Pawar is a documentation platform that presents 27 recorded events with visual documentation. The application features a sophisticated dark UI with cinematic imagery, search functionality, and smooth scroll-based animations powered by Framer Motion.

## ✨ Features

- **Cinematic Visual Experience**: Immersive full-width images with cinematic styling
- **Search Functionality**: Real-time search through all documented events
- **Scroll Animations**: Smooth parallax effects and scroll-triggered animations
- **Responsive Design**: Fully responsive across all device sizes
- **Premium UI**: Glass morphism effects, ambient gradients, and refined typography
- **Keyboard Shortcuts**: Press `/` to focus search, `Escape` to clear

## 🚀 Installation

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/girishlade111/Datta-Pawar.git
cd Datta-Pawar
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

4. **Build for production**

```bash
npm run build
```

5. **Preview production build**

```bash
npm run preview
```

## 📁 Project Structure

```
Datta-Pawar/
├── public/
│   └── vite.svg              # Favicon
├── src/
│   ├── assets/
│   │   └── react.svg         # React logo
│   ├── App.css               # Component styles
│   ├── App.jsx               # Main application component
│   ├── index.css            # Global styles and Tailwind
│   └── main.jsx             # Application entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js          # ESLint configuration
├── .gitignore              # Git ignore rules
└── README.md                # This file
```

## 🎨 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI Framework |
| Vite | 7.3.1 | Build Tool |
| Tailwind CSS | 4.2.1 | Styling |
| Framer Motion | 12.34.3 | Animations |
| ESLint | 9.39.1 | Code Linting |

## 🔧 Usage

### Running the Application

```bash
# Development mode with hot reload
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `/` | Focus search input |
| `Escape` | Clear search |

## 🤝 Contributing

We welcome contributions to improve this project! Here's how you can help:

1. **Fork the Repository**
   Click the "Fork" button at the top right of this page

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Datta-Pawar.git
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Ensure all tests pass

5. **Commit Your Changes**
   ```bash
   git commit -m "Add: Description of your changes"
   ```

6. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   Go to the original repository and click "New Pull Request"

### Contribution Guidelines

- **Code Style**: Follow ESLint configuration
- **Commits**: Use clear, descriptive commit messages
- **Testing**: Ensure no linting errors before submitting
- **Documentation**: Update README if adding new features

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Datta Pawar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Contact

For questions or suggestions, please reach out:

- **GitHub**: [girishlade111](https://github.com/girishlade111)
- **Repository**: [Datta-Pawar](https://github.com/girishlade111/Datta-Pawar.git)

## ❓ FAQ

### Q: How do I add more events to the documentation?

**A**: Edit the `eventStatements` array in `src/App.jsx`. Each entry is a string representing a documented event. Add new statements between lines 36-65.

### Q: How can I change the images?

**A**: Modify the `placeholderImages` array in `src/App.jsx` (lines 5-34) with your preferred image URLs.

### Q: How do I customize the color scheme?

**A**: The theme uses CSS variables in `src/index.css`. Key colors include:
- Primary background: `#0c0c0e`
- Accent color: Gold tones (amber-200: `#d4af89`)
- Text colors: White with varying opacity

### Q: Is this application SEO-friendly?

**A**: The current version is a Single Page Application (SPA). For production deployment with SEO, consider adding Server-Side Rendering (SSR) with frameworks like Next.js.

### Q: Can I deploy this to other platforms?

**A**: Yes! The built files in the `dist/` folder can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Q: How do I report bugs?

**A**: Please open an issue on GitHub with:
- Detailed description of the bug
- Steps to reproduce
- Browser and device information
- Screenshots if applicable

## 📝 Changelog

### v1.0.0 (2024-03-01)

#### Added
- Initial release
- 27 documented event entries with cinematic imagery
- Real-time search functionality
- Scroll-based animations using Framer Motion
- Responsive dark-themed UI
- Glass morphism effects
- Keyboard shortcuts (search, escape)
- Premium typography with Inter font

#### Features
- Cinematic image gallery with lazy loading
- Smooth parallax scroll effects
- Animated scroll progress indicator
- Search results dropdown with instant filtering
- Mobile-responsive design

## 🔒 Security

If you discover any security vulnerabilities, please send an email to the repository owner rather than creating a public issue.

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for the cinematic imagery
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com) for styling
- [React](https://react.dev) for the UI framework

---

⭐️ If you found this project useful, please consider giving it a star on GitHub!

<!-- auto-commit: 2026-03-01T12:19:55.568Z -->
 
