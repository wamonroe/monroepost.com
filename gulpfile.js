var gulp = require('gulp');

// postcss and plugins
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var tailwindcss = require('tailwindcss');

// css and html minify
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');

// dev server
var browserSync = require('browser-sync').create();

// compile and minify css
gulp.task('build:css', function () {
  var processors = [
    tailwindcss,
    autoprefixer
  ];
  return gulp.src('./src/styles.css')
    .pipe(postcss(processors))
    .pipe(csso())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// minify html
gulp.task('build:html', function() {
  return gulp.src('./src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// build css and html
gulp.task('build', gulp.parallel('build:css', 'build:html'));

// development server
gulp.task('serve', function() {
  gulp.series('build')

  browserSync.init({
    server: './dist'
  });

  gulp.watch('./tailwind.config.js', gulp.series('build:css'));
  gulp.watch('./src/styles.css', gulp.series('build:css'));
  gulp.watch('./src/index.html', gulp.series('build:html'));
});

// default task (build)
gulp.task('default', gulp.series('serve'));
