var gulp = require('gulp');
var webpack = require("gulp-webpack");
var webpackconfig = require("../webpack.config");

gulp.task("webpack", function() {
    return gulp.src('./src/js/index.js')
    .pipe(webpack(webpackconfig))
    .pipe(gulp.dest('public/js/'));
});
