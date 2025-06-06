let arr = [1,4,6,7,7,7,7,8,8,9,9,9,9]
let map = new Map();



for (let i in arr){
    if(map.has(arr[i])){
        console.log(`First index of ${arr[i]} is ${map.get(arr[i])}`);
    }else{
        map.set(arr[i],i)
    }
}