// Write a function to count the number of words in a paragraph. 
function countWords(paragraph) {
    // Remove leading and trailing whitespace, then split the paragraph by whitespace
    const words = paragraph.trim().split(/\s+/);
    // Filter out any empty strings that might be in the array
    const filteredWords = words.filter(word => word.length > 0);
    // Return the count of words
    return filteredWords.length;
}

const paragraph = "This is an example paragraph to count the number of words.";
console.log(countWords(paragraph));  // Output: 11