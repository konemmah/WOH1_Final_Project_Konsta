# My React App

## Links

- [Public GitHub repository](https://github.com/konemmah/WOH1_Final_Project_Konsta)
- [Live application on GitHub Pages](https://konemmah.github.io/WOH1_Final_Project_Konsta/)

## About

A React app for searching flights and managing a travel checklist.

## Deployment

The frontend is deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml`.
To connect it to the Express API, deploy the `server` entry point to a Node host and set:

- `DUFFEL_API_KEY` on the API host only
- `ALLOWED_ORIGINS=https://konemmah.github.io` on the API host
- `VITE_API_BASE_URL` as a GitHub Actions repository variable, set to the API host URL

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
