const { src, dest } = require('gulp');
const { paths } = require('./helpers/PathsHelper');
const changed = require('gulp-changed');
const fonter  = require('gulp-fonter');
const toWoff2   = require('gulp-ttf2woff2');



function transform () {
    return src(paths.fonts.src)
    .pipe(changed(paths.fonts.dest, {extension: ['.woff', '.eot']}))
    .pipe(fonter(
        {
            formats: ['eot', 'woff']
        }
    ))
    .pipe(dest(paths.fonts.dest))
}

function transformToWoff2 () {
    return src(paths.fonts.src)
    .pipe(changed(paths.fonts.dest, {extension: '.woff2'}))
    .pipe(toWoff2())
    .pipe(dest(paths.fonts.dest))
}

function ttfRebase() {
    return src(paths.fonts.src)
    .pipe(changed(paths.fonts.dest, {extension: '.ttf'}))
    .pipe(dest(paths.fonts.dest))
}


exports.ttfRebase = ttfRebase;
exports.transform = transform;
exports.transformToWoff2 = transformToWoff2;