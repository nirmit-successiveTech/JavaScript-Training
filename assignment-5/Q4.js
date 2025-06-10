// 4. Write a program deepClone that takes an object as input and returns a deep copy of
// that object. The function should handle nested objects and
// arrays.

const person = {
  name: "nirmit",
  age: 21,
  gender: "male",
  features: {
    eye: "brown",
    height: "175",
  },
  arr: [1, 2, 3],
  fn: function () {
    return this.name;
  },
};
const obj = {};
const createDeepCopy = (person, obj) => {
  for (let i in person) {
    obj[i] = person[i];
  }
  return obj;
};

const result = createDeepCopy(person, obj);
console.log(result);
