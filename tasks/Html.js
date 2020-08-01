const { src, dest } = require('gulp');
let {baseDir, deployDir, preprocessor} = require('./helpers/VariableHelper');
const htmlmin = require('gulp-htmlmin');


function html() {
    return src(`${baseDir}/*.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe (dest(`${deployDir}/`))
}


exports.html = html;