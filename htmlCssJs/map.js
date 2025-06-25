const numbers = [1,2,3,4,5];
const doubled =numbers.map(num =>num*2);
    console.log(doubled);


// Convert to uppercase

const names = ['abhi' , 'rahul','neha'];
const uppercase=names.map(name=>name.toUpperCase());
console.log(uppercase);


//Extract property from array of objects

const users =[
    {name:"abhi",age:22},
    {name:"abhinan",age:23},
    {name:"abhinandan",age:24}
];
const namesOnly =users.map(user=>user.name);
console.log(namesOnly);


//