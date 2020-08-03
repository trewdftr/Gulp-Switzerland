const { src, dest } = require('gulp');
const changed     = require('gulp-changed');
const imagemin    = require('gulp-imagemin');
const { paths }   = require('./helpers/PathsHelper');
const cache = require('gulp-cache')
const imageresize = require('gulp-image-resize');
const rename = require('gulp-rename');



function images () {
    return src(paths.images.src)
    .pipe(changed(paths.images.dest))
    .pipe(cache(imagemin()))
    .pipe(dest(paths.images.dest))
}

let widthSm = 270;
let widthMd = 400;
let widthLg = 600;

function resizeSm () {
    return src(paths.images.dest + '/*.jpg')
    .pipe(imageresize(
        {
            width: widthSm,
            height: 220,
            crop: false,
        }
    ))
    .pipe(rename((path) => {
        path.basename += '-sm'
    }))
    .pipe(dest(paths.images.dest + '/small'))
}

function resizeMd () {
    return src(paths.images.dest + '/*.jpg')
    .pipe(imageresize(
        {
            width: widthMd,
            height: 350,
            crop: false,
        }
    ))
    .pipe(rename((path) => {
        path.basename += '-md'
    }))
    .pipe(dest(paths.images.dest + '/medium'))
}

function resizeLg () {
    return src(paths.images.dest + '/*.jpg')
    .pipe(imageresize(
        {
            width: widthLg,
            height: 400,
            crop: false,
        }
    ))
    .pipe(rename((path) => {
        path.basename += '-lg'
    }))
    .pipe(dest(paths.images.dest + '/large'))
}


function resizeSm2x () {
    return src(paths.images.dest + '/*.jpg')
    .pipe(imageresize(
        {
            width: widthSm + widthSm,
        }
    ))
    .pipe(rename((path) => {
        path.basename += '-sm@2x'
    }))
    .pipe(dest(paths.images.dest + '/small/@2x'))
}

function resizeMd2x () {
    return src(paths.images.dest + '/*.jpg')
    .pipe(imageresize(
        {
            width: widthMd + widthMd,
        }
    ))
    .pipe(rename((path) => {
        path.basename += '-md@2x'
    }))
    .pipe(dest(paths.images.dest + '/medium/@2x'))
}

function resizeLg2x () {
    return src(paths.images.dest + '/*.jpg')
    .pipe(imageresize(
        {
            width: widthLg + widthLg,
        }
    ))
    .pipe(rename((path) => {
        path.basename += '-lg@2x'
    }))
    .pipe(dest(paths.images.dest + '/large/@2x'))
}


exports.images = images;
exports.resizeSm = resizeSm;
exports.resizeMd = resizeMd;
exports.resizeLg = resizeLg;
exports.resizeSm2x = resizeSm2x;
exports.resizeMd2x = resizeMd2x;
exports.resizeLg2x = resizeLg2x;


