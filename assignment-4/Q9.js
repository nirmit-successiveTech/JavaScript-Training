let a=[2,3,4,5,2,6,7,2,3];
let b=[]

let c;
let maxcnt;

for(let i=0;i<a.length;i++){
    maxcnt=0;
    for(let j=i;j<a.length;j++){
        if(i!=j && a[i]==a[j]){
            c=j;
            if(maxcnt<c){
                maxcnt=c;
            }
        }
    }
    if(maxcnt>0){
    b.push(maxcnt);
    }
}

console.log(b)
