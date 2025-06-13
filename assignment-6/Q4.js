// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`.
//  The class should also have a method called
//  `fullName` that returns the 
// person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of 
// `Person` objects and returns the average age of all the people in the array.


class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName(){
        const result = `My fullname is ${this.firstName} ${this.lastName} and I am ${this.age} years old`
        return result;
    }

    averageAge(arr){
        const sum = arr.reduce((acc,i)=>acc+i.age,0);
        return sum/arr.length;
    }
}

const person1 = new Person('john','wick',10);
const person2 = new Person('sam','smith',10);
const person3 = new Person('raj','kumar',10);
const person4 = new Person('sally','wally',10);

const avgSum = person1.averageAge([person1,person2,person3,person4]);
console.log(avgSum);

const ans= person1.fullName()
console.log(ans);


