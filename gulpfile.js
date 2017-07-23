const gulp = require('gulp')
const clean = require('gulp-clean')
const sass = require('gulp-sass')

gulp.task('clean', function () {
  return gulp.src('styles/main.css', { read: false })
    .pipe(clean())
})

gulp.task('sass-compile', function () {
  return gulp.src('main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
});

gulp.task('default', ['sass-compile'], function() {
    gulp.watch('./styles/**/*.scss', ['sass-compile'])
});
