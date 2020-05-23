// Write a function that takes any two version numbers in this format x.x.x... and
// compares them, with the result of this comparison showing whether the first
// is less than, equal to, or greater than the second version:
// * If version1 > version2, we should return 1.
// * If version1 < version2, we should return -1.
// * If version1 === version2, we should return 0.
// * If either version number contains characters other than digits and the . character, we should return null.
//
// Example:
// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37


// Problem
// * In dot notation, we have at least one number, separated from other numbers with a .
// * The left most numbers are major versions, with numbers to the right indicating more minor level releases
// * Therefore, evaluate each comparison from left to right, can return the comparison at first non-equal value
// Test Cases
// console.log(compareVersions('0.1', '1'));
// console.log(compareVersions('poopdedoop', '1.2'));
// console.log(compareVersions('1.1', '1.2'));
// console.log(compareVersions('1.2.0.0', '1.18.2'));
console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
// Data Structures
// * handle either number or string input (would confirm this with interviewer)
// * typecast the parameters as strings to make use of . delimiter
// * using numerical comparison
// Algorithm
// * split string into array by . delimiter
// * if one array is longer than the other, provide zero as a default value for shorter to compare
// * return comparison value as soon as array1[index] !== array2[index]
// Code
function compareVersions(version1, version2) {
  // guard clause for invalid input
  let validInput = /^[0-9]+(\.[0-9]+)*$/;
  if (!validInput.test(version1) || !validInput.test(version2)) { return null }

  // identify length of longest version
  let length = version1.length > version2.length ? version1.length : version2.length;
  let arr1 = version1.split('.');
  let arr2 = version2.split('.');
  // iterate left to right and compare by numerical value the version number,
  // returning 1 or -1 if they are not equal. If the array does not have a value
  // to compare against because it has fewer dots, provide it with 0 as a comparison
  for (var i = 0; i < length; i++) {
    if ((parseInt(arr1[i], 10) || 0) > (parseInt(arr2[i], 10) || 0)) {
      return 1;
    } else if ((parseInt(arr1[i], 10) || 0) < (parseInt(arr2[i], 10) || 0)) {
      return -1;
    }
  }
  // if entire loop completes and no inequalities are found, versions are equal
  return 0;
}
