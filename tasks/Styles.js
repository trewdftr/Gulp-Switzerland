const { src, dest } = require('gulp');
const { paths } = require('./helpers/PathsHelper');

const sass         = require('gulp-sass');
const scss         = require('gulp-sass');
const less         = require('gulp-less');
const stylus       = require('gulp-stylus');
const cleancss     = require('gulp-clean-css');
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sourcemap = require('gulp-sourcemaps');
const uncss = require('postcss-uncss');


function styles() {
	return src([paths.styles.src, paths.styles.dest])
	.pipe(sass())
	.pipe(sourcemap.init())
	.pipe(cleancss( {level: { 1: { specialComments: 0 } }, format: 'beautify' }))
	.pipe(concat(paths.cssOutputName))
	.pipe(sourcemap.write('.'))
	.pipe(dest(paths.styles.dest))
	.pipe(browserSync.stream())
}


function unusable () {
	
	let plugins = [
		uncss({
			html: ['src/index.html']
		})
	];

	
	return src(paths.styles.dest + '/app.min.css') 
	.pipe(postcss(plugins))
	.pipe(dest('src/css/'))
}


exports.styles = styles;
exports.unusable = unusable;