function isBalanced(str) {
  let chars = str.split('');
  let tally = 0;
  for (var i = 0; i < chars.length; i++) {
    if (chars[i] === '(') {
      tally++;
    } else if (chars[i] === ')') {
      tally--;
    }
    if (tally < 0) {
      return false;
    }
  }
  return tally === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
