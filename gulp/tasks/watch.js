var gulp = require('gulp');
var config = require('../config');

gulp.task('setWatch', function() {
	global.isWatching = true;
});

gulp.task('watch', ['setWatch', 'browserSync'], function() {
	gulp.watch(config.jade.src, ['jade']);
	gulp.watch(config.stylus.src, ['stylus']);
	gulp.watch(config.sass.src, ['sass']);
	gulp.watch(config.images.src, ['images']);
	gulp.watch(config.markup.src, ['markup']);
});