var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer');

 gulp.task('browser',['mount'],function(){
	browserSync.init({
    watch: true,
		server:"./dist"
	});
});

 gulp.task('sass',function(){
	return gulp.src(['src/scss/base/variaveis.scss',
					 'src/scss/base/mixins.scss',
					'src/scss/*.scss'])
	.pipe(concat('style'))	
	.pipe(sass())
	.pipe(autoprefixer({
	    browsers: ['last 2 versions'],
	    cascade: false
	}))
	.pipe(gulp.dest('dist'))
});