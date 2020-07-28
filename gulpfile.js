'use strict';
const { series, parallel } = require('gulp');

const watch        = require('./tasks/Watch');
const styles      = require('./tasks/Styles');
const scripts     = require('./tasks/Scripts');
const fonts       = require('./tasks/Fonts');
const images      = require('./tasks/Images');

exports.start   = watch.server 
exports.styles  = styles.styles;
exports.scripts = scripts.scripts;
exports.images  = images.images;
exports.startWatch = watch.startWatch;
exports.build   = parallel(series(images.images, fonts.toWoff2, fonts.ttfRebase ,styles.styles, scripts.scripts), watch.server, watch.startWatch);

