// const numbers = [3, 7, 78, 3, 5, 345];

// const result = numbers.filter(num => num % 2 !== 0)
//     .map(num => num * 2).reduce((a, b) => a + b)

// console.log(result);

const numbers = [9, 8, 5, 23, 1, 4];
const result = numbers.filter(num => num % 2 !== 0).map(num => num * 2).reduce((a, b) => a + b);
console.log(result);
