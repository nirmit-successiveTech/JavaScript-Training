var str = "Hello Yellow"

var b= new Set(str);
console.log(b)

var k="";
for(var i of b){
    k+=i;
}

console.log(k)