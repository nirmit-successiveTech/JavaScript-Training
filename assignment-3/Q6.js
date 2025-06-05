let a=[];
let c;

for(let i=1;i<=50;i++){
    c=0;
    for(let j=1;j<=50;j++){
        if(i%j==0){
            c++;
        }
    }
        if(c==2){
            a.push(i);
        }
}

console.log(a)
