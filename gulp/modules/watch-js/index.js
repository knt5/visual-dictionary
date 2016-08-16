const gulp = require('gulp');
const lint = require('../lint-js/config');
const build = require('../build-js/config');

module.exports = (done) => {
	gulp.watch(lint.src, ['lint:js']);
	gulp.watch(build.watch.src, ['build:js']);
	done();
};
