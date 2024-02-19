// Define an array
let myArray = ["banana", "apple", "orange", "grape"];

// Sort the array in alphabetical order
let sortedArray = myArray.sort();

// Calculate the sum of all elements
let sum = sortedArray.reduce((acc, curr) => {
    // Assuming the elements are numbers, if they're strings representing numbers, convert them to numbers before adding
    return acc + curr;
});

// Print the sorted array and sum
console.log("Sorted array:", sortedArray);
console.log("Sum of elements:", sum);
