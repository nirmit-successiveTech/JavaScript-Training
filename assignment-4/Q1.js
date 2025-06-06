let str = "Hello Yellow"

let b= new Set(str);


let ans="";
for(let i of b){
    ans+=i;
}

console.log(ans)