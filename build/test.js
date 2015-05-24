'use strict';

import gulp from 'gulp';

import runSequence from 'run-sequence';
import karma from 'karma';
import path from 'path';


gulp.task('test', ['build:tests'], _test);
gulp.task('exec:tests', _execTests);


/**
 * executes tasks in the given order
 */
function _test() {
  gulp.start('exec:tests');
}

/**
 * fires up karma and executes tests
 *
 * @resolve: provide path to karma config
 */
function _execTests(done) {
  karma.server.start({
    configFile: path.resolve('karma.conf.js')
  }, () => {
    //gulp.start('cleanTests');
    done();
  });
}
