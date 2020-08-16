'use strict';
const { series, parallel } = require('gulp');

const watch       = require('./tasks/Watch');
const styles      = require('./tasks/Styles');
const scripts     = require('./tasks/Scripts');
const fonts       = require('./tasks/Fonts');
const images      = require('./tasks/Images');
const html        = require('./tasks/Html');
const assets      = require('./tasks/Public');
const unusable    = require('./tasks/Styles');
const clean       = require('./tasks/Clean');

exports.convertImages = 
    series
    (
        images.images,
        images.resizeSm, 
        images.resizeMd, 
        images.resizeLg,
        images.resizeSm2x,
        images.resizeMd2x,
        images.resizeLg2x,
        images.resizeSm3x,
        images.resizeMd3x,
        images.resizeLg3x, 
        images.cachemin
    );

exports.convertFonts = 
    parallel
    (
        fonts.transform,
        fonts.transformToWoff2,
        fonts.ttfRebase
    );

exports.dev = series(
    series
    (
        this.convertFonts, 
        this.convertImages, 
        styles.styles,
        scripts.scripts
    ), 
         
    parallel(watch.sync,watch.startWatch));

exports.devClear = clean.cleanSrc;

exports.build = series(
    series
    (
        clean.cleanPublic,
        unusable.unusable, 
        assets.publicFonts, 
        assets.publicImages
    ), 
    parallel(assets.publicCss, assets.publicJs, html.html));
