# monroepost.com

A simple, framework-less, plain-old-HTML template using Tailwind CSS. Use it as a template for a
simple landing page or as a starting point for something more.

## Development Environment

Install the dependencies:

```bash
npm install
```

Run the the development server:

```bash
npm run dev
```

## Deploy

Run `npm run build` and then copy all the files and folders from `./dist` to the webhost.

## Files

This very simple project leverages [Vite.js](https://vitejs.dev) and [PostCSS](https://postcss.org) to build and minify
the assets. It expects only three files:

* `./src/index.html`
* `./src/assets/styles/main.css`
* `./src/assets/js/main.js`

Any additional files referenced within any of these will automatically get included. For more information about the
build process, see the documentation for Vite.js.
