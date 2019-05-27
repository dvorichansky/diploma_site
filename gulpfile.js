const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const del = require('del');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const fileinclude = require('gulp-file-include');


function htmlInclude() {
  return gulp.src(['index.html'])
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest('./build/'));
}


const jsFiles = [
  './src/js/lib.js',
  './src/js/main.js'
];

function styles() {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.min.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream())
}

function scripts() {
  return gulp.src(jsFiles)
    .pipe(concat('all.min.js'))
    .pipe(uglify({
      toplevel: true
    }))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream())
}

function images() {
  return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img'))
}

function clean() {
  return del(['build/*'])
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('./src/scss/**/*.scss', styles);
  gulp.watch('./src/js/**/*.js', scripts);
  gulp.watch('./src/img/*', images);
  gulp.watch('./*.html', htmlInclude);
  gulp.watch("./*.html").on('change', browserSync.reload);
}

// gulp.task('styles', styles);
// gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)));
gulp.task('dev', gulp.series('build', 'watch'));