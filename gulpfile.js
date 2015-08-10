var clean = require("mosaic-gulp-task-clean");
var ghpages = require("gh-pages");
var gulp = require("gulp");
var path = require("path");
var shift = require("./index");

// Generate the static site
gulp.task("build", ["clean"], function() {
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

// Remove everything in the public folder in preparation for a new build
gulp.task("clean", clean("public"));

// By default, build the site anytime a source file changes.
gulp.task("default", ["build"], function() {
  gulp.watch("example/**/*", ["build"]);
});

// deploy the public folder to gh-pages
gulp.task("deploy", ["build"], function(cb) {
  ghpages.publish(path.join(process.cwd(), "public"), cb);
});
