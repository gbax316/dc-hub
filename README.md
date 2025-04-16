# Dominion City Church Web App

This is a monorepo for the Dominion City Church web application using Turborepo.

## Project Structure

- `apps/` - Contains all the application packages
  - `admin-dashboard/` - Admin dashboard built with React, Vite, and Tailwind CSS
  - `public/` - Public-facing website built with React, Vite, and Tailwind CSS
  - `backend/` - Backend API server built with Express and TypeScript
- `packages/` - Contains shared packages used across apps
  - `shared/` - Shared types, utilities, and components

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 10.x or higher

### Installation

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Start development servers
npm run dev
```

## Development

Each app can be developed independently:

```bash
# Develop admin dashboard
npm run dev --filter=admin-dashboard

# Develop public website
npm run dev --filter=public

# Develop backend
npm run dev --filter=backend
```

## Available Scripts

- `npm run build` - Build all packages
- `npm run dev` - Start development servers for all packages
- `npm run lint` - Lint all packages
- `npm run format` - Format code with Prettier

## Technology Stack

- **Frontend**: React, TypeScript, Vite, TailwindCSS
- **Backend**: Express, TypeScript
- **Tooling**: ESLint, Prettier, Turborepo

## License

This project is licensed under the MIT License. 