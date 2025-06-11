let a=[1,2,3,4,5]

let sum=0;
const addNum=(a)=>{
    for(let i of a){
        sum += i;
    }
    return sum;
}

console.log(addNum(a));