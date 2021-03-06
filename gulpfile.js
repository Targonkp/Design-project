const {src, dest, watch, series, parallel} = require("gulp");
const prettier = require("gulp-prettier");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const htmlmin = require("gulp-htmlmin");
const browserSync = require("browser-sync").create();
const del = require("del");
const terser = require("gulp-terser");
const imagemin = require("gulp-imagemin");

const formatter = () => {
    return src("src/**/*.{html,css,js}")
        .pipe(prettier({ singleQuote: true }))
        .pipe(dest("./dist"))
        .pipe(browserSync.stream())
}

const html = () => {
    return src("./src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest("./dist"))
}

const cssPrefix = () => {
    return src("./dist/styles/*.css")
        .pipe(autoprefixer())
        .pipe(dest("./dist/styles"))
}

const css = () => {
    return src("./dist/styles/*.css")
        .pipe(csso())
        .pipe(dest("./dist/mini-files"))
}

const js = () => {
    return src("./dist/js/*.js")
        .pipe(terser())
        .pipe(dest("./dist/mini-files"))
}

const img = () => {
    return src("./src/images/*{png,jpg,jpeg,gif,svg}")
        .pipe(imagemin(
            { verbose: true}
        ))
        .pipe(dest("./dist/images"))
}

const server = () => {
    browserSync.init(
        {
            server: {
                baseDir: "./dist"
            }
        }
    )
}

const clear = () => {
    return del("./dist");
}

const watcher = () => {watch("./src/**/*.{html,css,js}", series(formatter, cssPrefix, css, js, img))}

exports.dev = series(
    clear,
    formatter,
    cssPrefix,
    css,
    js,
    img,
    parallel(watcher, server)
);
