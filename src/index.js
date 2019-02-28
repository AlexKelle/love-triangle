/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.unshift(0);
  var triangles = [];
  var count = 0;
  for (var i = 1; i < preferences.length; i++) {
    var firstPreference = preferences[i];
    var secondPreference = preferences[firstPreference];
    var thirdPreference = preferences[secondPreference];
    if(firstPreference!==secondPreference &&
       secondPreference!==thirdPreference &&
       thirdPreference!==firstPreference &&
       preferences.hasOwnProperty(thirdPreference)===true && thirdPreference===i) {
      triangles.push(firstPreference,secondPreference,thirdPreference);
      count++;
    }
  }
  return count/3;
};
