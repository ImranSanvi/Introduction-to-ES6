
// Multiline string
const address = `
    South shilkhali
    Baharchara 
    Teknaf 
    Cox's Bazar
`
console.log(address)


// template string
function sum(num1, num2){
    const output = `The sum of ${num1} and ${num2} is ${num1+num2}`;
    console.log(output)
}
sum(7, 5);

// Dynamic string
price = 100
const discountedPrice = `After 20% discount the discounted price is ${price*0.8}`;
console.log(discountedPrice);

// Arrow function
const add = (num1, num2) => num1+num2;
const result = add(9, 3);
console.log(result);