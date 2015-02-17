var gulp            = require('gulp');
var connect         = require('gulp-connect');
var notify          = require('gulp-notify');

gulp.task('reloadserver', function() {
    gulp.src("index.html")
        .pipe(connect.reload())
        .pipe(notify({message: "Server reloaded"}));
});