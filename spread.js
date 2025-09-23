
const numbers = [12, 43, 9, 20, 24, 5];
// console.log(numbers);
// console.log(...numbers);
// const maximum = Math.max(...numbers);
// console.log(maximum)

// const second = [...numbers];
// second.push(100);
// console.log(numbers)
// console.log(second)

// const third = [...numbers, ...second]
// console.log(third)

const person = {name:'adnan', Age:25}
console.log(person)
const employee = {designation:'Devoloper', ...person}
console.log(employee);


const total = (a, b , c, d=0) => a+b+c+d;
const arr = [12, 3, 5];
const res = total(...arr);
console.log(res)