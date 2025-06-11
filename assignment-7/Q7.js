
// 7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.



async function fetchData() {
    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(1){
                resolve("promise1 accepted")
            }else{
                reject("promise1 rejected")
            }
        },2000)
    })
    
        const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(1){
               resolve("promise2 accepted")
            }else{
               reject("promise2 rejected")
            }
        },3000)
    })
    
        const p3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(0){
               resolve("promise3 accepted")
            }else{
                reject("promise3 rejected")
            }
        },9000)
    })



  try{
    console.log("calling")
    const results = await Promise.allSettled([p1,p2,p3]);    // used a subtype of promise
    console.log(results); 
  } catch (error){
    console.error("An error occurred:", error);
  }
}

fetchData();