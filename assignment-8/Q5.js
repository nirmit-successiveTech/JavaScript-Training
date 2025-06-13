 let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}

let myNumber = myArray[5];
if (myNumber) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The number is undefined');
}

// myNumber is trying to access the value from the index, that does not exist in myArray.

let ansNumber = myArray[3];                  // error removed.
if (ansNumber) {
   console.log('The number is: ' + ansNumber);
} else {
   console.log('The number is undefined');
}
