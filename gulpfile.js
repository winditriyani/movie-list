var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src(['static/sass/**/*.scss','static/sass/main.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('static/css/compile'))
});

gulp.task('default', function(){
  gulp.watch(['static/sass/**/*.scss', 'static/sass/main.scss'], ['sass']);
});
