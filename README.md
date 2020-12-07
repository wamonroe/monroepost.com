# monroepost.com

Simple landing page made with Tailwind CSS.

## Development

To run the the development server:

```bash
gulp serve
```

To compile and minify CSS and HTML files:

```bash
gulp build
```

## Deploy

Run `gulp build` and then copy all the files from `./dist` to the webhost.

## Files

This very simple project expects only two files `./src/index.html` and `./src/styles.css`. Both of
these files get compiled and/or minified during the build process. Any addition assets (such as
images) should be placed directly in the `./dist` folder.
