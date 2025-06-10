// 3.2 Create a class Student that inherits from the Person class 
// and has a property studies. Override the greeting() method 
// to include information about what the student is studying.


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log("This is parent's class function")
    }


}

    class Student extends Person{
        constructor(name,age,studies){
            super(name,age);
            this.studies = studies;
        }

        greeting(){
        super.greeting();
        console.log(`Hello I am ${this.name} & I'm ${this.age} years old. I'm studying ${this.studies}`)
        }

    }


    const student = new Student('nirmit',21,'computer-science');
    student.greeting();