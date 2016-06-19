var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var nested = require('postcss-nested');
var postCssImport = require('postcss-import');
var simpleVars = require('postcss-simple-vars');
var autoprefixer = require('autoprefixer');

gulp.task('default', function (cb) {
    var paths = [
        'assets/css/*.css'
    ];

    gulp.src(paths)
        .pipe(watch(paths))
        .pipe(postcss([
            postCssImport({path: __dirname}),
            simpleVars(),
            nested(),
            autoprefixer({browsers: ['last 2 versions']})
        ]))
        .pipe(gulp.dest('./build/'));
});