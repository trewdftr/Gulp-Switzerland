'use strict';
const {src, dest, paraller, series, watch} = require('gulp');

let sync   = require('./tasks/BrowserSync.js');
let styles = require('./tasks/Styles.js');

exports.start = sync.server;
exports.styles = styles.styles;