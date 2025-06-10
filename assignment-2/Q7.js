//  3.)Write a function expression that takes in another function as an argument

// using arrow function
const child=(num1,num2)=>{
    console.log(num1+num2);
}

const parent=((child,num1,num2)=>(
    child(num1,num2)
));

parent(child,5,6);



// using function
function Child(num1,num2){
    console.log(num1+num2)
}

function parent(Child,num1,num2){
    Child(num1,num2);
}

parent(Child,5,9)

// 4.) Write a function expression that takes in a number and returns its square.

// using arrow function
const square =(num)=>{
    console.log(`The square of ${num} is : ${num*num}`);
}

square(7);



// using function
function square(num){
    console.log(`The square of ${num} is : ${num*num}`);
}

square(7)




// 5. Write a function expression that takes in two numbers and returns their sum.

// using arrow function
const sum=(num1,num2)=>{
    console.log(`The sum of the number is ${num1+num2}`);
}

sum(5,8);



// using function
function sum(num1,num2){
    console.log(`The sum of the number is ${num1+num2}`)
}

sum(5,8)


// 6. Write a function expression that takes in a number and 
// returns true if it's even and false if it's odd.

// using arrow function
const check=(num)=>{
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

const result = check(9)
console.log(`The result is ${result}.`);

// using function
const Checknum = (num)=>{
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}



let num = 9;
let ans = Checknum(num)
console.log(`The result is ${ans}.`)




