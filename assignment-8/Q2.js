 let myObject = { name: 'John', age: 30 };
for (property in myObject) {
   console.log(property + ': ' + myObject.property);
}

// trying to access elements of object with . opertor instead of [].Additionally specifying data types is recommended.

 let ansObject = { name: 'John', age: 30 };                 //rectified error.
for (let property in ansObject) {
   console.log(property + ': ' + ansObject[property]);
}