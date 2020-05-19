function myReduce(array, func, initial) {
  let aggregator;
  initial === undefined ? aggregator = initial : aggregator = array[0];
  for (let i = 0; i < array.length; i++) {
    aggregator = func(aggregator, array[i]);
  }
  return aggregator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
