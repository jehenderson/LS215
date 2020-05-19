function myMap(array, func) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]));
  }
  return result;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]
