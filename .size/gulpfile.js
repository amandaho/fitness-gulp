'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var beautify = require('gulp-beautify');
var htmlhint = require('gulp-htmlhint');
var wcss = require('gulp-w3c-css');

var image = require('gulp-image');
var uglyify = require('gulp-uglyfly');
var size = require('gulp-size');




gulp.task('sass', function() {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('wcss', function() {
  return gulp.src('./assets/css/*.css')
    .pipe(wcss())
    .pipe(gulp.dest('.build'));
});

gulp.task('htmlhint', function() {
  return gulp.src('./*.html')
    .pipe(htmlhint())
    .pipe(gulp.dest('.htmlhintrc'));
});

gulp.task('beautify', function() {
  return gulp.src('./assets/js/*.js')
    .pipe(beautify())
    .pipe(gulp.dest('.js_beautify'));
});

gulp.task('babel', function() {
  return gulp.src('./assets/js/*.js')
    .pipe(babel( { presets: ['es2015'] } ))
    .pipe(gulp.dest('.dist'));
});

gulp.task('image', function() {
  return gulp.src('./assets/images/*')
    .pipe(image())
    .pipe(gulp.dest('.image'));
});

gulp.task('uglyify', function() {
  return gulp.src('./assets/js/*.js')
    .pipe(uglyify())
    .pipe(gulp.dest('.ugly'));
});

gulp.task('size', function() {
  return gulp.src('./**.*')
    .pipe(size())
    .pipe(gulp.dest('.size'));
});




// gulp.task('default', ['sass', 'css', 'htmlhint', 'beautify', 'babel', 'image', 'uglyify', 'colorguard']);

gulp.task('html', ['htmlhint']);

gulp.task('css', ['sass', 'wcss']);

gulp.task('javascript', ['beautify', 'babel', 'uglyify']);

gulp.task('default', ['html', 'css', 'javascript', 'image', 'size']);
