let str = 'INDIA';

let array= str.split('');
console.log(array);
array.splice(4, 1, 'O', 'N', 'E', 'S', 'I', 'A');
let newString =  array.join('');
console.log(newString);