
const person = {
    name : "Imran",
    age : 25,
    isRich : false,
    friends : ['rakib', 'opi', 'saif'],
    department : 'CSE',
    university : 'CU'
}

console.log(person, typeof person);


// Object to JSON
const personJson = JSON.stringify(person);
console.log(personJson)
console.log(typeof(personJson))



//JSON t5o Object
const jsonPerson = JSON.parse(personJson);
console.log(jsonPerson, typeof jsonPerson);