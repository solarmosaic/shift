var clean = require("mosaic-gulp-task-clean");
var gulp = require("gulp");
var shift = require("./index");

// Remove everything in the public folder in preparation for a new build
gulp.task("clean", clean("public"));

// Generate the static site
gulp.task("default", ["clean"], function() {
  return gulp.src("example/views/**/*.hbs")
    .pipe(shift({
      hb: {
        data: "package.json",
        helpers: "example/helpers/**/*.js",
        partials: "example/partials/**/*.hbs"
      }
    }))
    .pipe(gulp.dest("public"));
});
