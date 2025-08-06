# GEMINI.md - Project Context

This document provides a comprehensive overview of the "The Blue Apron" project, intended to be used as instructional context for future interactions with the Gemini AI.

## Project Overview

This is a Next.js web application for a restaurant named "The Blue Apron". The website is designed to showcase the restaurant's menu, provide information about the business, and allow users to order food online. The project uses a modern tech stack, including:

*   **Framework:** Next.js with TypeScript
*   **Styling:** Tailwind CSS with Radix UI for accessible and unstyled components.
*   **AI:** Google's Gemini 1.5 Flash model via Genkit for AI-powered features.
*   **Deployment:** Likely intended for Vercel, given the Next.js framework.

The project structure is well-organized, with a clear separation of concerns between pages, components, and AI-related code.

## Building and Running

The following commands are available in `package.json` to build, run, and test the application:

*   `npm run dev`: Starts the development server with Turbopack at `http://localhost:9002`.
*   `npm run build`: Creates a production-ready build of the application.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Lints the codebase using Next.js's built-in ESLint configuration.
*   `npm run typecheck`: Runs the TypeScript compiler to check for type errors.
*   `npm run genkit:dev`: Starts the Genkit development server.
*   `npm run genkit:watch`: Starts the Genkit development server in watch mode.

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for utility-first styling, with components from `shadcn/ui` built on top of Radix UI. Custom styles are defined in `src/app/globals.css`.
*   **Components:** Reusable components are located in `src/components`. The `ui` subdirectory contains the `shadcn/ui` components.
*   **Routing:** The application uses the Next.js App Router. Pages are located in the `src/app` directory, with subdirectories for each route.
*   **AI:** AI-related code is located in the `src/ai` directory. The `genkit.ts` file configures the Genkit instance and the `dev.ts` file is used for development.
*   **Fonts:** The project uses `Geist` and `Playfair_Display` fonts from `next/font/google`.
*   **Images:** The application uses `next/image` for image optimization and is configured to use placeholder images from `placehold.co`.
*   **Linting and Formatting:** The project is set up with ESLint and Prettier (inferred from the presence of `.prettierrc`). It is recommended to run `npm run lint` before committing changes.
