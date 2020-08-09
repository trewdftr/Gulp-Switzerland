const { src, dest } = require('gulp');
const { paths } = require('./helpers/PathsHelper');


function publicCss () {
    return src(paths.styles.srcPublic)
    .pipe(dest(paths.styles.public))    
}

function publicJs () {
    return src(paths.scripts.srcPublic)
    .pipe(dest(paths.scripts.public))    
}


function publicFonts () {
    return src(paths.fonts.srcPublic)
    .pipe(dest(paths.fonts.public))    
}

function publicImages () {
    return src(paths.images.srcPublic)
    .pipe(dest(paths.images.public))    
}


exports.publicCss = publicCss;
exports.publicJs = publicJs;
exports.publicFonts = publicFonts;
exports.publicImages= publicImages;