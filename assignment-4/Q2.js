

let str="Hello John"

    let a="";
    let b="";
    let c=""


for(let i=str.length-1;i>=0;i--){
    if(str[i]==' '){
        b = b+a;
        b=" "+b;
        a= " ";
    }else{
        a=a+str[i];   
    }
}
b=a+b;
console.log(b)