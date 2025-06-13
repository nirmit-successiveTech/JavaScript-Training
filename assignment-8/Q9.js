function Person(name, age) {
  this.name = name;
  this.age = age;

  return this.name;
}
var person = Person("John Doe", 30);
console.log(person.name);


// new keyword missing for object creation.

function Person(name, age) {
  this.name = name;
  this.age = age;

  return this.name;
}
var person =new Person("John Doe", 30);
console.log(person.name);