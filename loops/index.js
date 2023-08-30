function sumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Test the Function
const inputArray = [1, 2, 3, 4];
const totalSum = sumArrayElements(inputArray);
console.log("Sum of array elements:", totalSum);

//2.
function findMissingNumber(array) {
    const n = array.length;
    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;
    for (let i = 0; i < n; i++) {
        actualSum += array[i];
    }

    const missingNumber = expectedSum - actualSum;
    return missingNumber;
}

// Test the Function
const inputArray = [0, 1, 3, 4, 5];
const missingNum = findMissingNumber(inputArray);
console.log("Missing number:", missingNum);