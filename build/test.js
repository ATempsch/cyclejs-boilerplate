'use strict';

import gulp from 'gulp';

import karma from 'karma';
import path from 'path';


gulp.task('test', _test);

/**
 * fires up karma and executes tests
 *
 * @resolve: provide path to karma config
 */
function _test(done) {
  karma.server.start({
    configFile: path.resolve('karma.conf.js')
  }, () => done());
}
