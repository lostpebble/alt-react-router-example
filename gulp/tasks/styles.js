var gulp            = require('gulp');
var sass            = require('gulp-ruby-sass');
var autoprefixer    = require('gulp-autoprefixer');
var rename          = require('gulp-rename');
var minifycss       = require('gulp-minify-css');
var notify          = require('gulp-notify');

var autoprefixerCompatibility =
    ['> 1%',
        'last 2 versions',
        'Opera >= 12',
        'Chrome >= 25',
        'Firefox >= 13',
        'ie >= 9'];

gulp.task('styles', function() {
    return gulp.src('src/sass/styles.scss')
        .pipe(sass({ style: 'expanded', "sourcemap=none": true }))
        .pipe(autoprefixer({browsers: autoprefixerCompatibility, cascade: false}))
        .pipe(gulp.dest('public/stylesheets'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('public/stylesheets'))
        .pipe(notify({ message:'Styles task complete' }));
});