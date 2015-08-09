var combine = require("stream-combiner");
var dataJson = require("gulp-data-json");
var dataMatter = require("gulp-data-matter");
var gulp = require("gulp");
var hb = require("gulp-hb");
var htmltidy = require("gulp-htmltidy");
var merge = require("lodash.merge");
var nav = require("gulp-nav");
var prettyUrl = require("gulp-pretty-url");

// Default options
var defaults = {
  htmltidy: {
    // indent lines by 2 spaces
    indent: true,
    // don't wrap lines
    wrap: 0
  }
};

/**
 * Export the public `shift` function.
 *
 * @param {Object} [options] Configuration options.
 * @param {Object} [options.hb] Configuration options to pass into `gulp-hb`.
 * @param {Object} [options.htmltidy] Configuration options to pass into `htmltidy`.
 */
module.exports = function(options) {
  options = merge(defaults, options);
  return combine(
    dataJson(),
    dataMatter(),
    prettyUrl(),
    nav(),
    hb(options.hb),
    htmltidy(options.htmltidy)
  );
};
