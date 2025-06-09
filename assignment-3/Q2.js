
//    1
//    2 3
//    4 5 6
//    7 8 9 10


let c=1;
for(let i=1;i<=4;i++){
    let mystr=" ";
    for(let j=1;j<=i;j++){
        mystr+=c;
        c++;
    }
    console.log(mystr)
}


// 1
// 2 2
// 3 3 3
// 4 4 4


for(let i=1;i<=4;i++){
    let mystr="";
    for(var j=1;j<=i;j++){
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

for(let i=5;i>=1;i--){
    let mystr=" ";
    for(let j=1;j<=i;j++){
        mystr+=j;
    }
    console.log(mystr);
}

for(let i=2;i<=5;i++){
    let mystr=" ";
    for(let j=1;j<=i;j++){
        mystr+=j;
    }
    console.log(mystr)
}
