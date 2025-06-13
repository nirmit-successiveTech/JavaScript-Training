async function getData() {
   setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
getData().then(function(data) {
   console.log(data);
});



// getData() chaining is used with invoking promise.
async function getData() {
  return new Promise((resolve,reject)=>{
    setTimeout(function () {
    resolve([1, 2, 3, 4, 5]);
  }, 1000);
  })
}
getData().then(function (data) {
  console.log(data);
});
