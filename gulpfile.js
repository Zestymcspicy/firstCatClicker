var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin')
(gulpgulp.task('default', function(){
  gulp.watch('js/*.js').on('change', browserSync.reload);
  gulp.watch('index.html').on('change', browserSync.reload);
  gulp.watch('css/*.css').on('change', browserSync.reload);
  browserSync.init({
    server:  {
        baseDir: "./",
      }
  });
  });