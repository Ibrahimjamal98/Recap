//1.
function add(a, b) {
    return a + b;
}

function multiplySum(sum, factor) {
    return sum * factor;
}

const num1 = 5;
const num2 = 2;
const sumResult = add(num1, num2);

const factor = 3;
const finalResult = multiplySum(sumResult, factor);

console.log("Sum:", sumResult);
console.log("Final Result:", finalResult);




//2.
function fibonacci(n) {
    // Base cases
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

const n1 = 0;
const n2 = 1;
const n3 = 5;
const n4 = 10;

console.log(`Fibonacci(${n1}):`, fibonacci(n1));
console.log(`Fibonacci(${n2}):`, fibonacci(n2));
console.log(`Fibonacci(${n3}):`, fibonacci(n3));
console.log(`Fibonacci(${n4}):`, fibonacci(n4));