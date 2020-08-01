const { src, dest } = require('gulp');
const { paths } = require('./helpers/PathsHelper')
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const sourcemap = require('gulp-sourcemaps');

function scripts() {
    return src(paths.scripts.src)
    .pipe(concat(paths.jsOutputName))
    .pipe(uglify())
    .pipe(sourcemap.write('../maps'))
    .pipe(dest(paths.scripts.dest))
    .pipe(browserSync.stream())
}

exports.scripts = scripts;