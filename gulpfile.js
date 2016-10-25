// Load plugins
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

// Styles
gulp.task('styles', function() {
  return gulp.src(
      [
          'node_modules/bootstrap/dist/css/bootstrap.css',
          'css/*.css'
      ]
  )
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('public'));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src([
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'js/*.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('public'));
});

// Default task
gulp.task('default', ['watch'], function() {
    gulp.run('styles', 'scripts');
});

// Watch
gulp.task('watch', function() {
    // Watch .css files
    gulp.watch('css/*.css', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.run('styles');
    });

    // Watch .js files
    gulp.watch('js/*.js', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.run('scripts');
    });

  });
