// 3.3 Create a class Teacher that inherits from the Person 
// class and has a property subjectsTaught. Override the farewell()
//  method to include information about what the teacher teaches.


class Person{
    constructor(name){
        this.name = name;
    }

    farewell(){

    }
}

class Teacher extends Person{
    constructor(name,subjectsTaught){
        super(name);
        this.subjectsTaught = subjectsTaught;
    }

    farewell(){
        let result = `${this.name} used to teach ${this.subjectsTaught}`;
        return result;
    }
}

const teacher = new Teacher('alex','physics');
console.log(teacher.farewell());



