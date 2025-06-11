// 1. Give an example of using a callback function to handle an asynchronous
// operation in JavaScript (Use any open api to make a call)

function fn() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      if (!response.ok) {
        console.log(error);
      }
      return response;
    })
    .then((response) => response.json())
    .then((data) => console.log(data[0].userId))
    .catch((error) => console.log(error));
}

setTimeout(fn, 1000);
