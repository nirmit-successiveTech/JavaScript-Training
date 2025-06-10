// 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const person ={
    name:"nirmit",
    age:21,
    gender:"male",
    designation:"trainee",
    fn : function(){
        return this.name;
    },
    arr:[1,2,3,4],
    features:{
        height:'175',
        eye: "brown"
    }
}



const deepCopy =(person,newObj)=>{
    for(let i in person){
        newObj[i]=person[i];
    }
    return newObj;
}

let newObj={};

const result = deepCopy(person,newObj)
console.log(result);

