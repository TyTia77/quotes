const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');

gulp.task('buildjs', () => {
    return gulp
        .src(['js/**/*.js'])
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('buildcss', () => {
    return gulp
        .src(['styles/**/*.css'])
        .pipe(uglifycss({
            "uglyComments": false
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
    gulp.watch(
        ['./styles/**/*.css'],
        ['buildcss']
    );

    gulp.watch(
        ['./js/**/*.js'],
        ['buildjs']
    );
});

//default
gulp.task('default', ['watch']);
