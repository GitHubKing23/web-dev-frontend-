# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Getting Started

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```
   If you pull new changes that modify `package.json`, run this command again
   to ensure any added packages are installed locally. Afterwards, restart the
   dev server with `npm run dev` so the new modules are compiled.

<<<<<<< ours
2. Start the dev server:
   ```bash
   npm run dev
   ```

3. Run the linter:
   ```bash
   npm run lint
   ```

4. Run tests with [Jest](https://jestjs.io/) (requires Node.js >= 18):
   ```bash
   npm test --silent
   ```
   Jest is installed with the project dependencies and runs via the `npm test` script.

### Deployment patches

Certain updates, such as the favicon change, are provided as patch files. Apply them with:

```bash
git apply favicon-fix.patch
```

Or run the helper script:

```bash
bash ./apply-favicon-update.sh
```

If patching fails because files already exist, review the `.rej` files and apply the changes manually.

### GitHub workflow

1. Fork this repo and clone your fork.
2. Create a feature branch:

   ```bash
   git checkout -b my-feature
   ```

3. Commit your changes with clear messages:

   ```bash
   git commit -am "Add my feature"
   ```

4. Push and open a pull request on GitHub.
=======
   Whenever the project updates its `package.json` with new dependencies, run
   `npm install` again to ensure all required packages are available. The dev
   server depends on plugins such as `@mdx-js/rollup`, so missing installs will
   cause errors like `Cannot find module '@mdx-js/rollup'` when running
   `npm run dev`.
>>>>>>> theirs
