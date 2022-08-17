const {task, src, dest, series, watch} = require('gulp')
const babel = require('gulp-babel')
const minify = require('gulp-minify');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

const path = {
    js: {
        src: 'src/**/*.js',
        dist: 'dist'
    },
    scss: {
        src: 'src/**/*.scss',
        dist: 'dist'
    }
}

task('js', () => {
    return src(path.js.src)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minify())
        .pipe(dest(path.js.dist))
})

task('scss', () => {
    return src(path.scss.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest(path.scss.dist))
})

task('watch', () => {
    watch(path.js.src, series('js'))
    watch(path.scss.src, series('scss'))
})

task('default', series('js', 'scss'))
