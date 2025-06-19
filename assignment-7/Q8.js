// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

const fetchMultipleData=()=>{
    const promise1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response)=>response.json())
            .then((data)=>resolve(data))
            .catch((error)=>reject(error))
        }, 3000);
    })

        const promise2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then((response)=>response.json())
            .then((data)=>resolve(data))
            .catch((error)=>reject(error))
        }, 3000);
    })

        const promise3 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/3')
            .then((response)=>response.json())
            .then((data)=>resolve(data))
            .catch((error)=>reject(error))
        }, 3000);
    })

    return [promise1,promise2,promise3];
    
}


const headFunction=async()=>{
    try {
        const result =  fetchMultipleData();
        const ans = await Promise.allSettled(result)
        console.log(`The sum of id from three api are:${ans[0].value.id + ans[1].value.id + ans[2].value.id}`);
    } catch (error) {
        console.log(error);
    }
}



headFunction();