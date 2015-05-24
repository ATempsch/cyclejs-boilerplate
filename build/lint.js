'use strict';

import gulp from 'gulp';
import eslint from 'gulp-eslint';

gulp.task('lint', _lint);

function _lint() {
  return gulp.src('./app/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
}
