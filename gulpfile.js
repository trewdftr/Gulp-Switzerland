'use strict';
const { series, parallel } = require('gulp');

const watch       = require('./tasks/Watch');
const styles      = require('./tasks/Styles');
const scripts     = require('./tasks/Scripts');
const fonts       = require('./tasks/Fonts');
const images      = require('./tasks/Images');
const html        = require('./tasks/Html');
const assets      = require('./tasks/Public');

exports.start = watch.server;
exports.html = html.html;
exports.styles  = styles.styles;
exports.scripts = scripts.scripts;
exports.images  = images.images;
exports.convertFonts = series(fonts.toWoff2, fonts.toWoff, fonts.toSvg, fonts.toEot, fonts.ttfRebase)
exports.startWatch = watch.startWatch;
exports.dev   = series(series(this.convertFonts, images.images, styles.styles,scripts.scripts), 
parallel(watch.server, watch.startWatch));
exports.build = series(assets.publicFonts, assets.publicImages, parallel(assets.publicCss, assets.publicJs, html.html));


