

const student = {
    name: 'Imran',
    department: 'CSE',
    age: 25,
    1: 18,
    2: 145,
    'location' : "Cox's Bazar",
    mother : {
        age: 45
    }
}

// dot notation
const studentName = student.name
const studentLocation = student.location
const studentDepartment = student.department
const output = `student name is ${studentName} his department is ${studentDepartment} and location ${studentLocation}`
console.log(output)


// Bracket notation
const studentOne = student['1']
const studentTwo = student[2]
const studentDept = student['department']
const studentLocation2 = student['location']
console.log(studentOne, studentTwo, studentDept, studentLocation2)


// If undefined
console.log(student.mother?.age);