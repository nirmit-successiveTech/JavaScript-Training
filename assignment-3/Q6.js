var a=[];
var c;

for(var i=1;i<=50;i++){
    c=0;
    for(var j=1;j<=50;j++){
        if(i%j==0){
            c++;
        }
    }
        if(c==2){
            a.push(i);
        }
}

console.log(a)
