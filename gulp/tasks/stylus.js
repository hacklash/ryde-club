var gulp = require('gulp');
var stylus = require('gulp-stylus');
var axis = require('axis');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../config').stylus;

gulp.task('stylus', function() {
	gulp.src(config.src)
		.pipe(stylus({
			use: axis()
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 version']
		}))
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});