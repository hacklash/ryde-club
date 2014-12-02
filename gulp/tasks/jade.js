var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config').jade;
//var vulcanize = require('gulp-vulcanize');

gulp.task('jade', function() {
	gulp.src(config.src)
		.pipe(jade({
			locals: config.locals
		}))
		.pipe(gulp.dest(config.dest));
});