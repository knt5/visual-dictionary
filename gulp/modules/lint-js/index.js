const gulp = require('gulp');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');
const config = require('./config');
const eslintrc = require('./eslintrc');

module.exports = () => {
	return gulp.src(config.src)
	.pipe(plumber())
	.pipe(eslint(eslintrc))
	.pipe(eslint.format())
	.pipe(eslint.failAfterError());
};
