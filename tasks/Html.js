const { src, dest } = require('gulp');
const {baseDir, deployDir } = require('./helpers/VariableHelper');
const htmlmin = require('gulp-htmlmin');
const useref      = require('gulp-useref');
const $if         = require('gulp-if')

function html() {
    return src(`${baseDir}/*.html`)
    .pipe(useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($if(/\.html$/, htmlmin({
        collapseWhitespace: true,
        processConditionalComments: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
    })))
    .pipe (dest(`${deployDir}/`))
}


exports.html = html;