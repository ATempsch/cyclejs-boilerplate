'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

let vendors = [
  'node_modules/cyclejs/dist/cycle.js'
];

gulp.task('collectVendors', () => {
  return gulp.src(vendors)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});
