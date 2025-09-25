

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