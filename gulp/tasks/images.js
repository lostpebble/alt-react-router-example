gulp = require('gulp');
imagemin = require('gulp-imagemin');
notify = require('gulp-notify');

gulp.task('images', function() {
    return gulp.src('src/image/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('public/image'))
        .pipe(notify({message: "Image task complete"}));
});