const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // Keep looping until n is a one digit number
  while (n >= 10) {
    // Convert n to a string and split it into an array of digits
    const digits = n.toString().split("");
    // Sum up the digits and assign the result to n
    n = digits.reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  // Return the final one digit number
  return n;
}

module.exports = {
  getSumOfDigits,
};
