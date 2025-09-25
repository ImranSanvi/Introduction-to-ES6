
const numbers = [1, 5, 8, 4, 2, 10, 7, 3, 9, 6];
const total = numbers.reduce((acc, curr) => acc+curr, 0);
console.log(total)

const Max = numbers.reduce((acc, curr) => acc>curr? acc : curr);
console.log(Max)