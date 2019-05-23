var gulp = require('gulp'),
	concat = require('gulp-concat'),
	webpack = require('webpack');

var pages = ['index'];

gulp.task('mount',function(){

	webpack(require('../webpack.config.js'),function(err,stats){
		if(err){
			console.log(err.toString());
		}
		console.log("Webpack finalizado!")
	})

	function mountPage(page,final){
		return gulp.src(['src/_header.html','src/'+page,'src/_footer.html'])
		.pipe(concat(final))
		.pipe(gulp.dest('dist'))
	}

	console.log('Task mount executada')

	for (var pag of pages){
		mountPage('_'+pag+'.html',pag+'.html');
	}
});


gulp.task('default',['browser'],function(){
	gulp.watch("./src/scss/*.scss",['sass','importSass','mount']);
	gulp.watch(['./src/*.html','./js/**.*'],['mount'])
});