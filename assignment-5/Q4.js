// 4. Write a program deepClone that takes an object as input and returns a deep copy of
// that object. The function should handle nested objects and
// arrays.

const person = {
  name: "nirmit",
  age: 21,
  gender: "male",
  features: {
    eye: "brown",
    height: "175",
  },
  arr: [1, 2, 3],
};

const createDeepCopy = (person) => {
  let obj;
  obj = structuredClone(person);
  return obj;
};

const result = createDeepCopy(person);
result.arr[0]=5

console.log(result);   //deep copied object

console.log(person);   // original object




// using recursive approach

function deepcopy(person){
    let obj=[];
    if(!Array.isArray(person)){
         obj={};
    }else{
         obj=[];
    }
    for(let i in person){
        if(typeof(person[i])=='object'){
            obj[i]=deepcopy(person[i])
        }else{
            obj[i]=person[i];
        }
    }
    return obj;
}

let ans=deepcopy(person);
ans.arr[0]=8;

console.log(ans)
console.log(person)
