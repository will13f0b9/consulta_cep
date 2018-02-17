console.log("USANDO O GULP");

var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');


gulp.task('jsmin',function(){
    console.log("Minificando o js");

     gulp
        .src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))

});

gulp.task('cssmin',function(){
    console.log("Minificando o css");

    gulp
        .src('src/css/*.css')
        .pipe(babel({presets: ['es2015']}))
        .pipe(uglifycss())
        .pipe(gulp.dest('build/css'))
});

gulp.task('htmlmin',function(){
    console.log("Minificando o html");
    gulp
        .src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['jsmin','cssmin', 'htmlmin']);


console.log(gulp);