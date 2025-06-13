// 1. Write a program to iterate over object.

const person = {
  name: "nirmit",
  age: 21,
  gender: "male",
  designation: "trainee engineer",
};

// using for in loop
function forInLoop() {
  for (let i in person) {
    console.log(`${i}:${person[i]}`);
  }
}

// using for of loop
function forOfLoop() {
  for (let [key, value] of Object.entries(person)) {
    console.log(`${key}:${value}`);
  }
}

forInLoop();
forOfLoop();
