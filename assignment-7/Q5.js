


let queue=[];
let running=0;
const limit=2

function addTask(task){
    queue.push(task);
    processQueue();
}

function processQueue(){
    while(running<limit && queue.length>0){
        const task = queue.shift();
        running++;

        task().then((res)=>{
            console.log(res);
        }).finally(()=>{
            running--;
            processQueue();
        })
    }
}


function createTask(i){
    return ()=>
        new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(`Task ${i} done`)
            },2000)
        })
    
}



for(let i=1;i<=10;i++){
    addTask(createTask(i));
}