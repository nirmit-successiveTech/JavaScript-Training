for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// set var to let as var has global scope due to which all values are 10

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}