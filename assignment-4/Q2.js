// string reversal


var str="Hello John"
// console.log(str.length)

    var a="";
    var b="";
    var c=""


for(var i=str.length-1;i>=0;i--){
    if(str[i]==' '){
        b = b+a;
        b=" "+b+" ";
        // a += "";
        a= " ";
    }else{
        a=a+str[i];   
    }
}
b=a+b;
console.log(b)