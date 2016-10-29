var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    uglifyCss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css');

gulp.task('scripts', function(){
  gulp.src(['app/js/**/*.js', '!app/js/**/main*'])
  .pipe(concat('main.js'))
  .pipe(gulp.dest('app/js'))
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/js'));
});

gulp.task('style', function(){
  gulp.src(['app/scss/**/*.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(concatCss('style.css'))
  .pipe(gulp.dest('app/css'))
  .pipe(uglifyCss())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function(){
  gulp.watch(['app/js/**/*.js', '!app/js/**/main*'], ['scripts']);
  gulp.watch('app/scss/**/*.scss', ['style']);
});

gulp.task('default', ['scripts', 'style', 'watch']);
