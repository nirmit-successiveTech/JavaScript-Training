const random_number = () =>{
    let num = Math.random();
    num = num*10;
    num = Math.floor(num)

    return num;

}

let i = random_number()
let j = random_number()

if(i==j){
    i = i+1>10 ? i-1 :i+1
}

console.log(`NUmbers are: ${i} and ${j}`)