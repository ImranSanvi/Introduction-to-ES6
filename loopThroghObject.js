
const numbers = [12, 34, 11, 67, 88, 23]
for(num of numbers){
    console.log(num)
}

const employee = {
    name : 'Imran',
    designation : 'Software Engineer',
    salary : 50000,
    experience : 1
}
for(const key in employee){
    const value = employee[key]
    console.log(key, value)
}