// Find Error in below questions and rectify them

 let myArray = [1, 2, 3, 4];
for (let i = 0; i <= myArray.length; i++) {
   console.log(myArray[i]);
}

// Error was condition in the for loop where i goes out of the range, thus returning undefined.

 let ansArray = [1, 2, 3, 4];                           //solved error
for (let i = 0; i < ansArray.length; i++) {
   console.log(ansArray[i]);
}

