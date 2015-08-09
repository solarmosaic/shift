# Shift

Shift is a static site generator for [Handlebars](http://handlebarsjs.com/). It is, in essence, a simple wrapper for a
handful of underlying libraries which allows for easy compilation of Handlebars templates into static HTML files using
[Gulp][http://gulpjs.com/].

## Install

`npm install --save-dev mosaic-shift`

## Usage

```javascript
var gulp = require("gulp");
var shift = require("mosaic-shift");

// Compile all the handlebars templates in the `source` folder.
gulp.task("build", function() {
  return gulp.src("source/**/*.hbs")
    .pipe(shift())
    .pipe(gulp.dest("public"));
});
```

An example build which uses [handlebars-layouts](https://github.com/shannonmoeller/handlebars-layouts) can be found in
this repository:
- [Source files]()
- [Gulpfile.js]()
- [Output]()
- [Live example of output]()

### Data

Data can be gathered and used inside of your Handlebars templates in a variety of ways. Unless otherwise noted, the
gathered data will be available on the `data` property of the `file` object as specified in
[gulp-data](https://github.com/colynb/gulp-data).

- [Front Matter](https://github.com/kflorence/gulp-data-matter) defined at the top of the template.
- [JSON companion files](https://github.com/kflorence/gulp-data-json) which live next to your template files.
- [Data files](https://github.com/shannonmoeller/gulp-hb#data-stringarraystringobjectfunction) from anywhere inside the
  current working directory. This data will be available in the root template context with in a structure mirroring the
  directory and file names of the given files.

### Navigation

A [navigation tree](https://github.com/jessaustin/gulp-nav) will be created automatically for all the files found within
the given `gulp.src` directory and attached to the `file.data` property as `file.data.nav`.

### Compilation

Template compilation is handled by [gulp-hb](https://github.com/shannonmoeller/gulp-hb), which provides options for
registering custom Handlebars [helpers](http://handlebarsjs.com/block_helpers.html) and
[partials](http://handlebarsjs.com/partials.html).

### Output

Output will be piped to the given `gulp.dest` directory and prettified with
[gulp-htmltidy](https://github.com/ayhankuru/gulp-htmltidy).

## License

MIT
