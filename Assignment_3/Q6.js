let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

let result = inputArr.filter(function (num) {
  return num > 5;
});

console.log(result); // Output: [9, 10, 7]
