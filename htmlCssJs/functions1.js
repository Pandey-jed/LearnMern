function greet(name1){
    return 'hello' + [name1];
}
console.log(greet("Abhinandan"));




//Add function

const add= function(a, b){
    return a+b;
}
console.log(add(12,12));


//Arrow function


const multiply = (x,y)=> x*y;
console.log(multiply(12,12));


//default parameter


function sayHello(name ="Gueast"){
    return `hello  ${name}`;
}
console.log(sayHello());
console.log(sayHello("abhi"));




//function with array



function printEvenNumbers(arr){
    return arr.filter(num => num%2==0);
}
console.log(printEvenNumbers([1,2,3,4,5,6,7,8,9]));






// function returning another function

function outerFunction(x){
    return function innerFunction(y){
        return x+y;
    }
}
const addTen=outerFunction(10);
console.log(addTen(5));



// recursive function 
// factorial


function factorial(n){
    if(n==0) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5));



// immediately invoked function



(function(){
    console.log(" This is IIFE");
})();



// Rest Parameters


function sumAll(...numbers){
    return numbers.reduce((acc,curr) => acc + curr , 0);
}

console.log(sumAll(1,2,3,4,5));

//callback function


function greetUser(name ,callback){
    const greeting=`Hello , ${name}`;
    callback(greeting);
}
greetUser("Amit" , function(message){
    console.log("callback says :" , message);
});