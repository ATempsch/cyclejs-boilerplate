# cyclejs-boilerplate

Boilerplate for starting a with Cycle.js

Since setting up the environment is the most annoying part of starting with an new app, i built myself a boilerplate.
I'm still new with Cycle and the whole stream thing, especially testing streams... so if i'm tending in the wrong 
direction somewhere, feel free to share your thoughts. it's highly appreciated! ;)

i try to be as complete as possible with commenting, so maybe someone can save an hour or two for not learning the hard way.


###Short description which packages i used and what's their purpose.

| Packages used | Why?         |
| ------------- | ------------ |
| gulp          | Taskrunner for building stuff |
| gulp-eslint   | Linting all the js-files |
| gulp-less     | Transpiles Less to CSS |
| gulp-server-livereload | Fires up a development server with livereloading on save |
| gulp-concat   | Concatenates js-files into one long file |
| gulp-util     | Logs with some eye-candy, while gulp is building stuff |
| del           | Deletes files - used for cleanup |
| babel         | Transpiles ES6 to ES5 |
| babel-eslint  | Transpiles for Linting |
| browserify    | Packs the whole app with its dependencies into one bundled file |
| babelify      | Transpiles ES6 to ES5 while packing with browserify |
| minifyify     | Minifies the bundled app |
| istanbulify   | Measures testcoverage while testing with karma |
| karma         | Karma testrunner |
| karma-jasmine | Use Jasmine as testsuite |
| karma-phantomjs-launcher | Testing in phantomjs (headless) |
| karma-browserify | Loads the dependencies for each test |
| karma-coverage | outputs the testcoverage measured with istanbul(ify) |


Packages are version locked for now, since nearly nobody is following SemVer in the npm world.

Cycle app is very very basic, that's because it's more about the surrounding environment here.
As I've wrapped my head around how to test streams i'll push an update. 
