// 4. Write a program to convert given string to upperCase OR lowerCase


let str = "nirmit";
let mystr ="KUMAR"

const upperCase = (str) =>{
    let ans = "";
    let c = '';
    for(let i=0;i<str.length;i++){
        let j = str.charCodeAt(i);
        j=j-32;
        c = String.fromCharCode(j);
        ans += c;
    }
    return ans;
}

const lowerCase = (str) =>{
    let ans = "";
    let c = '';
    for(let i=0;i<mystr.length;i++){
        let j = str.charCodeAt(i);
        j=j+32;
        c = String.fromCharCode(j);
        ans += c;
    }
    return ans;
}



const ans1 = upperCase(str);
const ans2 = lowerCase(mystr);

console.log(ans1);
console.log(ans2);