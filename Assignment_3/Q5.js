function correctfn(string, wrong, correct) {
    // Create a regular expression to match the wrong word globally and case sensitively
    const regex = new RegExp(`\\b${wrong}\\b`, 'g');

    // Replace the wrong word with the correct word
    const correctedString = string.replace(regex, correct);

    return correctedString;
}


const sentence = "This is a sample sentence with a wrong word.";
const wrongWord = "wrong";
const correctWord = "correct";
const correctedSentence = correctfn(sentence, wrongWord, correctWord);

console.log(correctedSentence); 
