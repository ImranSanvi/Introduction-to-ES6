
function sum(num1, num2=0){
    const total = num1+num2;
    console.log(num1, num2);
    console.log(total);
}

function multiply(num1, num2=1){
    const total = num1*num2;
    console.log(num1, num2);
    console.log(total);
}

function fullName(firstName, lastName=''){
    const fullName = firstName+ ' ' + lastName;
    console.log(firstName, lastName);
    console.log(fullName);
}

function createUser(user={name:'Guest', age:20}){
    console.log(`Name : ${user.name} Age: ${user.age}`);
}

// sum(10);
// multiply(12);

// fullName('Imran');
// arraySum([1,2]);
createUser()
createUser({name:'Imran', age:25});
