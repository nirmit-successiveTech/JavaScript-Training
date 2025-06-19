// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })




const parentFunction=()=>{
    return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
            if(!response.ok){
                console.log('some error');
            }
            return response;

        })
        .then((response)=>response.json())
        .then((data)=>resolve(data))
        .catch((error)=>reject(error));
    })
}




parentFunction().then((msg)=>console.log(msg)).catch((error)=>console.log(error))
