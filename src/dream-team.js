const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const names = members
    .filter((member) => typeof member === "string")
    .map((name) => name.trim().toUpperCase());
  if (names.length === 0) {
    return false;
  }
  const acronym = names
    .map((name) => name[0])
    .sort()
    .join("");
  return acronym;
}

module.exports = {
  createDreamTeam,
};
