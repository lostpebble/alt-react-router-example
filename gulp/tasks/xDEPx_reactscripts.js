// DEPRECIATED : only here if you decide to switch the JS bundling to Gulp again for some reason
//
// Remember to add the required packages back into your package.json file
//
//var gulp        = require('gulp');
//var concat      = require('gulp-concat');
//var notify      = require('gulp-notify');
//var react       = require('gulp-react');
//
//gulp.task('reactscripts', function() {
//    return gulp.src('src/react/**/*.jsx')
//        .pipe(react())
//        .pipe(concat('reactscripts.js'))
//        .pipe(gulp.dest('src/scripts'))
//        .pipe(notify({ message: 'React task complete' }));
//});