
const employee = {
    name : 'Imran',
    designation : 'Software Engineer',
    salary : 50000,
    experience : 1
}

// Found key from object
const keys = Object.keys(employee);
const values = Object.values(employee);
const entries = Object.entries(employee);
console.log(keys);
console.log(values);
console.log(entries);

restriction in change, add , delete
Object.freeze(employee);


// restriction in add , delete
// User can modify
Object.seal(employee);


// Delete specific entry
delete employee.experience;
console.log(employee)


// Change entry
employee.salary += 5000;
console.log(employee);

// Add entries
employee.age = 25;
console.log(employee);