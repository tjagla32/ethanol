var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    uglifyCss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    replace = require('gulp-replace');


gulp.task('style', function(){
  gulp.src('slick/slick-theme.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('slick'));
});



gulp.task('default', ['style']);
