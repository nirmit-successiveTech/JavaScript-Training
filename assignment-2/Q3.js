
function Child(num1,num2){
    console.log(num1+num2)
}

function parent(Child,num1,num2){
    Child(num1,num2);
}



parent(Child,5,9)