//All examples of Arrow functions

const greet = (name) => `hello, ${name}!`;
console.log(greet("Abhinandan"));


//with multiple parameters
 
const add = (a ,b) => a+b;
console.log(add(5 ,7));

//Arrow function without parameter

const sayHi =() => console.log("Hii. there !");
sayHi();

// With block body

const multiply=(x,y)=>{
    const result=x*y;
    return result;
};

console.log(multiply(3,4));


//Using arrow function with array map()

const numbers=[1,2,3,4,5];
const squares=numbers.map(num=>num*num);
console.log(squares);


// Arrow function with array filter()

const nums =[10 ,20 ,30 ,40];
const evenNums =nums.filter(n=>n%2===0);

console.log(evenNums);


//Arrow function returning object

const createUser =(name ,age) => ({
    name:name,
    age:age
});

console.log(createUser("Rahul" , 22));


//Arrow function with reduce()

const values =[1,2,3,4,5];
const sum=values.reduce((acc ,curr)=>acc+curr,0);
console.log(sum);