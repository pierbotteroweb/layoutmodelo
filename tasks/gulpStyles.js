var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	cssimport = require('gulp-cssimport');

 gulp.task('browser',['mount'],function(){
	browserSync.init({
    watch: true,
		server:"./dist"
	});
});

 gulp.task('sass',function(){
	return gulp.src('src/scss/*.scss')
	.pipe(sass())
	.pipe(autoprefixer({
	    browsers: ['last 2 versions'],
	    cascade: false
	}))
	.pipe(gulp.dest('src/csstemp'))
});

gulp.task('importSass',['sass'], function(){
	return gulp.src('src/csstemp/style.css')
	.pipe(cssimport())
	.pipe(gulp.dest('dist'))
})