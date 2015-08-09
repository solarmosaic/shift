/**
 * Log debug information to the console.
 *
 * @param {...Mixed} value Any number of values to log.
 *
 * @example {{debug "foo" this.bar}}
 */
module.exports = function(value) {
  console.log("----------------------------------------");
  if (arguments.length > 1) {
    Array.prototype.slice.call(arguments, 0, arguments.length - 1).forEach(function(arg) {
      console.log(arg);
    });
  } else {
    console.log(this);
  }
  console.log("----------------------------------------");
};
