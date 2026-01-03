# Comfy Store

A modern, full-featured e-commerce platform built with React and TypeScript. Comfy Store provides users with a seamless shopping experience featuring product browsing, filtering, user authentication, and secure checkout functionality.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Project](#running-the-project)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [API Integration](#api-integration)
- [Development Guidelines](#development-guidelines)
- [Building for Production](#building-for-production)
- [Troubleshooting](#troubleshooting)

---

## Overview

Comfy Store is a full-stack e-commerce application that demonstrates modern web development practices using React, TypeScript, and state management with Redux Toolkit. The frontend is fully responsive and provides an intuitive user interface for browsing products, managing shopping carts, and completing purchases.

---

## Features

### Core Features

- 🔐 **User Authentication & Authorization** - Secure login and registration system
- 🛍️ **Product Browsing** - Browse thousands of products with detailed information
- 🔍 **Advanced Filtering** - Filter products by category, price range, color, and more
- 🛒 **Shopping Cart Management** - Add, remove, and modify products in cart
- 💳 **Secure Checkout** - Safe and streamlined checkout process
- 📋 **Order History** - View previous orders and order details

### Technical Features

- ✅ **TypeScript Support** - Full type safety for enhanced code reliability
- 🎨 **Responsive Design** - Works seamlessly on all devices (mobile, tablet, desktop)
- 🌓 **Dark/Light Mode** - Theme switching capability
- ⚡ **Fast Performance** - Optimized builds with Vite
- 🎯 **State Management** - Centralized state with Redux Toolkit
- 📱 **Mobile-First Approach** - Optimized for mobile experience

---

## Tech Stack

### Frontend Framework

- **React 18.3.1** - UI library for building interactive components
- **TypeScript 5.6.2** - Typed superset of JavaScript for type safety
- **Vite 6.0.5** - Next-generation build tool for fast development

### State Management

- **Redux Toolkit 2.5.0** - State management and predictable state container
- **React-Redux 9.2.0** - React bindings for Redux

### Routing & Navigation

- **React Router DOM 6.21.3** - Client-side routing and navigation

### Styling & UI

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Shadcn** - Beautiful, Easy to Customize UI Components platform
- **Radix UI** - Unstyled, accessible component library
- **Lucide React** - Beautiful SVG icon library
- **Embla Carousel** - Responsive carousel library

### HTTP Client

- **Axios 1.6.7** - Promise-based HTTP client for API requests

### Code Quality

- **ESLint 9.17.0** - JavaScript code quality tool
- **TypeScript ESLint** - TypeScript linting support

### Utilities

- **Clsx** - Utility for constructing className strings
- **Class Variance Authority** - CSS class composition
- **Tailwind Merge** - Merge Tailwind CSS classes

---

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) or **yarn** (v3.0.0 or higher)
- **Git** - [Download](https://git-scm.com/)

### Verify Installation

```bash
node --version
npm --version
# or
yarn --version
git --version
```

---

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/aashishpanthee/comfy_store-react-typescript.git
cd comfy_store-react-typescript
```

### Step 2: Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Step 3: Setup Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
VITE_API_URL=https://strapi-store-server.onrender.com/api
```

---

## Environment Configuration

The project uses Vite's environment variable system. Environment variables should be prefixed with `VITE_` to be accessible in the browser.

### Available Environment Variables

| Variable       | Description               | Example                                        |
| -------------- | ------------------------- | ---------------------------------------------- |
| `VITE_API_URL` | Base URL for API requests | `https://strapi-store-server.onrender.com/api` |

### Development vs Production

- **Development**: Variables from `.env` and `.env.local` are loaded
- **Production**: Only `.env.prod` variables are used (if available)

---

## Running the Project

### Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Preview Production Build

To preview the optimized production build locally:

```bash
npm run preview
# or
yarn preview
```

---

## Available Scripts

| Script      | Command           | Description                       |
| ----------- | ----------------- | --------------------------------- |
| **dev**     | `npm run dev`     | Start development server with HMR |
| **build**   | `npm run build`   | Build application for production  |
| **preview** | `npm run preview` | Preview production build locally  |
| **lint**    | `npm run lint`    | Run ESLint to check code quality  |

### Script Details

#### `npm run dev`

- Starts Vite development server
- Enables Hot Module Replacement (HMR)
- Open `http://localhost:5173` in your browser

#### `npm run build`

- Compiles TypeScript (`tsc -b`)
- Bundles application with Vite
- Outputs optimized build to `dist/` directory
- Minifies code for production

#### `npm run lint`

- Runs ESLint on all files
- Reports code quality issues
- Can be used to enforce coding standards

#### `npm run preview`

- Serves the production build locally
- Useful for testing the optimized build before deployment

---

## Project Structure

```
comfy_store-react-typescript/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Cart/            # Shopping cart components
│   │   ├── Checkout/        # Checkout process components
│   │   ├── Header/          # Header component
│   │   ├── Navbar/          # Navigation components
│   │   ├── Products/        # Product display components
│   │   ├── common/          # Common shared components
│   │   ├── ui/              # UI library components (Radix)
│   │   └── Skeleton/        # Loading skeleton components
│   │
│   ├── pages/               # Page components (routes)
│   │   ├── Landing.tsx
│   │   ├── Products.tsx
│   │   ├── Cart.tsx
│   │   ├── Checkout.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── Orders.tsx
│   │
│   ├── redux-store/         # Redux state management
│   │   ├── store.ts         # Store configuration
│   │   ├── hooks.ts         # Redux hooks (useAppDispatch, useAppSelector)
│   │   ├── cart/            # Cart slice and logic
│   │   ├── user/            # User authentication slice
│   │   └── theme/           # Theme slice
│   │
│   ├── router/              # Routing configuration
│   │   └── index.tsx        # Route definitions
│   │
│   ├── config/              # Configuration files
│   │   └── axios/           # Axios instance setup
│   │
│   ├── constants/           # Application constants
│   │   ├── url.ts          # API URLs and endpoints
│   │   ├── links.ts        # Navigation links
│   │   └── images.ts       # Image paths
│   │
│   ├── utils/              # Utility functions
│   │   ├── formatAsDollars.ts
│   │   ├── applyTheme.ts
│   │   ├── validation/     # Form validation utilities
│   │   └── types.ts        # TypeScript type definitions
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── useFormValidation.ts
│   │   └── use-toast.ts
│   │
│   ├── lib/                # Library utilities
│   │   └── utils.ts        # Utility functions
│   │
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
│
├── public/                 # Static assets
│   └── _redirects          # Netlify redirect configuration
│
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript base configuration
├── tsconfig.app.json       # TypeScript app configuration
├── tsconfig.node.json      # TypeScript Node configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
├── components.json         # UI component configuration
└── package.json            # Project dependencies
```

---

## Architecture

### State Management Architecture

The application uses Redux Toolkit for centralized state management with the following slices:

#### Cart Slice (`redux-store/cart/cartSlice.ts`)

Manages shopping cart state including:

- Items in cart
- Cart totals
- Item quantities and colors

#### User Slice (`redux-store/user/userSlice.ts`)

Manages user authentication state:

- Login/register actions
- User authentication tokens
- User profile information

#### Theme Slice (`redux-store/theme/themeSlice.ts`)

Manages application theme:

- Dark/light mode toggle
- Theme persistence

### Component Architecture

Components are organized by feature/domain:

- **Page Components**: Full-page layouts (under `/pages`)
- **Feature Components**: Feature-specific components (Cart/, Products/, etc.)
- **Common Components**: Shared across features (`/common`)
- **UI Components**: Primitive, reusable UI components (`/ui`)

### Routing

React Router v6 is used for client-side routing with lazy loading for improved performance.

---

## API Integration

### Backend API Configuration

The application connects to a Strapi-based backend. The base URL is configured via environment variables.

### Backend API Documentation

For detailed API documentation, endpoints, and request/response examples, visit:

📖 **[Comfy Store API Documentation](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi#ac5756ba-a31f-48f6-9f22-4b7f534599e4)**

### Main API Endpoints

| Endpoint                  | Method   | Description                  |
| ------------------------- | -------- | ---------------------------- |
| `/products`               | GET      | Fetch all products           |
| `/products?featured=true` | GET      | Fetch featured products      |
| `/products/:id`           | GET      | Fetch single product details |
| `/auth/local`             | POST     | User login                   |
| `/auth/local/register`    | POST     | User registration            |
| `/orders`                 | GET      | Fetch user orders            |
| `/reviews`                | GET/POST | Manage product reviews       |

### Axios Configuration

The Axios instance is configured in `src/config/axios/index.ts` with:

- Base URL from environment variables
- Automatic request/response interceptors (can be added as needed)
- Default headers

---

## Development Guidelines

### Code Style

- **TypeScript**: Use strict type checking for all components and utilities
- **Naming Conventions**:
  - Components: PascalCase (e.g., `ProductCard.tsx`)
  - Functions/Variables: camelCase (e.g., `formatPrice()`)

### Redux Best Practices

- Keep Redux actions pure and simple
- Use Redux Toolkit's `createSlice` for reducers
- Dispatch actions for side effects using thunks when needed
- Use typed selectors with custom hooks from `redux-store/hooks.ts`

### Styling

- Use Tailwind CSS utility classes for styling
- Create components using Radix UI for accessible primitives
- Use `clsx` for conditional class management
- Keep component-specific styles minimal

### Linting

Run linting before committing:

```bash
npm run lint
```

---

## Building for Production

### Create Production Build

```bash
npm run build
```

This command:

1. Compiles TypeScript
2. Bundles the application with Vite
3. Optimizes and minifies code
4. Generates optimized assets in the `dist/` directory

### Build Output

The `dist/` directory contains:

- `index.html` - Main HTML file
- `assets/` - Bundled JavaScript and CSS files
- `_redirects` - Redirect rules (for Netlify deployment)

### Build Analysis

To analyze the bundle size:

```bash
npm run build
npm run preview
```

---

## Troubleshooting

### Common Issues

#### **Port 5173 Already in Use**

```bash
# Kill process on port 5173 or use different port
npm run dev -- --port 3000
```

#### **Module Not Found Errors**

- Ensure all dependencies are installed: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check import paths match the @ alias setup

#### **API Connection Issues**

- Verify `VITE_API_URL` is correctly set in `.env.local`
- Check if backend server is running and accessible
- Verify CORS settings on backend

#### **Build Fails**

- Run `npm run lint` to check for TypeScript errors
- Clear Vite cache: `rm -rf dist`
- Update dependencies: `npm update`

#### **Styles Not Applying**

- Rebuild Tailwind CSS: `npm run build`
- Ensure Tailwind configuration includes all template paths
- Check for CSS specificity conflicts

---

## Support & Resources

- 📖 [React Documentation](https://react.dev)
- 📖 [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- 📖 [Vite Documentation](https://vitejs.dev/)
- 📖 [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- 📖 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- 📖 [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)

---

## Contact & Links

- 👤 **Author**: Aashish Panthee
- 📚 **API Documentation**: [Postman API Docs](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi#ac5756ba-a31f-48f6-9f22-4b7f534599e4)
- 🐙 **GitHub**: [aashishpanthee](https://github.com/aashishpanthee)
