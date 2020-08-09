const del = require('del');

function cleanPublic() {
    return del(['public']);
}

function cleanSrc() {
    return del(['src/css', 'src/**/dest', 'src/js/app.min.js.map', 'src/js/app.min.js']);
}

exports.cleanPublic = cleanPublic;
exports.cleanSrc = cleanSrc;