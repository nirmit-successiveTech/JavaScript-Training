for(let i=1;i<=5;i++){
    let mystr="";
    for(let j=1;j<=5-i;j++){
        mystr+=" ";
    }

    for(let k=1;k<=i;k++){
        mystr+=" *";
    }
    console.log(mystr);
}

for(let i=5;i>=1;i--){
    let mystr="";
    for(let j=1;j<=5-i;j++){
        mystr+=" ";
    }
    for(let k=i;k>=1;k--){
        mystr+=" *";
    }
    console.log(mystr)
}