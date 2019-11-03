"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

var browserSync = require("browser-sync").create();

var autoprefixerOptions = {
  browsers: ["last 2 versions", "> 5%", "Firefox ESR"]
};

sass.compiler = require("node-sass");

gulp.task("styles", function() {
  return gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch("sass/**/*.scss", gulp.series("styles"));
  gulp.watch("*.html").on("change", browserSync.reload);
});
