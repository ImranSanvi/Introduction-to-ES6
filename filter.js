
// map can return But foreach can not return
const numbers = [12, 3, 7, 11, 9, 16, 24, 8]

const greaterThan10 = numbers.filter(num => num>10);
console.log(greaterThan10);
console.log(greaterThan10.length)

const evenNumbers = numbers.filter(num => num%2===0);
console.log(evenNumbers);