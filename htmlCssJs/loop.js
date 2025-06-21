let n=12;
for(let i=0; i<=n; i++){
    console.log(i);
    if(i % 2 === 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

console.log("Loop completed");
// This code initializes a variable n to 12 and then runs a loop from 0 to n.



//sum of n natural numbers
let sum = 0;
for(let i = 1; i <= n; i++){
    sum += i;
}
console.log("Sum of first " + n + " natural numbers is: " + sum);
// This code calculates the sum of the first n natural numbers and prints it.



//multiplication table of m

let m=5;
for(let i = 1; i <= 10; i++){
    console.log(m + " x " + i + " = " + (m * i));
}
// This code prints the multiplication table of m from 1 to 10.







//factorial of a 
let a = 5;
let factorial = 1;
for(let i = 1; i <= a; i++){
    factorial *= i;
}



// Print even number from 1 to n


let d=15;
for( let i=1;i<=d;i++){
    if(i%2==0){
        console.log(i+" is even");
    }else{
        console.log(i+" is odd");
    }
}




// reverse counting from n to 1
let n2 = 10;
for(let i=n2;i<=1;i++){
    console.log(i);
}



//Check a number is prime or not
let num = 29;
let isPrime = true;
for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0){
        isPrime = false;
        break;
    }
}
if(isPrime && num > 1){
    console.log(num + " is a prime number.");
}else{
    console.log(num + " is not a prime number.");
}
// This code checks if a number is prime by testing divisibility from 2 to the square root of the number.




// Print Fibonacci series up to n terms
let nTerms = 10;
let a = 0, b = 1;
console.log("Fibonacci Series:");
for(let i = 1; i <= nTerms; i++){
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
 
//