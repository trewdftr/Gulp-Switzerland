const { src, dest } = require('gulp');
const changed     = require('gulp-changed');
const imagemin    = require('gulp-imagemin');
const { paths }   = require('./helpers/PathsHelper');
const cache = require('gulp-cache')

function images () {
    return src(paths.images.src)
    .pipe(changed(paths.images.dest))
    .pipe(cache(imagemin()))
    .pipe(dest(paths.images.dest))
}

exports.images = images;