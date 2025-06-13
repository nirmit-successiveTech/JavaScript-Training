// 3.1 Create a class Person with properties name, age, gender, and interests.
//  Add a method greeting() that returns a string introducing the person.
//  Also add a method farewell() 
// that returns a string saying goodbye to the person.


class Person{
    constructor(name,age,gender,interest){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interest =interest;
    }

    greeting(){
        let str = `Hello, My name is ${this.name} & I am ${this.age} years old.My gender is ${this.gender} and my interest are ${this.interest}. `;
        return str;
    }

    farewell(){
        let str = `Goodbye, ${this.name} !!`;
        return str;
    }

    
}

const userOne = new Person('alex',23,'male','working out');
console.log(userOne.greeting());
console.log(userOne.farewell());


const userTwo = new Person('simran',34,'female','reading books');
console.log(userTwo.greeting());
console.log(userTwo.farewell());

