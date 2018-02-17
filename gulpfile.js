console.log("USANDO O GULP");

var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');

gulp.task('jsmin',function(){
    console.log("Minificando o js");
});

gulp.task('cssmin',function(){
    console.log("Minificando o css");

    gulp
        .src('../src/css/*.css')
        .pipe(uglifycss());
});

gulp.task('htmlmin',function(){
    console.log("Minificando o html");
});

gulp.task('default', ['jsmin','cssmin', 'htmlmin']);


console.log(gulp);