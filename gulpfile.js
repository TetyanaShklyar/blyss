let gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    // cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename');

gulp.task('compile-scss', function() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass())
        // .pipe(cleanCss())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch-scss', function() {
    return gulp.watch('src/scss/**/*.scss', gulp.series('compile-scss'));
});