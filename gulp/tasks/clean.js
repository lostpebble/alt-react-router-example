var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(cb) {
    del(['public/stylesheets', 'public/js', 'public/images'], cb);
});