const gulp = require("gulp");
const sass = require("gulp-sass");
const prefix = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");
const reload = require("gulp-livereload");
const babel = require("gulp-babel");
const minifyCSS = require("gulp-minify-css");
const minifyJS = require("gulp-uglify");
const pipeline = require("readable-stream").pipeline
sass.compiler = require("node-sass");
reload({ start: true });

gulp.task("sass", () => {
    return gulp.src("./assetts/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./assetts/css"))
    .pipe(reload());
});

gulp.task("html", () => {
    return gulp.src("./index.html")
    .pipe(reload());
});

gulp.task("prefix", () => {
    return gulp.src("./assetts/css/main.css")
    .pipe(prefix({
        browsers: ["last 2 versions"],
        cascase: false 
    }))
    .pipe(gulp.dest("./assetts/css"));
});

gulp.task("minify-css", () => {
    return gulp.src("./assetts/css/*.css")
    .pipe(cleanCss({ compatibility: "ie8" }))
    .pipe(minifyCSS())
    .pipe(gulp.dest("./dist"));
})

gulp.task("watch", () => {
    reload.listen();
    gulp.watch("./assetts/sass/**/*.scss", ["sass"]);
    gulp.watch("./index.html", ["html"]);
    gulp.watch("./assetts/js/script.js", ["babel"]);
});

gulp.task("babel", () => {
    return gulp.src("./assetts/js/script.js")
    .pipe(babel({
        presets: ["@babel/preset-env"]
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task("minify", () => {
    return gulp.src("./assetts/js/script.js")
    .pipe(babel({
        presets: ["@babel/preset-env"]
    }))
    .pipe(minifyJS().on("error", console.error))
    .pipe(gulp.dest("dist"));
})

gulp.task("default", ["watch"]);