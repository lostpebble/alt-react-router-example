var gulp    = require('gulp');
var connect = require('gulp-connect');

var webserverOptions = {
    livereload : true,
    root : [__dirname+"/../../public/"],
    fallback: __dirname+"/../../index.html"
};

gulp.task('webserver', function() {
    connect.server(webserverOptions);
});