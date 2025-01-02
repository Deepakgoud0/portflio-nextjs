# Modern Portfolio Website

A modern, interactive portfolio website built with Next.js, featuring 3D animations, particle effects, and smooth transitions.

## Features

- 🌟 Interactive 3D background with particle effects
- 💼 Dynamic project showcase with 3D transitions
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 📧 Contact form with email integration
- 🎯 Skills visualization with interactive elements
- 🌓 Custom gradient effects and animations

## Tech Stack

- Next.js 13+ with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js
- React Hook Form
- Nodemailer

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-nextjs.git
```

2. Install dependencies:
```bash
cd portfolio-nextjs
npm install
```

3. Create a `.env.local` file in the root directory and add your email configuration:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js 13+ app router pages and layouts
- `/components` - React components
- `/public` - Static assets
- `/styles` - Global styles and Tailwind configuration

## Customization

1. Update the project information in `components/Projects.tsx`
2. Modify the skills in `components/Skills.tsx`
3. Update the about section in `components/About.tsx`
4. Customize colors and theme in `app/globals.css`

## Deployment

The project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio-nextjs)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
