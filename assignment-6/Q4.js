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
    }
}