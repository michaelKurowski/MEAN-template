const gulp = require('gulp')
const sass = require('gulp-sass')
const browserify = require('browserify')
const uglify = require('gulp-uglify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const babel = require('babelify');
const pug = require('gulp-pug')


const config = {
	pug: true
}



gulp.task('pug', () => {
    return gulp.src('./publicDev/**/*.pug')
	.pipe(pug())
    .pipe(gulp.dest('./public/'))
        .on('error', function (err) {console.log(err);this.emit('end')})
})

gulp.task('js', function(){
    return browserify('./publicDev/**/*.js', {debug: true})
    .transform(babel.configure({ presets: ['es2015', 'react'] }))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/'))
})

gulp.task('jsFast', function(){
    return browserify('./publicDev/**/*.js', {debug: true})
    .transform(babel.configure({ presets: ['es2015', 'react'] }))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/'))
})

gulp.task('sass', function () {
  return gulp.src('./publicDev/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/'))
        .on('error', function (err) {console.log(err);this.emit('end')})
})

gulp.task('watchCSS', () => gulp.watch('./publicDev/**/*.scss', ['sass']))

gulp.task('watchJS', () => gulp.watch('./publicDev/**/*.js', ['js']))

gulp.task('watchPUG', () => gulp.watch('./publicDev/**/*.pug', ['pug']))

gulp.task('default', () => gulp.start(['js', 'pug', 'sass','watchPUG', 'watchCSS', 'watchJS']));