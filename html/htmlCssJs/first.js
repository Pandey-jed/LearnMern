console.log("Hello World");
// document.writeln("hello world");
var x =5;
let y=4;
// console.log(x);
// // console.log(y);
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**y); // exponentiation
// console.log(x++); // post-increment
// console.log(++x); // pre-increment
// console.log(x--); // post-decrement
// console.log(--x); // pre-decrement
// console.log(x==y); // equality
// console.log(x===y); // strict equality
// console.log(x!=y); // inequality
// console.log(x!==y); // strict inequality
// console.log(x<y); // less than
// console.log(x>y); // greater than
// console.log(x<=y); // less than or equal to
// console.log(x>=y); // greater than or equal to
// console.log(x&&y); // logical AND
// console.log(x||y); // logical OR
// console.log(!x); // logical NOT
// console.log(x&y); // bitwise AND
// console.log(x|y); // bitwise OR
// console.log(x^y); // bitwise XOR
// console.log(x<<y); // left shift
// console.log(x>>y); // right shift
// console.log(x>>>y); // unsigned right shift
// console.log(typeof x); // type of x






// This is a simple if-else statement to compare x and y
// if(x>y){
//     console.log("x is greater than y");
// }else if(x<y){
//     console.log("x is less than y");
// }else{
//     console.log("x is equal to y");
// }

//This is a simple switch statement to compare x and y
// switch(true){
//     case (x > y):
//         console.log("x is greater than y");
//         break;
//     case (x < y):
//         console.log("x is less than y");
//         break;
//     default:
//         console.log("x is equal to y");
// }





// This is a simple for loop to iterate from 0 to 10
for(let i=0; i<=10; i++){
    console.log("The value of i is: " + i);
}


// This is a simple while loop to iterate from 0 to 10
  

while(x>0){
    console.log("The value of x is: " + x);
    x--;
}


// This is a simple do-while loop to iterate from 0 to 10
do {
    console.log("The value of y is: " + y);
    y--;
}while(y>0);



//
// This is a simple function to add two numbers
function add(a, b) {
    return a + b;
}

console.log("The sum of x and y is: " + add(x, y));



// This is a simple arrow function to add two numbers

const addArrow = (a, b) => a + b;
console.log("The sum of x and y using arrow function is: " + addArrow(x, y));


// This is a simple object to store the details of a person
const person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};