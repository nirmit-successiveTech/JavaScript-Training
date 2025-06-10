let str = "Hello Yellow"

let newStr= new Set(str);


let ans="";
const removeDuplicate = (newStr) =>{
    for(let i of newStr){
    ans+=i;
    }
    return ans;
}

const result = removeDuplicate(newStr);
console.log(result);