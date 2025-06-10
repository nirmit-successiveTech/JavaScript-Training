const person ={
    name:"nirmit",
    age:21,
    gender:"male",
    designation:"trainee"
}

// using for in loop

const printObject = () =>{

    for(let i in person){
        console.log(`${i}:${person[i]}`)
    }
}




printObject();

