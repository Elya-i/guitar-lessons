const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src(['sass/**/*.scss', 'sass/**/*.sass'])
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest('dist/css'));
}

function buildFonts() {
  return src('fonts/*').pipe(dest('dist/fonts'));
}

exports.default = series(buildStyles, buildFonts);
