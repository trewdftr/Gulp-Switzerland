const { src, dest } = require('gulp');
const { paths } = require('./helpers/PathsHelper');
const converter = require('gulp-ttf2woff2');
const changed = require('gulp-changed');

function toWoff2() {
    return src(paths.fonts.src)
    .pipe(changed(paths.fonts.dest, {extension: '.woff2'}))
    .pipe(converter())
    .pipe(dest(paths.fonts.dest))
}

function ttfRebase() {
    return src(paths.fonts.src)
    .pipe(dest(paths.fonts.dest))
}

exports.toWoff2 = toWoff2;
exports.ttfRebase = ttfRebase;