
const product = {name: 'Shirt', price:1000, quantity:1};

console.log(product.name)
console.log(product.price)
console.log(product.quantity)


const {name, price, quantity} = {name: 'Shirt', price:1000, quantity:1};

console.log(name)
console.log(price)
console.log(quantity)


const {n, p, tax} = {name: 'Shirt', price:1000, quantity:1};
//all are undefined
console.log(n)
console.log(p)
console.log(tax)

const device = {name:'phone', brand:'OPPO', price:29000}
const {brand} = device
console.log(brand)

const {name:na} = device
console.log(na)



// ----------------------------------------
//Destructuring in array

const numbers = [12, 34, 55, 13]
const [first, second] = numbers;
console.log(first, second)