'use strict';

//gulp plugins
import gulp from 'gulp';
import less from 'gulp-less';
import gutil from 'gulp-util';
import tap from 'gulp-tap';
import plumber from 'gulp-plumber';
import transpile from 'gulp-es6-module-transpiler';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';

//other plugins
import browserify from 'browserify';
import istanbul from 'browserify-istanbul';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

gulp.task('build:scripts', ['lint'], _scripts);
gulp.task('build:styles', _styles);
gulp.task('move:static', _static);
gulp.task('build:tests', ['lint'], _tests);

/**
 * browserifies your app
 *
 * @entries: provide the path to your app entry
 * @source: name your desired outputfile where your app is concatenated into
 * @dest: provide your distribution path
 * */
function _scripts() {
  return browserify({
    entries: './app/index.js',
    debug: true
  }).transform(babelify)
    .bundle()
    .on('error', (err) => {
      console.log(err.message);
      this.emit('end');
    })
    .pipe(source('output.js'))
    .pipe(gulp.dest('./dist'));
}

/**
 * concatenates all referenced less files
 * compiles less to css
 *
 * @src: provide the path to your root less file
 * @dest: provide your distribution path
 */
function _styles() {
  return gulp.src('app/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist'))
}

/**
 * copy all static files
 * @src: provide all possible filetypes
 * @dest: provide your distribution path
 * */
function _static() {
  return gulp.src(['app/**/*.html', 'app/**/*.png'])
    .pipe(gulp.dest('dist'))
}

/**
 * transpiles all sourcefiles required by tests
 *
 * @src: provide the path to your tests
 * @dest: provide your temporary tests dir
 * */
function _tests() {
  return gulp.src(['test/**/*.js'])
    .pipe(plumber())
    .pipe(transpile())
    .pipe(babel())
    .pipe(gulp.dest('.tests'))
}
