// 3. Write a program to remove all the id key from
// array of object ({name:"John", age:27, id:1})

const person = [
  { name: "John", age: 27, id: 1 },

  {
    name: "Don",
    age: 26,
    id: 2,
  },
  {
    name: "Luke",
    age: 26,
    id: 3,
  },
];

const deleteId = (person) => {
  for (let i of person) {
    delete i.id;
  }
};

deleteId(person);

console.log(person);
