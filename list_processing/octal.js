function octalToDecimal(numString) {
  const BASE = 8;
  return numString.split('')
                  .reverse()
                  .map((digit, i) => Number(digit) * BASE ** i)
                  .reduce((sum, digit) => sum + digit);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
