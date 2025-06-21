//This is a sample practice code of functions in JavaScript
  
function greet( name ){
    console.log("hello"+ " " + name);
    console.log("Welcome to the JavaScript world!");
}
greet("John");
function add( a, b ){
    return a + b;
}
function multiply( a, b ){
    return a * b;
}
function subtract( a, b ){
    return a - b;
}
function divide( a, b ){
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return undefined;
    }
    return a / b;
}
function square( a ){
    return a * a;
}
function cube( a ){
    return a * a * a;
}
function power( a, b ){
    return Math.pow(a, b);
}
function factorial( n ){

    if (n < 0) {
        console.log("Error: Factorial of a negative number is not defined.");
        return undefined;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function isPrime( n ){
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function fibonacci( n ){
    if (n < 0) {
        console.log("Error: Fibonacci sequence is not defined for negative numbers.");
        return undefined;
    }
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}
function reverseString( str ){
    return str.split('').reverse().join('');
}
function isPalindrome( str ){
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
function countVowels( str ){
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
// type of function

//arrow function
const greerArrow=(name)=>{
    console.log("hello" + " " + name);
    console.log("Welcome to the JavaScript world!");
}

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This is an IIFE that runs immediately.");
})();

// Function with default parameters
function greetWithDefault(name = "Guest") {
    console.log("Hello, " + name + "!");
}

// Function with rest parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Function with callback
function processArray(arr, callback) {
    return arr.map(callback);
}
// example of callback function
