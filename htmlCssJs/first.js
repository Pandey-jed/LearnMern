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
console.log("The name of the person is: " + person.name);
console.log("The age of the person is: " + person.age);
console.log("The city of the person is: " + person.city);
person.greet(); // Calling the greet method of the person object

//
// This is a simple array to store the names of fruits
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log("The fruits are: " + fruits.join(", "));
// This is a simple forEach loop to iterate through the fruits array
fruits.forEach((fruit, index) => {
    console.log("Fruit " + (index + 1) + ": " + fruit);
});



// This is a simple map function to create a new array with the lengths of the fruits


const fruitLengths = fruits.map(fruit => fruit.length);
console.log("The lengths of the fruits are: " + fruitLengths.join(", "));



// This is a simple filter function to create a new array with fruits that have more than 5 characters

const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Fruits with more than 5 characters: " + longFruits.join(", "));




// This is a simple reduce function to calculate the total length of all fruits


const totalLength = fruits.reduce((accumulator, fruit) => accumulator + fruit.length, 0);
console.log("The total length of all fruits is: " + totalLength);




// This is a simple promise to simulate an asynchronous operation