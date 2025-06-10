//  Write a program to sort an array of object on the basis of age ({name:"John", age:26})


const person=[                
    {
        name:"nirmit",
        age:21
    },

    {
        name:"anurag",
        age:25
    },

    {
        name:"ayush",
        age:20
    },
    {
        name:"harsh",
        age:19
    }
];

const sortPerson = (obj)=>{
    obj.sort((a,b)=>{
        if(a.age > b.age){
            return 1;
        }
        else if(a.age < b.age){
            return -1;
        }
        else{
            return 0;
        }
    })

    return obj;
}





let ans = sortPerson(person)    
console.log(ans)