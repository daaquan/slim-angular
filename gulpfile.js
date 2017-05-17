// Load plugins
var gulp = require('gulp'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');


gulp.task('less', function(cb) {
    return gulp.src('css/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles'));
});
// Styles
gulp.task('styles', ['less'], function(cb) {
  return gulp.src(
      [
          'node_modules/bootstrap/dist/css/bootstrap.css',
          'dist/styles/*.css'
      ]
  )
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/build'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('public/minified'));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src([
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
      'node_modules/angular-cookies/angular-cookies.js',
      'node_modules/angular-route/angular-route.js',
      'js/*.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('public/minified'));
});

// Default task
gulp.task('default', ['less', 'styles', 'scripts']);

// Watch
gulp.task('watch', ['default'], function() {
    // Watch .css files
    gulp.watch('css/*.less', ['styles']);

    // Watch .js files
    gulp.watch('js/*.js', ['scripts']);
  });
