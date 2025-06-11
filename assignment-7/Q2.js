// 2. Give an example of using multiple callback functions in a single function in JavaScript


function child2(){
    console.log("I am child 2");
}

function child1(child2){
    console.log("I am child 1");
    child2();
}


function parent(child1,child2){
    console.log("I am parent");
    child1(child2);
}


parent(child1,child2);