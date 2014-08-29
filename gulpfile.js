var gulp = require('gulp');

var csso = require('gulp-csso');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var deploy = require('gulp-gh-pages');
var nib = require('nib');
var autoprefixer = require('autoprefixer-stylus');

gulp.task('deploy', function(){
  return gulp.src('demo/**/*')
    .pipe(deploy());
});

gulp.task('default', function(){
  return gulp.src('src/index.styl')
    .pipe(stylus({
      paths: [__dirname+'/src'],
      use: [
        nib(),
        autoprefixer()
      ]
    }))

    // non-minified
    .pipe(rename('win98.css'))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('demo'))

    // minified
    .pipe(rename('win98.min.css'))
    .pipe(csso())
    .pipe(gulp.dest('dist'));
});