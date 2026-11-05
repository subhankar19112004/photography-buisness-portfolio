# Photo-Cohort — Photography Business Portfolio

A visually rich photography portfolio built to present creative work and photography services through immersive imagery, video backgrounds, animated transitions, and interactive galleries. Visitors can explore the portfolio, browse service offerings, and access booking and contact interfaces.

> **Project:** Photography Business Portfolio  
> **Application branding:** Photo-Cohort

## Overview

Photo-Cohort is a React single-page application for a photography business. It brings together a visual landing experience, a video-led home page, an image gallery, service discovery, and enquiry interfaces.

The application uses React Router for client-side navigation and Tailwind CSS, Framer Motion, and other UI libraries for responsive layouts and motion effects.

## Features

- **Animated landing page** with a full-screen photographic background and an entry action.
- **Photography showcase** with video backgrounds on larger screens, a mobile image background, an about section, an expertise slider, and a back-to-top control.
- **Responsive navigation** with desktop links and an animated mobile menu.
- **About section** with a photography gallery and studio introduction.
- **Portfolio gallery** with Beach, Vintage, and Golden categories, text search, pagination, lazy-loaded images, and an image preview modal.
- **Local gallery interactions** for liking and saving images.
- **Photography services** covering wedding, portrait, product, event, fashion, real-estate, aerial, and food photography.
- **Booking form** with required-field validation, EmailJS integration, toast feedback, and a confirmation animation.
- **Contact and call-request pages** for visitor enquiries.
- **Motion and visual effects** using Framer Motion, video assets, Lottie animations, and icon libraries.

## Application Routes

| Route | Page | Description |
|---|---|---|
| `/` | Landing | Introductory screen |
| `/home` | Home | Main photography showcase |
| `/about` | About Us | Photography/studio introduction |
| `/products` | Products | Searchable and filterable photo gallery |
| `/services` | Services | Photography service catalogue |
| `/book-service` | Book Service | Service booking/enquiry form |
| `/contact` | Contact | Contact form interface |
| `/spinner` | Spinner | Transition screen before the call page |
| `/getacall` | Get a Call | Email and phone enquiry interface |
| `/send-mail` | Send Mail | Mail confirmation view |
| `/mail-sent` | Mail Sent | Call-request confirmation view |

## Tech Stack

### Core
- [React 19](https://react.dev/)
- [React DOM](https://react.dev/)
- [React Router DOM 7](https://reactrouter.com/)
- [Vite 6](https://vite.dev/)

### Styling, Animation & UI
- [Tailwind CSS 4](https://tailwindcss.com/) with the Vite plugin
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://gsap.com/)
- [Swiper](https://swiperjs.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Lucide React](https://lucide.dev/)
- Lottie React and Lottie Player
- React Hot Toast
- React Lazy Load Image Component
- React Parallax Tilt
- React Swipeable
- React Confetti

### Enquiry Integration
- [EmailJS Browser SDK](https://www.emailjs.com/docs/sdk/installation/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (current LTS recommended)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/subhankar19112004/photography-buisness-portfolio.git
cd photography-buisness-portfolio
```

### 2. Install dependencies

The repository includes a `package-lock.json`, so install dependencies with npm:

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal. The default is usually `http://localhost:5173/`.

### 4. Build for production

```bash
npm run build
```

The production-ready output is generated in `dist/`.

### 5. Preview the production build

```bash
npm run preview
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates the production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint |

## Project Structure

```text
photography-buisness-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── images and videos
│   │   └── confetti.json
│   ├── components/
│   │   ├── Body.jsx
│   │   ├── ExpertiseSlider.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── AboutUs.jsx
│   │   ├── BookService.jsx
│   │   ├── Contact.jsx
│   │   ├── GetACall.jsx
│   │   ├── Home.jsx
│   │   ├── HomeLayout.jsx
│   │   ├── Landing.jsx
│   │   ├── MailSent.jsx
│   │   ├── Product.jsx
│   │   ├── SendMail.jsx
│   │   ├── Services.jsx
│   │   └── SpinnerScreen.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── constants.js
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## EmailJS Setup

The service booking form in `src/pages/BookService.jsx` sends submissions through EmailJS. The current source contains the EmailJS service ID, template ID, and public key directly in the component.

For a maintainable deployment, move these values into Vite environment variables and update the component to read them from `import.meta.env`.

Example variable names:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then configure the same variables in your hosting provider. Vite-exposed variables are included in the browser bundle; never put private or privileged secrets in them. The values above are placeholders, not working credentials.

## Current Implementation Notes

The following details describe the code currently present in the repository:

- Gallery like/save states are held in React component state. They are not stored in a database or retained after a page reload.
- The gallery share control currently displays a “coming soon” alert.
- The Contact form currently logs submitted form data to the browser console; it is not connected to an email service or backend.
- The Get a Call page validates the entered email and phone number locally and navigates to a confirmation page. It does not currently transmit or persist the request.
- The Book Service form uses EmailJS from the browser. Configure and test the EmailJS service and template before relying on it in production.
- Some page imagery is loaded from external URLs and therefore requires an internet connection.

## Production Checklist

Before using the application for real customer enquiries:

- [ ] Move EmailJS configuration out of the component and into environment variables.
- [ ] Connect the Contact and Get a Call forms to a real email or backend workflow.
- [ ] Add robust submission, loading, success, and error handling to all forms.
- [ ] Replace the starter Vite favicon and document title in `index.html`.
- [ ] Confirm that you have permission to use all bundled and externally hosted images/videos.
- [ ] Configure SPA fallback/rewrite behavior on the hosting platform so direct route visits work.
- [ ] Run `npm run lint` and `npm run build` before deployment.
- [ ] Test responsive layouts and media loading on mobile and desktop.

## Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "feat: describe your change"`.
4. Push your branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

No license file is currently present in this repository. Until a license is added, standard copyright restrictions apply. Please contact the repository owner for permission before reusing or redistributing the source code or assets.

---

Built with React, Vite, and a love for visual storytelling.
