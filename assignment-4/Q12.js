let a=[2,4,7,9];
let b=[7,9,1,4];
let c=[]

for(var i of a){
    for(var j of b){
        if(i==j){
            c.push(i)
        }
    }
}

console.log(c)