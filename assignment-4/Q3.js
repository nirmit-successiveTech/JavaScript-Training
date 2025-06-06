//  Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")


let str = "abcabcdabbcc"

let map = new Map();

for(var i of str){
    if(map.has(i)){
        map.set(i,map.get(i)+1);
    }else{
        map.set(i,1);
    }
}

let ans= "";
for(var [key,value] of map){
    ans += `${key}` + `${value}`
}

console.log(ans)

