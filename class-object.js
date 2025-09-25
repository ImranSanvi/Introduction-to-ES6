
class Player {
    constructor(name, age){
        this.name = name;
        this.age = age
        this.country = 'Belgium'
    }

    goal(){
        console.log('Score a Goal');
    }
}

const player1 = new Player('KDB', 34);
const player2 = new Player('Hazard', 40);

console.log(player1)
console.log(player2)

console.log(player1 instanceof Player);
player1.goal()