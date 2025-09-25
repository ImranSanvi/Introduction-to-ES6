
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is Eating...`);
    }
}



class Dog extends Animal{
    constructor(name, breed, age){
        super(name, age)
        this.breed = breed
    }

    bark(){
        console.log(`${this.name} is barking...`);
    }
}



class Cat extends Animal{
    constructor(name, color,age){
        super(name, age)
        this.color = color
    }
    meow(){
        console.log(`${this.name} is calling...`);
    }
}



class bird extends Animal{
    constructor(name, species,age){
        super(name, age)
        this.species = species
    }

    fly(){
        console.log(`${this.name} is flying...`);
    }
}

const dog1 = new Dog('Tom', 'bangladeshi', 9);
console.log(dog1);
dog1.eat()
dog1.bark()


const cat1 = new Cat('mishu', 'white', 3)
console.log(cat1);
cat1.eat()
cat1.meow()