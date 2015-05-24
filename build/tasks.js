'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';

import lintTasks from './lint';
import buildTasks from './build';
import testTasks from './test';
import watchTasks from './watch';
import serverTasks from './server';
import cleanTasks from './clean';
import vendorTasks from './vendor';

gulp.task('default', () => {
  gutil.log(gutil.colors.magenta('#########################################'));
  gutil.log(gutil.colors.cyan('gulp dev'), 'for dev usage');
  gutil.log(gutil.colors.cyan('gulp dist'), 'for building distribution');
  gutil.log(gutil.colors.cyan('gulp test'), 'for testing only');
  gutil.log(gutil.colors.magenta('#########################################'));
});

/**
 * run clean before building new stuff
 */
gulp.task('dev', ['clean'], () => gulp.start('devCleaned'));
gulp.task('dist', ['clean'], () => gulp.start('distCleaned'));

/**
 * build all the things
 */
gulp.task ('devCleaned', ['watch'], () => gulp.start('webserver'));
gulp.task ('distCleaned', ['test', 'build:scripts', 'build:styles', 'move:static']);


