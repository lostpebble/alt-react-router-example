var gulp    = require('gulp');

// Starts webserver
//
// Reloads server on changes to output folder

gulp.task('liveserver', ['webserver'], function() {
    gulp.watch('./public/**/*', ['reloadserver']);
});