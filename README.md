diff --git a/README.md b/README.md
index 7059a962adb0138b65dd10e0aee66ccfe984b8c6..e623d5bc750a336bf82d90efe83697c17a4dcb04 100644
--- a/README.md
+++ b/README.md
@@ -1,12 +1,54 @@
 # React + Vite
 
 This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
 
 Currently, two official plugins are available:
 
 - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
 - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 
 ## Expanding the ESLint configuration
 
 If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
+
+## Getting Started
+
+### Installation
+
+1. Install dependencies:
+   ```bash
+   npm install
+   ```
+
+### Development
+
+Start the development server at `http://localhost:5173`:
+
+```bash
+npm run dev
+```
+
+### Production Build
+
+Generate a production-ready build:
+
+```bash
+npm run build
+```
+
+### Environment Variables
+
+Create a `.env` file at the project root to store API keys and other secrets.
+The following variables are used:
+
+- `VITE_REACT_APP_PSI_KEY` – API key for the SEO Speed Analyzer component.
+- `WHOIS_API_KEY` – API key required by the Netlify `domainLookup` function.
+
+### Available npm scripts
+
+- `dev` – start the Vite development server.
+- `build` – bundle the application for production.
+- `preview` – preview the production build locally.
+- `lint` – run ESLint over the project.
+- `analyze` – run the SEO speed analyzer script.
+

To run `npm run lint` successfully, make sure all dev dependencies are installed.
If `@eslint/js` or other packages are missing, run `npm install` first.
