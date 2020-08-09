const { src, dest } = require('gulp');
const { paths } = require('./helpers/PathsHelper')
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const sourcemap = require('gulp-sourcemaps');
const babel = require('gulp-babel');


function scripts() {
    return src(paths.scripts.src)
    .pipe(sourcemap.init())
    .pipe(babel())
    .pipe(concat(paths.jsOutputName))
    .pipe(uglify())
    .pipe(sourcemap.write('.'))
    .pipe(dest(paths.scripts.dest))
    .pipe(browserSync.stream())
}

exports.scripts = scripts;
