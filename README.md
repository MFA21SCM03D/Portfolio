# Personal Portfolio

A responsive personal portfolio website showcasing my professional experience,
technical skills, projects, education, and contact information.

The application is built with **React, TypeScript, and Vite**, with a focus on
maintainable component architecture, responsive design, accessibility, and a
clean user experience.

## Overview

This portfolio provides a central place to explore:

- Professional experience and career history
- Education and academic background
- Frontend, backend, design, and development tooling skills
- Selected software projects
- Contact information and a contact form
- Links to professional and social profiles

The application is structured as a client-side React application with reusable
components and data-driven page sections.

## Tech Stack

### Frontend

- React
- TypeScript
- React Router
- Material UI
- HTML5
- CSS3

### Development & Tooling

- Vite
- ESLint
- Git
- GitHub

### API & Development Tools

- Postman
- Hoppscotch

### Design

- Figma
- Zeplin
- Storybook

## Architecture

The application follows a component-oriented React architecture.

Page-level components are responsible primarily for composition, while reusable
UI elements and page data are separated where appropriate.

A simplified structure looks like:

```text
src/
├── assets/
│   └── ...
│
├── components/
│   └── ...
│
├── data/
│   ├── projectsData.ts
│   ├── resumeData.ts
│   └── skillsData.ts
│
├── pages/
│   ├── Contact/
│   ├── Home/
│   ├── Projects/
│   ├── Resume/
│   └── Skills/
│
├── App.tsx
├── main.tsx
└── ...
```

### Design Principles

The project follows several principles:

- **Componentization** — UI responsibilities are separated into focused
  components.
- **Data-driven rendering** — Repeated content such as projects, skills, and
  resume entries is represented as typed data rather than duplicated JSX.
- **Type safety** — TypeScript interfaces are used for structured application
  data and component props.
- **Responsive design** — Layouts adapt across mobile, tablet, and desktop
  viewports.
- **Accessibility** — Semantic HTML, accessible navigation, labels, focus
  states, and appropriate ARIA attributes are used where necessary.
- **Maintainability** — Styling and component structure are scoped to their
  respective features to reduce unintended coupling.
- **Progressive enhancement** — Core content remains accessible without relying
  on JavaScript-driven layout calculations.

## Pages

### Home

Introduces the portfolio and provides an overview of professional experience and
areas of expertise.

### Skills

Presents the technology stack across several categories:

- Frontend
- Backend
- Design
- Version Control
- Software & Tools

Skills are represented using reusable data and components rather than
individually duplicated markup.

### Projects

Displays selected academic and personal projects with:

- Project title
- Category
- Description
- Technology stack
- GitHub repository

Project cards are responsive and provide a keyboard-accessible link to their
corresponding GitHub repository.

### Resume

Contains:

- Education
- Professional experience
- Leadership and mentorship experience

Resume entries are represented as typed data and rendered through reusable
timeline components.

### Contact

Provides a contact form for sending messages and includes validation and user
feedback.

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm

You can verify your installations with:

```bash
node --version
npm --version
```

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd <project-directory>
```

Install dependencies:

```bash
npm install
```

### Environment Variables

The contact form uses environment variables for its EmailJS configuration.

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Vite exposes client-side environment variables only when they use the `VITE_`
prefix.

Do not commit `.env` files containing environment-specific configuration or
secrets to source control.

## Available Scripts

### Development

Start the local development server:

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

### Production Build

Create an optimized production build:

```bash
npm run build
```

The generated production assets are placed in the `dist` directory.

### Preview Production Build

To locally preview the production build:

```bash
npm run preview
```

This is useful for validating the application after a production build before
deployment.

### Lint

Run ESLint:

```bash
npm run lint
```

## Build & Deployment

The application is built using Vite.

The production build process is:

```text
Source Code
    ↓
TypeScript / React
    ↓
Vite Build
    ↓
dist/
    ↓
