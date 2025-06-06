// . Write a program to find the last duplicate index in an array

let arr = [1,2,3,4,5,2,6,5,7,8,8];
let map = new Map();

for(let i in arr){
    if(map.has(arr[i])){
        map.set(arr[i],i);
    }else{
        map.set(arr[i],-1);
    }
}


for(let [key,value] of map){
    if(`${value}`==-1){
        continue;
    }else{
        let str = "";
        str += ` last index of ${key} is : ${value}`
        console.log(str)
    }
}
