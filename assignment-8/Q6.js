var person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};
var getPersonDetails = person.getDetails;


// getDetails is not called correctly
var person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};
var getPersonDetails = person.getDetails();


// Could be solved using call method & making function return value.
var person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    return this.name + " is " + this.age + " years old";
  },
};
var getPersonDetails = person.getDetails.call(person);
console.log(getPersonDetails)


