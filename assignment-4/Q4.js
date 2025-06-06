var str="hello john doe"

let i=str.length;

var ans="";
for(var j=i-1;j>=0;j--){
    if(str[j-1]==' '){
        ans=str[j].toUpperCase()+ans;
    }
    else{
        ans=str[j]+ans;
    }
}

console.log(ans.length)
var ans2="";

for(var k=0;k<ans.length;k++){
    if(ans[k]==' '){
        continue;
    }
    else{
        ans2+=ans[k];
    }
}

console.log(ans2)