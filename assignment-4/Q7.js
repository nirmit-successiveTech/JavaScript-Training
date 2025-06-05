let a = [1,4,6,7,7,7,7,8,8,9,9,9,9]
let c;
for(var i in a){
    c=0;
    for(var j in a){
        if(i!=j && a[i]==a[j]){
            c++;
            
        }
    }
    if(c>0) {
        console.log(i)
    }
}



