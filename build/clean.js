'use strict';

import gulp from 'gulp';
import del from 'del';


/**
 * cleans distribution, temp tests dir and coverage results
 *
 * @del: provide path to temp tests dir
 */
gulp.task('clean', (cb) => {
  del(['dist', '.tests', 'coverage'], cb)
});

/**
 * cleans the temporary tests dir
 *
 * @del: provide path to temp tests dir
 */
gulp.task('cleanTests', (cb) => {
  del(['.tests'], cb)
});
