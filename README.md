# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## 🚀 Live Demo
[View Live Site](https://your-site-name.netlify.app) *(Update this URL after deployment)*

## ✨ Features

- **Modern React 19** with TypeScript
- **Responsive Design** - Works on all devices
- **Dark/Light Theme Toggle** 
- **Contact Form** with EmailJS integration
- **Smooth Animations** and transitions
- **SEO Optimized**
- **Fast Performance** with Vite

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- React Router DOM
- EmailJS
- CSS3 with custom properties
- Font Awesome icons

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails to: `alvezjennylynrhea@gmail.com`

### Environment Variables Required:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🚀 Deployment on Netlify

### Automatic Deployment from GitHub:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Netlify will auto-detect the build settings from `netlify.toml`

3. **Set Environment Variables in Netlify:**
   - Go to Site Settings → Environment Variables
   - Add your EmailJS credentials:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID` 
     - `VITE_EMAILJS_PUBLIC_KEY`

4. **Deploy:**
   - Netlify will automatically build and deploy
   - Every push to main branch triggers a new deployment

### Build Configuration:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** 18

## 🏃‍♂️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create .env file:**
   ```bash
   # Copy your EmailJS credentials here
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── ThemeToggle.tsx # Dark/light theme toggle
│   └── SnowParticles.tsx # Animated background
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About section
│   ├── Portfolio.tsx   # Projects showcase
│   ├── Skills.tsx      # Skills section
│   └── Contact.tsx     # Contact form
├── styles/             # Global styles
│   └── globals.css     # CSS variables and global styles
└── App.tsx             # Main app component
```

## 🎨 Customization

- **Colors:** Edit CSS variables in `src/styles/globals.css`
- **Content:** Update page components in `src/pages/`
- **Navigation:** Modify `src/components/Sidebar.tsx`
- **Styling:** Each component has its own CSS file

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Flexible grid layouts
- Touch-friendly navigation

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [Your Name]
