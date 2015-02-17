gulp = require('gulp');
runSequence = require('run-sequence');

// DEFAULT TASK
// ************
//
// { CLEANS output folders } then
// { COMPILES images, scripts and styles } and
// { WATCHES images, scripts and styles for changes }
//
//                                    TASKS
//
// clean output folders             : clean
// compile images                   : images
// javascript compile + watch       : webpack
// styles compile                   : styles
// styles and images watch          : watch

gulp.task('default', ['clean'], function() {
    runSequence( ['images', 'webpack', 'styles', 'watch'] );
});