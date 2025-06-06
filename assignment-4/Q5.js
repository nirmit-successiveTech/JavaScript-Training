
let a = "  a          hello   john   doe"

let str = '';

let ans = a.trim();

for(let i=0;i<ans.length;i++){
    if(i==0){
        str+=ans[i];
    }
    else if(ans[i]==' '){
        continue;
    }
    else if(ans[i]!=' ' && ans[i-1]==' '){
        str += ans[i].toUpperCase();
    }
    else{
        str += ans[i];
    }
}

console.log(str)