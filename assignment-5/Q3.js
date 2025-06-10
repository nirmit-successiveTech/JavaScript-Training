//  Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const person=[                
    {
        name:"nirmit",
        age:21,
        id:1,
    },

    {
        name:"anurag",
        age:25,
        id:2,
    },

    {
        name:"ayush",
        age:20,
        id:3,
    },
    {
        name:"harsh",
        age:19,
        id:4
    }
];

const deleteId = () =>{
    for(let i of person){
    delete i.id;
    }
}


deleteId()

console.log(person)



