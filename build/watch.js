'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence'

gulp.task('watch:static', ['move:static'], () => {
  gulp.watch(['app/**.html', 'app/*.png'], ['move:static']);
});

gulp.task('watch:styles', ['build:styles'], () => {
  gulp.watch(['app/**/*.less'], ['build:styles']);
});

gulp.task('watch:js', ['build:scripts', 'test'], () => {
  gulp.watch(['app/**/*.js', 'test/**/*.js'], ['test'], () =>
    gulp.start('build:scripts')
  );
});

gulp.task('watch', ['watch:static', 'watch:js', 'watch:styles']);
