var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    uglifyCss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    replace = require('gulp-replace'),
    htmlmin = require('gulp-htmlmin');

gulp.task('scripts', function(){
  gulp.src(['app/bower_components/jquery/dist/jquery.min.js',
            '//code.jquery.com/jquery-migrate-1.2.1.min.js',/*---slick slider---*/
            'app/bower_components/slick-carousel/slick/slick.min.js',
            'app/bower_components/isotope/dist/isotope.pkgd.min.js',
            'app/bower_components/wow/dist/wow.min.js',
            'app/js/**/*.js',
            '!app/js/**/main*'])
  .pipe(concat('main.js'))
  .pipe(gulp.dest('app/js'))
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/js'));
});

gulp.task('style', function(){
  gulp.src(['app/bower_components/skeleton/css/skeleton.css',
            'app/bower_components/font-awesome/scss/font-awesome.scss',
            'app/bower_components/slick-carousel/slick/slick.css',
            'app/bower_components/slick-carousel/slick/slick-theme.css',
            'app/bower_components/animate.css/animate.min.css',
            'app/scss/**/*.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(concatCss('style.css'))
  .pipe(replace('../../', ''))  //nadpisuje ściezki - nie wiem czemu :/
  .pipe(replace('font-awesome/bower_components', '../bower_components'))
  .pipe(gulp.dest('app/css'))
  .pipe(uglifyCss())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/css'));
});

gulp.task('minify', function() {
  return gulp.src('app/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('index.min.html'))
    .pipe(gulp.dest('app'));
});

gulp.task('watch', function(){
  gulp.watch(['app/js/**/*.js', '!app/js/**/main*'], ['scripts']);
  gulp.watch('app/scss/**/*.scss', ['style']);
  gulp.watch('app/*.html', ['minify']);
});

gulp.task('default', ['scripts', 'style', 'minify', 'watch']);
