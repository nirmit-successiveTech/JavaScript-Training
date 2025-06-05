let a = [5,3,7,1,2,6];

for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length-i;j++){
        if(a[j]>a[j+1]){
            let temp;
            temp=a[j+1];
            a[j+1]=a[j];
            a[j]=temp;
        }
    }
}

console.log(a)