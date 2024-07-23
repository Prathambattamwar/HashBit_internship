function countVowelsAndConsonants(str) {
    // Ensure the string has at least 20 characters
    if (str.length < 20) {
        throw new Error("The string must have at least 20 characters.");
    }

    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) { // Check if the character is a letter
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return { vowelCount, consonantCount };
}


const exampleString = "This is an example string for testing.";
const counts = countVowelsAndConsonants(exampleString);
console.log(`Vowels: ${counts.vowelCount}, Consonants: ${counts.consonantCount}`);
// Output will be something like: Vowels: 11, Consonants: 17
