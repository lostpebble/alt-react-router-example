var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['styles']);
    gulp.watch('src/image/**/*', ['images']);
});