// Implement encoding and decoding for the rail fence cipher.
//
// The Rail Fence cipher is a form of transposition cipher that gets its name
// from the way in which it's encoded. It was already used by the ancient Greeks.
//
// In the Rail Fence cipher, the message is written downwards on successive
// "rails" of an imaginary fence, then moving up when we get to the bottom
// (like a zig-zag). Finally the message is then read off in rows.
//
// For example, using three "rails" and the message
// "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:
//
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// Then reads off:
//
// WECRLTEERDSOEEFEAOCAIVDEN
// To decrypt a message you take the zig-zag shape and fill the ciphertext
// along the rows.
//
// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// The first row has seven spots that can be filled with "WECRLTE".
//
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Now the 2nd row takes "ERDSOEEFEAOC".
//
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Leaving "AIVDEN" for the last row.
//
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// If you now read along the zig-zag shape you can read the original message.

// Define the Problem
// Encoding: input (string message, number of rails (integer))
// let n = number of rails and r = the rail itself
// 2 RAILS
//       0123456789
// r=0 | 0.2.4.6.8. |
// r=1 | .1.3.5.7.9 |
// [0][0] = 0, [1][1] = 1, [0][2] = 2, [1][3] = 3, [0][4] = 4
// 3 RAILS
//       0123456789
// r=0 | 0...4...8. |
// r=1 | .1.3.5.7.9 |
// r=2 | ..2...6... |
// [0][0] = 0, [1][1] = 1, [2][2] = 2, [1][3] = 3, [0][4] = 4
// 4 RAILS
//       0123456789
// r=0 | 0.....6... |
// r=1 | .1...5.7.. |
// r=2 | ..2.4...8. |
// r=3 | ...3.....9 |
// [0][0] = 0, [1][1] = 1, [2][2] = 2, [3][3] = 3, [2][4] = 4, [1][5] = 5, [0][6] = 6
// 5 RAILS
//       0123456789
// r=0 | 0.......8. |
// r=1 | .1.....7.9 |
// r=2 | ..2...6... |
// r=3 | ...3.5.... |
// r=4 | ....4..... |
// first index starts at zero, increments until numRails - 1, decrements to 0, and repeats
// second index starts at zero, increments until str.length - 1
// Test Cases
console.log(encode('WE ARE DISCOVERED FLEE AT ONCE', 3) === 'WECRLTEERDSOEEFEAOCAIVDEN');
// Data Structures
// We are provided with a string
// Will use a 2-layer nested array to store the chars from the input str

// Algorithm
// remove the whitespace from the input string, create a 2 layer nested array
// with first level array of length numRails and second level of length string
// set an incrementer that increments when it is less than num rails, switches
// to decrementing when it hits numRails - 1 and flips back at 0 (repeating)
// set the value of [j][i] to str.indexOf(i)
// once the matrix array is populated, flatten it and join the characters together,
// return that value

// Code
function encode(str, numRails) {
  let trimmedStr = str.split(' ').join('');
  let length = trimmedStr.length;
  let cipheredChars = [];
  for (var i = 0; i < numRails; i++) {
    cipheredChars.push(new Array(length))
  }

  let j = 0;
  let increment = 1;
  for (var i = 0; i < length; i++) {
    cipheredChars[j][i] = trimmedStr.charAt(i);
    j += increment;
    if ((j === numRails - 1) || (j === 0)) { increment *= -1 };
  }
  return cipheredChars.flat().join('');
}
