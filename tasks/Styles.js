const { src, dest } = require('gulp');
const { paths } = require('./helpers/PathsHelper');
const { preprocessor } = require('./helpers/VariableHelper');

const sass         = require('gulp-sass');
const scss         = require('gulp-sass');
const less         = require('gulp-less');
const stylus       = require('gulp-stylus');
const cleancss     = require('gulp-clean-css');
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const { stream } = require('browser-sync');


global.runFunctionByName = function runFunctionByName(functionName, context = global) {
 	return context[functionName];
}

stream

const x = runFunctionByName(preprocessor);
console.log(x);

function styles() {
	return src(paths.styles.src)
	.pipe(runFunctionByName(preprocessor).on('error', preprocessor.logError))
	.pipe(concat(paths.cssOutputName))
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } }, format: 'beautify'  }))
	.pipe(dest(paths.styles.dest))
	.pipe(browserSync.stream())
}

exports.styles = styles;