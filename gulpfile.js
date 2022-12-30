const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src(['./sass/**/*.scss', './sass/**/*.sass'])
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest('./dist/css'));
};

exports.default = series(buildStyles);

exports.watch = function () {
  watch('./sass/**/*.scss', ['sass']);
};