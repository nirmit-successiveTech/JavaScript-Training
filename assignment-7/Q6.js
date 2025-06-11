// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.




const child =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(0){
                resolve("code resolved");
            }else{
                reject("code rejected")
            }
        },2000)
    })
}


const parent = async()=>{
    try {
        console.log("Function has been initiated, wait for 2 seconds")
        const result = await child()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
parent()