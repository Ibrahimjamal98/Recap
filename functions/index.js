// Step 1: Create the add Function
function add(a, b) {
    return a + b;
}

// Step 2: Create the multiplySum Function
function multiplySum(sum, factor) {
    return sum * factor;
}

// Step 3: Call Both Functions
const num1 = 10;
const num2 = 20;
const sum = add(num1, num2);
const factor = 3;
const product = multiplySum(sum, factor);

// Step 4: Print the Result
console.log("Sum:", sum);
console.log(`Sum multiplied by ${factor}:`, product);

//2.Recursive Function to Calculate Fibonacci
function Fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// Test the Function
console.log("Fibonacci at position 0:", Fibonacci(0));
console.log("Fibonacci at position 1:", Fibonacci(1));
console.log("Fibonacci at position 2:", Fibonacci(2));
console.log("Fibonacci at position 3:", Fibonacci(3));
console.log("Fibonacci at position 4:", Fibonacci(4));
console.log("Fibonacci at position 5:", Fibonacci(5));