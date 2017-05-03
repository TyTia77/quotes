const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');

gulp.task('buildjs', () => {
    return gulp
        // .src('[app/js/**/*.+(js|css)]')
        .src(['js/**/*.js'])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('buildcss', () => {
    return gulp
        .src(['styles/**/*.css'])
        .pipe(uglifycss({
            // "maxLineLen": 80,
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
        [
            './styles/**/*.css'
        ],

        ['buildcss']
    );

    gulp.watch(
        [
            './js/**/*.js',
        ],

        ['buildjs']
    );
});

//default
gulp.task('default', ['watch']);
