'use strict';

const gulp = require('gulp'),
	typescript = require('gulp-typescript'),
	concat = require('gulp-concat'),
	merge = require('merge2'),
	sq = require('streamqueue'),
	webpack = require('gulp-webpack'),
	origWebpack = require('webpack'),
  tsOrig = require('typescript'),
  babel = require("gulp-babel");

const project = typescript.createProject('tsconfig.json', {
	//  declaration: true,
	//  sortOutput: true,
	 typescript: require('typescript')
});
	
gulp.task('build', function () {
	let result = project.src('src/**/*.ts')
	.pipe(typescript(project));
	
	return merge([
		result.js
      .pipe(gulp.dest('lib')),
      //.pipe(babel()),
		result.dts
			.pipe(gulp.dest('lib'))
	]);
	
})

gulp.task('pack', ['build'], function () {
	
	return gulp.src('./lib/index.js')
	.pipe(webpack({
		output: {
			filename: 'collection.js',
			libraryTarget: 'umd',
			library: 'collection'
		},
		externals: {
			'eventsjs': 'eventsjs'
		}
	}, origWebpack))
	.pipe(gulp.dest('dist'))
	
	/*let tsconfig = require(process.cwd() + '/tsconfig.json')
	
	let files = tsconfig.files.map(function (file) {
		console.log(file.replace('src','lib').replace('.ts','.js'))
		return gulp.src(file.replace('src','lib').replace('.ts','.js'));
	});
	
	return sq.apply(sq, [{objectMode:true}].concat(files))
	.pipe(concat('collection.js'))
	.pipe(wrap({
		namespace: 'collection',
		deps: [
			{name: 'eventsjs', globalName:'eventsjs', paramName: 'events' }
		],
		exports: 'exports'
	}))
	.pipe(gulp.dest('dist'));*/
	
})