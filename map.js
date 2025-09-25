

const numbers = [12, 4, 5, 7, 3, 9];

const double = numbers.map(x => x*2);
const square = numbers.map(x => x*x);
const multiplyByIndex = numbers.map((x, index) =>{

});
console.log(double)
console.log(square)


const friends = ['Asif', 'saif', 'Imran', 'mahedi']
const stringLen = friends.map(name => name.length);
const firstCharacter = friends.map(name => name[0]);
const firstCharacterLower = friends.map(name => name[0].toLowerCase());
console.log(stringLen);
console.log(firstCharacter);
console.log(firstCharacterLower);


const students = [
     {id:1, name: 'imran', age:25, marks: 99},
     {id:2, name: 'saif', age:25, marks: 70},
     {id:3, name: 'sanvi', age:24, marks: 90},
     {id:4, name: 'KDB', age:24, marks: 99}
]

const marks = students.map(student => student.marks);
console.log(marks)

const goodStudents = students.filter(student => student.marks>=90);
console.log(goodStudents)

const firstGoodStudent = students.find(student => student.marks>=90);
console.log(firstGoodStudent)