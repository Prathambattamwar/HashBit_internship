function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
const input = "Hello";
console.log("input is: "+ input);
const output = reverseString(input);
console.log(output);