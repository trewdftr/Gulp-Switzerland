'use strict';
const { series, parallel } = require('gulp');

const sync        = require('./tasks/Watch');
const styles      = require('./tasks/Styles');
const scripts     = require('./tasks/Scripts');
const fonts       = require('./tasks/Fonts')
const images      = require('./tasks/Images');
const startWatch  = require('./tasks/Watch')

exports.start   = sync.server 
exports.styles  = styles.styles;
exports.scripts = scripts.scripts;
exports.images  = images.images;
exports.fonts = fonts.toWoff2;
exports.startWatch  = startWatch.startWatch;
exports.build   = parallel(series(images.images, fonts.toWoff2, styles.styles, scripts.scripts), sync.server, startWatch.startWatch);