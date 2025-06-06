let a=[1,2,3,5,5,7,8,7,1,5,6,8]
let b=[];

let c;

for(var i=0;i<a.length;i++){
    c=0;
    for(var j=i+1;j<a.length;j++){
        if(i!=j && a[i]==a[j]){
            c++;
        }

    }
    if(c==0){
            b.push(a[i])
        }
}

console.log(b)