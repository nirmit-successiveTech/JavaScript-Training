// Write a program to implement a promise based rate limiter, that limits the number of concurrent request to a certain number.

let rate = 3;
let activetask = 0;
let queue=[]

function addTask(task){
    queue.push(task);
    processTask(queue);
}

function processTask(){
    if(activetask>=3 || queue.length===0) return;

    let task = queue.shift();
    activetask++;
    task().then((msg)=>{
        console.log(msg)
    }).finally(()=>{
        activetask--;
        processTask()
    })
}



function createTask(id){
    return ()=> new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`task ${id} pending`)
            resolve(`task ${id} fulfilled`)
        },2000)
    })
}


for(let i=1;i<=5;i++){
    addTask(createTask(i));
}