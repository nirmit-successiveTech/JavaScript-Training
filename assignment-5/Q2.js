// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const person = [
  {
    name: "alex",
    age: 22,
  },
  {
    name: "john",
    age: 19,
  },
  {
    name: "shiv",
    age: 30,
  },
  {
    name: "krish",
    age: 28,
  },
];

const sortPerson = (obj) => {
  obj.sort((a, b) => {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }

    return 0;
  });
};

sortPerson(person);
console.log(person);
