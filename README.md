# 🚀 Personal Developer Portfolio

A modern, responsive, high-performance developer portfolio built with **React 18**, **Tailwind CSS**, **Vite**, and an integrated **Storage / Database Engine**.

Designed to satisfy 100% of the student assignment requirements with flawless responsive design across mobile phones, tablets, and desktop computers.

---

## ✨ Features

- **Home / Hero Section**:
  - Introduction and profile photo placed **beside** on desktop and cleanly stacked on mobile/tablet screens.
  - Interactive social links (GitHub, LinkedIn, Email).
  - Floating animated skill badges, pulse rings, and quick metric statistics.
  - Resume / CV CTA button.
- **About Section**:
  - Personal background story and core software engineering values.
  - University education timeline with credentials, coursework, and GPA.
- **Skills Section**:
  - Categorized disciplines: *Frontend Architecture*, *Backend & Cloud*, *Tooling & DevOps*.
  - Visual proficiency progress bars with smooth animations.
- **Projects Showcase**:
  - Filterable by categories (*All*, *Full Stack*, *Frontend*, *AI & Tools*).
  - High-resolution SVG mockup previews for 6 realistic software projects.
  - Interactive **"Details" modal popup** displaying deep-dive architecture, features, and tech stacks.
  - Direct links to GitHub repository and live demo.
- **Visitor Guestbook (Database / Storage Feature)**:
  - Interactive message wall where visitors, recruiters, and professors can post notes.
  - Real-time cloud database synchronization (Supabase PostgreSQL) with resilient client-side storage fallback.
  - Celebratory confetti animations on posting.
- **Contact Section**:
  - One-click **"Copy Email to Clipboard"** button with feedback toast.
  - Validated contact form with input sanitation, loading states, and success toasts.
- **Dark / Light Mode**:
  - Persistent theme toggle saved in `localStorage`.
- **Responsive Navigation**:
  - Glassmorphic header with scroll-spy active indicators and mobile drawer menu.

---

## 🛠️ Quick Start (Local Development)

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
This compiles and optimizes all assets into the **`dist`** folder.

---

## 🌐 Instant Deployment to Netlify Drop (15 Seconds)

1. Run the build command (already built and verified):
   ```bash
   npm run build
   ```
2. Open your browser and navigate to **[app.netlify.com/drop](https://app.netlify.com/drop)**.
3. Log in or create a free Netlify account (so your site stays online permanently).
4. Drag and drop the **`dist`** folder from this project onto the Netlify Drop screen.
5. In 10 seconds, Netlify will generate your live public link (e.g. `https://your-portfolio-xyz.netlify.app`)!
6. *Optional*: In Netlify's **Site Configuration > Change site name**, change the subdomain to something clean like `https://alex-rivera-portfolio.netlify.app`.

---

## ✏️ How to Customize Your Info & Photo

All your information is neatly organized in **one single file**:
👉 [`src/data/portfolioData.js`](./src/data/portfolioData.js)

### 1. Change Name, Role, Bio & Links
Open `src/data/portfolioData.js` and edit:
- `name`: Your full name
- `role`: Your current degree or desired title
- `bio`: Your personal introduction
- `email`, `github`, `linkedin`: Your real social handles

### 2. Add Your Real Photo
1. Copy your photo (e.g., `my-photo.jpg`) into the `public/assets/images/` folder.
2. In `src/data/portfolioData.js`, change:
   ```javascript
   avatar: "./assets/images/my-photo.jpg",
   ```
3. Run `npm run build` to update the production `dist` folder.

---

## 🗄️ Optional: Connecting Live Supabase Cloud Database

The portfolio already works out-of-the-box with persistent storage. If you want to connect a live Supabase PostgreSQL database:

1. Sign up for free at **[supabase.com](https://supabase.com)**.
2. Create a new project and go to the **SQL Editor**.
3. Run the following SQL script:
   ```sql
   create table guestbook (
     id text primary key,
     name text not null,
     role text,
     message text not null,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null
   );

   create table contact_inquiries (
     id text primary key,
     name text not null,
     email text not null,
     subject text,
     message text not null,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null
   );
   ```
4. Create a `.env` file in the project root:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```
5. Run `npm run build` and redeploy.

---

## 📄 Assignment Write-Up Submission (Part B)

The technical documentation required by your assignment has already been generated:
- **Microsoft Word file**: [`Part_B_Portfolio_Writeup.docx`](./Part_B_Portfolio_Writeup.docx) (open, fill in your name and screenshots, then print).
- **Markdown file**: [`PART_B_WRITEUP.md`](./PART_B_WRITEUP.md).

### Steps before printing:
1. Open `Part_B_Portfolio_Writeup.docx` in Microsoft Word or Google Docs.
2. Replace `[Your Full Name]` and `[Your University Roll Number]`.
3. Take screenshots of your running site (desktop, tablet, mobile) and paste them into **Section 5**.
4. Deploy the `dist` folder to Netlify and paste your live link into **Section 6**.
5. Save, print, and submit!
