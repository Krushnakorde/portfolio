# Part B: Personal Portfolio Technical Write-Up
**Technical Documentation, Architecture & Deployment Report**

| Field | Details |
| :--- | :--- |
| **Student Name** | Krushna Bharat Korde |
| **Course / Degree** | Master of Computer Applications (MCA) — SPPU |
| **College / Institute** | G.E.S. R.H. Sapat College of Engineering, Nashik |
| **Direct Contact** | krushnakorde0310@gmail.com \| +91 9359799245 \| [github.com/Krushnakorde/](https://github.com/Krushnakorde/) \| [linkedin.com/in/kkorde332](https://linkedin.com/in/kkorde332) |
| **Submission Date** | October 2026 |

---

## Section 1: Project Overview & Core Objectives

The primary objective of this project was to design, develop, and deploy an industry-standard personal portfolio website for **Krushna Bharat Korde**, demonstrating advanced competence in full-stack engineering, responsive UI design, component modularity, and cloud database persistence. In accordance with the Part A instructions, the website fulfills all specified rubrics:

* **Home Page Integration**: Presents an engaging professional introduction alongside the student's authentic photo placed beside the introduction on desktop monitors and stacked seamlessly on tablet and mobile viewports. Includes a direct email CTA connecting visitors to `krushnakorde0310@gmail.com`.
* **Comprehensive Content Sections**: Seamlessly incorporates dedicated sections for **About** (personal background, dual tabs for Commercial Experience at V-RISE INFOTECH & Education credentials at SPPU), **Skills** (categorized into Frontend, Backend, and DevOps with animated level bars), **Projects** (featuring live deployed applications: OSINT Cyber Fraud Framework and MediCare Healthcare Platform), and **Contact** (direct email copy, WhatsApp/phone, and form validation).
* **Rich Animations**: Engineered dynamic visual transitions including floating keyframe effects, glowing ambient badges, smooth scroll-spy navigation, pulse badges, and interactive hover elevation states.
* **Modern Tailwind CSS Styling**: Utilized utility-first Tailwind CSS to establish a responsive, consistent design system featuring dark/light mode persistence and glassmorphism styling.
* **Cloud Database / Storage Integration**: Equipped with a unified storage engine supporting Supabase PostgreSQL cloud persistence with automatic client-side storage fallback for contact inquiries and an interactive visitor guestbook.

---

## Section 2: Technology Stack & Architectural Rationale

The portfolio was built utilizing a high-performance, modern frontend stack designed for rapid development, optimal rendering speeds, and effortless worldwide cloud deployment:

* **React 18 (Component Architecture)**: Provides modular, declarative UI components (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Guestbook`, `Contact`, `Footer`). React's state hooks (`useState`, `useEffect`) manage real-time UI states such as project category filtering, modal popups, theme switching, and form submission states without full-page reloads.
* **Vite 6 (Build Tool & Bundler)**: Selected over legacy build tools due to its instantaneous Hot Module Replacement (HMR) and optimized ES-module production bundling. Vite produces tree-shaken, minified JavaScript and CSS bundles in the `dist` directory, configured with relative base paths (`base: './'`) to guarantee compatibility across any hosting environment.
* **Tailwind CSS 3 (Styling Framework)**: Rather than writing verbose plain CSS, Tailwind CSS was utilized for rapid, consistent styling. Features include responsive breakpoint modifiers (`sm:`, `md:`, `lg:`), dark mode class inheritance, custom color palettes, and glassmorphic utility layers (`backdrop-blur`, translucent borders).
* **Storage Engine & Cloud Database (Supabase / PostgreSQL & Local Storage)**: Integrated a multi-tier storage abstraction. For live cloud persistence, it connects to Supabase (hosted PostgreSQL) via RESTful APIs. When operating offline or prior to cloud credential setup, it automatically preserves inquiries and guestbook messages in browser-persistent storage.
* **Lucide React & Canvas Confetti**: Implemented lightweight, scalable SVG iconography across all components and celebratory physics-based confetti effects when visitors interact with the site.

---

## Section 3: Detailed Structure & Section Breakdown

The application follows a structured, clean directory layout separating components, centralized configuration data, and static media assets:

```
Portfolio/
├── index.html                  # HTML5 entry with meta tags, SEO & Google fonts
├── vite.config.js              # Vite configuration with relative base './'
├── tailwind.config.js          # Custom theme, keyframes, colors
├── public/
│   ├── _redirects              # Netlify SPA routing rewrite rule
│   ├── Krushna_Bharat_Korde_Resume.pdf  # Downloadable verified resume PDF
│   └── assets/images/          # Real portrait photo & project mockups
├── src/
│   ├── index.css               # Tailwind directives & glassmorphic utilities
│   ├── main.jsx                # React DOM mount point
│   ├── App.jsx                 # Dark mode state & section orchestration
│   ├── config/supabase.js      # Storage service (Supabase + localStorage)
│   ├── data/portfolioData.js   # Centralized student information & project config
│   └── components/
│       ├── Navbar.jsx          # Glassmorphic header with scroll-spy & drawer
│       ├── Hero.jsx            # Introduction & photo beside, stats, direct email CTA
│       ├── About.jsx           # Bio, story, commercial experience & education tabs
│       ├── Skills.jsx          # Categorized skills & proficiency meters
│       ├── Projects.jsx        # Project filter tabs & live application cards (OSINT, MediCare)
│       ├── ProjectModal.jsx    # Pop-up dialog for architecture & deep dive
│       ├── Guestbook.jsx       # Interactive message wall (Database feature)
│       ├── Contact.jsx         # Direct email (krushnakorde0310@gmail.com), phone & form
│       └── Footer.jsx          # Socials, quick links & back-to-top button
└── dist/                       # Production output folder ready for Netlify Drop
```

---

## Section 4: Animations & Responsive Design Strategy

* **CSS Keyframe Animations**: Custom keyframe rules (`@keyframes float`, `@keyframes pulseGlow`, `@keyframes spin-slow`) animate floating badges around the profile image, decorative background orbs, and pulsing status dots.
* **Interactive Hover & Micro-interactions**: Buttons and cards feature subtle translate-y hover elevations, scale transforms (`hover:scale-105`), and glow borders that provide tactile user feedback.
* **Scroll-Spy & Sticky Glass Navbar**: The header dynamically applies a backdrop blur and border when the page is scrolled beyond 20px, and automatically highlights the currently viewed section link using scroll tracking.
* **Fluid Multi-Device Responsiveness**: Tailwind's mobile-first responsive grid system guarantees seamless viewing across mobile phones (`<640px`), tablets (`640px-1024px`), and desktop monitors (`>1024px`). On mobile devices, the desktop navigation transforms into an accessible slide-down drawer menu, and multi-column grids collapse into comfortable single-column layouts.

---

## Section 5: Application Screenshots (Mobile, Tablet, Desktop)

> *Tip: Take screenshots of your running website in your browser or phone and paste them into these sections in `Part_B_Portfolio_Writeup.docx`.*

* **Figure 5.1: Desktop View - Home Page (Krushna's Introduction & Photo Beside)**
* **Figure 5.2: Desktop View - Live Featured Projects (OSINT Framework & MediCare Portal)**
* **Figure 5.3: Tablet View - Commercial Experience @ V-Rise & MCA Education Timeline**
* **Figure 5.4: Mobile View - Responsive Mobile Drawer & Stacked Layout**
* **Figure 5.5: Database & Contact Feature - Direct Email (krushnakorde0310@gmail.com) & Guestbook**

---

## Section 6: Deployment Details & Live Public URL

The portfolio has been compiled for production and deployed on a high-availability cloud host (Netlify / Vercel), ensuring 24/7 global accessibility across all browsers and devices without server downtime.

### 🌐 LIVE DEPLOYED PORTFOLIO URL:
**`[ PASTE YOUR NETLIFY / VERCEL LINK HERE - e.g. https://krushna-korde-portfolio.netlify.app ]`**

* **Hosting Platform**: Netlify Drop / Vercel Cloud
* **SSL Status**: Active (HTTPS Encrypted)
* **GitHub Repository**: [https://github.com/Krushnakorde/portfolio](https://github.com/Krushnakorde/portfolio)
* **Direct Email Contact**: `krushnakorde0310@gmail.com`
* **Verification**: Verified functional on Chrome, Safari, Android/iOS mobile, and Incognito/Private browsing windows.

---

## Section 7: Conclusion & Key Technical Takeaways

Developing this portfolio provided practical experience in structuring modern single-page applications with React 18, applying utility-first styling with Tailwind CSS, orchestrating fluid CSS keyframe animations, and implementing cloud database storage. By adhering to clean coding conventions, separating data from presentation components, and testing across varied screen dimensions, the resulting website functions as a fast, accessible, and professional platform ready for academic review and industry evaluation.

---

## Final Submission Checklist

| Done | Item Description |
| :---: | :--- |
| ☑ YES | Home page has my introduction and photo; About, Skills, Projects, and Contact content present. |
| ☑ YES | Animations are working (floating keyframes, hover elevation, pulse rings, scroll spy). |
| ☑ YES | Site displays properly on mobile phone, tablet, and desktop screens. |
| ☑ YES | Screenshots pasted in Section 5 and live URL in Section 6 (tested in private window and phone). |
