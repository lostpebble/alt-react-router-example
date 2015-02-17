// DEPRECIATED : only here if you decide to switch the JS bundling to Gulp again for some reason
//
// Remember to add the required packages back into your package.json file
//
//var gulp        = require('gulp');
//var concat      = require('gulp-concat');
//var notify      = require('gulp-notify');
//var rename      = require('gulp-rename');
//var uglify      = require('gulp-uglify');
//var connect     = require('gulp-connect');
//
//gulp.task('scripts', function() {
//    return gulp.src('src/scripts/**/*.js')
//        .pipe(concat('main.js'))
//        .pipe(gulp.dest('public/js'))
//        .pipe(rename({suffix: '.min'}))
//        .pipe(uglify())
//        .pipe(gulp.dest('public/js'))
//        .pipe(notify({ message: 'Scripts task complete' }))
//        .pipe(connect.reload());
//});