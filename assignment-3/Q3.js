for(var i=1;i<=5;i++){
    var mystr="";
    for(var j=1;j<=5-i;j++){
        mystr+=" ";
    }

    for(var k=1;k<=i;k++){
        mystr+=" *";
    }
    console.log(mystr);
}

for(var i=5;i>=1;i--){
    var mystr="";
    for(var j=1;j<=5-i;j++){
        mystr+=" ";
    }
    for(var k=i;k>=1;k--){
        mystr+=" *";
    }
    console.log(mystr)
}