let str="abcabcdabbcc";
let arr = new Set(str);

var newstr="";

var cnt;

for(i of arr){
    cnt=0;

    for(let j=0;j<str.length;j++){
        if(i==str[j]){
            cnt++;
        }
    }

    cnt=String(cnt);
    newstr += i+cnt;
}

console.log(newstr)

