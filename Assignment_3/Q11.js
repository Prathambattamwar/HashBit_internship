const students = [
    {subject1: 44,subject2: 56,subject3: 87,subject4: 97,subject5: 37},
    {subject1: 44,subject2: 56,subject3: 87,subject4: 97,subject5: 37},
    {subject1: 44,subject2: 56,subject3: 87,subject4: 97,subject5: 37}];

// Function to calculate the average of scores
function calculateAverage(scores) {
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
    return total / Object.values(scores).length;
}

// Transform the input data to the output format
const output = students.map((student, index) => {
    const average = calculateAverage(student);
    return {
        [`student${index + 1}`]: { average }
    };
});

// Log the output
console.log(output);
