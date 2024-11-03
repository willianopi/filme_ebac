import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import uglify from 'gulp-uglify';
import copy from 'gulp-copy';

const sass = gulpSass(dartSass);

// Compile SCSS to CSS
gulp.task('styles', function() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Minify JavaScript
gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Images Optimization
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(copy('dist/images', { prefix: 2 }));
});

// Copy HTML to dist
gulp.task('html', function () {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'));
});

// Default Task
gulp.task('default', gulp.parallel('styles', 'scripts', 'images','html'));