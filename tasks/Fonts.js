const { src, dest } = require('gulp');
const { paths } = require('./helpers/PathsHelper');
const ttf2ToWoff2 = require('gulp-ttf2woff2');
const ttf2ToWoff = require('gulp-ttf2woff');
const ttf2Eot = require('gulp-ttf2eot');
const changed = require('gulp-changed');

function toWoff2() {
    return src(paths.fonts.src)
    .pipe(changed(paths.fonts.dest, {extension: '.woff2'}))
    .pipe(ttf2ToWoff2())
    .pipe(dest(paths.fonts.dest))
}

function toWoff() {
    return src(paths.fonts.src)
    .pipe(changed(paths.fonts.dest, {extension: '.woff'}))
    .pipe(ttf2ToWoff())
    .pipe(dest(paths.fonts.dest))
}

function toEot() {
    return src(paths.fonts.src)
    .pipe(changed(paths.fonts.dest, {extension: '.eot'}))
    .pipe(ttf2Eot())
    .pipe(dest(paths.fonts.dest))
}

function ttfRebase() {
    return src(paths.fonts.src)
    .pipe(changed(paths.fonts.dest, {extension: '.ttf'}))
    .pipe(dest(paths.fonts.dest))
}

exports.toWoff2 = toWoff2;
exports.toWoff = toWoff;
exports.toEot = toEot;
exports.toWoff2 = toWoff2;
exports.ttfRebase = ttfRebase;