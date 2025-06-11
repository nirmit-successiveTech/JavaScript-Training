// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

const child1 =()=>{
    let r=fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response)=>response.json());

    return r;
}

const child2 =()=>{
    let p=fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then((response)=>response.json());

    return p;
}

const headFunction=async()=>{
    let result1 =await child1();
    let result2 =await child2();
    console.log(result1.id);
    console.log(result2.id);

    console.log(result1.id + result2.id)

    // let result3 = await result1[1] + result2[1];
}



headFunction();