var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglifyjs'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    notify = require('gulp-notify');


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('sass', function() {
  return gulp.src('scss/style.scss')
    .pipe(sass({ style: 'expanded',  "sourcemap=none": true  }))
    .on('error', notify.onError())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9'))
    .pipe(gulp.dest('css'))
    .pipe(reload({stream: true}))
});


gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js/dist'))
    .pipe(reload({stream:true}));
});


gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('js/*.js', ['js']);
});