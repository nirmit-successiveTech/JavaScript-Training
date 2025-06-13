// 5. Write a program flattenObject that takes an object with nested properties and returns 
// a flat object with the nested properties transformed into dot-separated properties. 
// The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

let obj={
    a:1,
    b:{
        c:2,
        d:[3,4]
    },
}

const flattenObject=(obj)=>{
    let MyObj={};
    for(let i in obj){
        if(typeof(obj[i])=='object'){
            let temp = flattenObject(obj[i]);
            for(let j in temp){
                MyObj[i + '.' + j]=temp[j];
            }
        }else{
            MyObj[i]=obj[i];
        }
    }
    return MyObj;
}



const result = flattenObject(obj)
console.log(result)