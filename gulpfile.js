'use strict';
const { parallel, series } = require('gulp');

const sync     = require('./tasks/Watch');
const styles      = require('./tasks/Styles');
const scripts     = require('./tasks/Scripts');
const images      = require('./tasks/Images');
const startWatch    = require('./tasks/Watch')

exports.start = sync.server 
exports.styles  = styles.styles;
exports.scripts = scripts.scripts;
exports.images  = images.images;
exports.startWatch  = startWatch.startWatch;
exports.build   = parallel(images.images, styles.styles, scripts.scripts, sync.server, startWatch.startWatch);