Static Hosting
```

Because the application uses client-side routing, the hosting environment must
serve the application's entry point for routes that are not physical files.

For example, static hosting should fall back to:

```text
/index.html
```

for application routes such as:

```text
/
/skills
/projects
/resume
/contact
```

## Routing

Client-side navigation is handled using React Router.

The application uses route-based pages rather than manually manipulating browser
URLs.

This provides:

- Client-side navigation
- Active navigation states
- Browser history support
- Direct navigation to individual portfolio sections

When deploying to static hosting, configure the host to rewrite unknown
application routes to `index.html`.

## Styling

The project uses feature-scoped CSS files associated with their respective pages
and components.

Examples:

```text
Home.css
Skills.css
Projects.css
Resume.css
Contact.css
```

The application uses a shared set of CSS custom properties for its visual theme.

This keeps colors and visual tokens consistent throughout the application while
allowing individual components to manage their own layout.

## Responsive Design

The portfolio is designed for multiple viewport sizes:

```text
Mobile
   ↓
Tablet
   ↓
Desktop
```

Responsive behavior is implemented primarily through CSS rather than JavaScript
viewport detection.

This avoids unnecessary resize listeners and keeps layout decisions within the
presentation layer.

## Accessibility

Accessibility is considered throughout the application.

Examples include:

- Semantic HTML elements such as `main`, `header`, `section`, `article`, `nav`,
  and `footer`
- Proper heading hierarchy
- Accessible navigation labels
- Keyboard-visible focus states
- Appropriate `aria-*` attributes where semantic HTML alone is insufficient
- Descriptive link labels for external destinations
- Decorative images marked appropriately
- Responsive layouts that remain usable at smaller viewport sizes
- Reduced-motion support through `prefers-reduced-motion`

Accessibility is treated as part of the component design rather than as a
final-stage enhancement.

## Performance Considerations

The application is a relatively small client-side application, so the primary
performance considerations are:

- Vite's optimized production bundling
- Avoiding unnecessary rendering and duplicated component logic
- Keeping assets appropriately sized
- Using CSS for responsive behavior instead of JavaScript-driven layout
  calculations
- Keeping page components focused and predictable
- Avoiding unnecessary dependencies

The project is intentionally kept lightweight rather than introducing additional
abstractions without a clear benefit.

## Code Organization

The project separates **content/data** from **presentation** wherever repeated
structures exist.

For example, projects are represented as typed data:

```ts
interface Project {
	title: string;
	category: string;
	description: string;
	githubUrl: string;
	technologies: Technology[];
}
```

The UI then maps that data into reusable components.

This makes adding a project primarily a data change rather than requiring
additional presentation markup.

The same pattern is used for skills and resume content.

## Development Guidelines

When extending the portfolio:

1. Prefer reusable components over duplicated JSX.
2. Keep page components focused on composition.
3. Keep repeated content in typed data structures.
4. Use TypeScript types for component props and structured data.
5. Prefer semantic HTML before reaching for ARIA attributes.
6. Avoid JavaScript-based viewport detection when CSS can solve the problem.
7. Keep styling scoped to the component or feature being changed.
8. Preserve the existing design tokens rather than introducing arbitrary colors.
9. Test responsive behavior at mobile, tablet, and desktop widths.
10. Verify keyboard navigation and focus states for interactive elements.
11. Run linting and a production build before committing significant changes.

## Production Checklist

Before deploying a change:

```bash
npm run lint
npm run build
npm run preview
```

Then verify:

- [ ] All routes load correctly
- [ ] Navigation works
- [ ] Direct navigation to nested routes works
- [ ] External links open correctly
- [ ] Contact form works
- [ ] No console errors are present
- [ ] Layout works on mobile
- [ ] Layout works on tablet
- [ ] Layout works on desktop
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Images and assets load correctly
- [ ] Production build completes successfully

## Project Status

This is an actively maintained personal portfolio project.

The codebase is periodically refactored as new technologies, projects,
professional experience, and improvements to the application's architecture are
added.

## License

This project represents my personal portfolio and professional work.

The source code may be referenced for educational purposes, but portfolio
content, personal information, branding, and original assets should not be
reused as personal work.
