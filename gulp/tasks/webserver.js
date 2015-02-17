var gulp    = require('gulp');
var connect = require('gulp-connect');

var webserverOptions = {
    livereload : true,
    root : [__dirname+"/../../"]
};

gulp.task('webserver', function() {
    connect.server(webserverOptions);
});