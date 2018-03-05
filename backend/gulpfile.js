const gulp = require('gulp');
const ts = require('gulp-typescript');
const mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var babel = require('babel-register');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
    .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('mocha', function () {
  return gulp.src(['src/**/*.ts', 'test/**/*.ts'], {
    read: false
  })
  // .pipe(mocha({ compilers: 'ts:ts-node/register',reporter: 'list' }))
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts', 'mocha']);
});



gulp.task('assets', function () {
  return gulp.src(JSON_FILES)
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['mocha', 'watch', 'assets']);