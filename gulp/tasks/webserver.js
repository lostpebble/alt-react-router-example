var gulp    = require('gulp');
var connect = require('gulp-connect');

var webserverOptions = {
    livereload : true,
    root : ['./']
};

gulp.task('webserver', function() {
    connect.server(webserverOptions);
});