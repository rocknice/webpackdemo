var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
// var path = {
// 	scripts: ['config/config.js','controller/initController.js','controller/indexController.js','models/indexModel.js',]
// }
//编译koa的es文件
gulp.task('Babel',function(){
	gulp.src('./**/*.es')
		.pipe(babel({
			"presets":[
			"es2015",
			"stage-0"
			]
		}))
		.pipe(rename({extname: ".js"}))
		.pipe(gulp.dest('./'));
});
//监听源文件变化
gulp.task('watch', function () {
	gulp.watch('./**/*.es',['Babel']);
});
gulp.task('default',['Babel','watch']);
// gulp.watch('config/*.es.js',['config']);