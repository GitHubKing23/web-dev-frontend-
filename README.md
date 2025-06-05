# WebMasteryPro Frontend

This project uses **React** with **Vite** to provide a collection of tools and resources for small businesses. It includes dynamic pages such as a pricing table, service listings and a domain search utility.

## Getting Started

### Installation

Install dependencies:

```bash
npm install
```

### Development

Run the development server at `http://localhost:5173`:

```bash
npm run dev
```

### Production Build

Create a production build:

```bash
npm run build
```

## Domain Search

Navigate to `/domains` to search WHOIS data across multiple TLDs. The page lets you filter by common extensions and forwards available domains to GoDaddy via an affiliate link.

### Environment Variables

Create a `.env` file in the project root with the following variables:

- `VITE_REACT_APP_PSI_KEY` – API key for the SEO Speed Analyzer.
- `WHOIS_API_KEY` – API key required by the Netlify `domainLookup` function.

### Available npm scripts

- `dev` – start the Vite development server.
- `build` – bundle the application for production.
- `preview` – preview the production build locally.
- `lint` – run ESLint over the project.
- `analyze` – run the SEO speed analyzer script.

## Applying patches

Patch files in this repository can be applied with the helper script in the `scripts` directory.

```bash
./scripts/apply-patch.sh path/to/patch.patch
```

A convenience script is provided to apply the `favicon-fix.patch` file:

```bash
./apply-favicon-update.sh
```

