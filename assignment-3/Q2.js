
//    1
//    2 3
//    4 5 6
//    7 8 9 10


var c=1;
for(var i=1;i<=4;i++){
    var mystr=" ";
    for(var j=1;j<=i;j++){
        mystr+=c;
        c++;
    }
    console.log(mystr)
}


// 1
// 2 2
// 3 3 3
// 4 4 4

var cnt=0;
for(var i=1;i<=4;i++){
    var mystr="";
    cnt++;
    for(var j=1;j<=cnt;j++){
        mystr+=i;
    }
    console.log(mystr)
}




// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for(var i=5;i>=1;i--){
    var mystr=" ";
    for(var j=1;j<=i;j++){
        mystr+=j;
    }
    console.log(mystr);
}

for(var i=2;i<=5;i++){
    var mystr=" ";
    for(var j=1;j<=i;j++){
        mystr+=j;
    }
    console.log(mystr)
}
