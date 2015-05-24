'use strict';

import gulp from 'gulp';
import server from 'gulp-server-livereload';

/**
 * runs a development server with browserreload based on livereload-plugin
 *
 * @src: directory to serve
 */
gulp.task('webserver', () => {
  let serverconfig = {
    host: 'localhost',
    port: 4444,
    livereload: true,
    directoryListing: false,
    open: true
  }

  return gulp.src('dist')
    .pipe(server(serverconfig));
});
