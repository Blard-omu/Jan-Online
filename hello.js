// alert("Hello world")
console.log("Welcome To Javascript");

// VARIABLES var, let, const
var names = "Blard"
let student1 = "Uthman"
const student2Age = 23

console.log(names);

console.log(student1);

console.log(student2Age);


var names = "Simi"
// let student1 = "Timi"
// const student2Age = 30

console.log(names);

let a = 2
console.log(a);
// let allows for reassignment of variable
a = 3
console.log(a);

// const doesn't allow re-declaration & reassignment
const b = 2
// b = 3

// DATA TYPES

// #Number Data type
let x = 20
let y = 20.46
console.log(typeof x);
console.log(typeof y);
console.log(x+y);
console.log(x*y);

// #String Data type

const fName = 'Peter'
let pLang = "Javascript"

console.log(fName);
console.log(typeof fName);

console.log(pLang);
console.log(typeof pLang);

// #Boolean Data type

const isStudent = true
const isTeacher = false

console.log(isStudent);
console.log(typeof isStudent);
console.log(isTeacher);

// #Null & Undefined Data type

const student = null
const teacher = undefined

console.log(student);
console.log(typeof student);


// #Array Data type
const arr = [1, 2, 3, 4, "string", true]

console.log(arr);
console.log(typeof arr);


// #Object Data type

const obj = {
    fname: "Peter",
    age: 23,
    isStudent: true
}

console.log(obj);
console.log(obj.fname);
console.log(obj.age);
console.log(obj.isStudent);
console.log(typeof obj.isStudent);
console.log(typeof obj);


// #String Methods

const fname = "Peter"
const surname = "Adekunle"
const fullName = "My fullname is " + surname + ' ' + fname
const myFullName = `My fullname is ${surname} ${fname}`
console.log(myFullName);
console.log(fname.length);
console.log(fname.toUpperCase());
console.log(fname.toLowerCase());
console.log(fname.trim());
console.log(fullName);

// More string methods splice, split, concatination
console.log(fullName.split(' '));


// Task 1
sentence = "I am a web developer, with 3 years of cognate experience building web apps"
// 1) count the number of characters in sentence
// 2) count the number of words in sentence

// Solution
console.log(sentence.length);
console.log(sentence.split(' '));
console.log(sentence.split(' ').length);

// Task 2
let bio = "I am a web Developer"
let stack = "my stacks are JavaScript and Python"
let year = 5
// "I am a web Developer with 5 years of experience and my stacks are JavaScript and Python"

// Solution
// myFullBio = bio + " with " + year + " years of experience and " + stack 
myFullBio = `${bio} with ${year} years of experience and ${stack}`
console.log(myFullBio);

// Number and Math methods ceil, floor, random, maX, min
// ceil = round up to nearest whole number
// floor = floor round down to nearest whole number
let n = 9.823
console.log(Math.ceil(n));
console.log(Math.floor(n));
console.log(Math.random());
const num = Math.floor(Math.random()*1000)
console.log(num)
console.log(Math.max(50,10, 20, 30, 40,));
console.log(Math.min(50,10, 20, 30, 40,));

 

// OPERATORS 
// Arithmetic Operators +, -, *, **, /,%, ++, --
console.log(34-20*4**2); 

let num2 = 5;
let m = -4
let result = num2**2 + m
console.log(result);
console.log(n % 6);

// Assignment Operators =, +=, -=, *=, /=,
let tech = 'Techstudio'
let num3 = 3
console.log(y);
// num3 = num + 2
num3 += 2
console.log(num3);
num3 -= 4
// y = y - 4
console.log(num3);

// Logical Operators &&, ||, !
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false || true);
console.log(true);
console.log(!true);
console.log(!false);


// Comparison Operators ==, ===, >, <, >=, <=
let cat = "23"
let dog = 23
console.log(cat == dog);
console.log(cat === dog);



// CONDITIONALS if, if-else, else-if-else, switch, ternary operator

// IF
// if (Condition){
//     codes to run
// }



isStudent == true;

if (isStudent) {
    console.log("He is a student of techstudio");
}

let num4 = 5
if (num4 > 0){
    console.log(`${num4} is a positive number`);
}


// if-else statement
//     if (condition){
//         run this part 1 of the expression
//     }else{
//      run this part 2 of the expression
// }

let num5 = -6
if (num5 > 0){
    console.log(`${num5} is a positive number`);
}else{
    console.log(`${num5} is a negative number`);
}

let isRaining = true
if (isRaining){
    console.log(`You need rain coat`);
}else{
    console.log(`No need for rain coat`);
}


// if-else-if-else
// if (condition1){
//     code
// }else if (condition2){
//     code 2
// }else{
//     code 3
// }

let q = 4
if (q > 0){
    console.log(`${q} is a positive number`);
}else if (q < 0){
    console.log(`${q} is a negative number`);
}else if(q == 0){
    console.log(`${q} is neither negative nor positive number`);
}else{
    console.log(`You entered a wrong input value`);
}

// Switch statement
// switch(caseValue){
//     case 1:
//         code 1
//         break
//     case 2:
//         code 2 
//         break
//     case 3:
//         cod 3
//         break
//     default:
//         // 
// }

// let userInput = prompt('what day is today?')
// let day = userInput.toLowerCase()

// switch(day) {
//     case 'monday':
//         console.log('Today is Monday');
//         break
//     case 'tuesday':
//         console.log('Today is Tuesday');
//         break
//     case 'wednesday':
//         console.log('Today is Wednesday');
//         break
//     case 'thursday':
//         console.log('Today is Thursday');
//         break
//     case 'friday':
//         console.log('Today is Friday');
//         break
//     case 'saturday':
//         console.log('Today is Saturday');
//         break
//     case 'sunday':
//         console.log('Today is Sunday');
//         break
//     default:
//         console.log("Invalid entry, it's not a weekday");
// }

// Task
// Use switch statement to re-write the example on if-else-if-else statements i.e q = 4


// Ternary operator
// Syntax
// condition ? expression_1 : expression_2

!isRaining ? console.log('You need an umbrella') : console.log("You don't need an umbrella")


// Arrays
// Array is a collection of items in a square bracket separated by comma
// array is ordered
// Array can be modified
let arr1 = ['string', 10, true, null, {skill: 'HTML'}, [1, 2, 3]]
console.log(arr);
console.log(typeof arr);
let my_arr = Array()
console.log(my_arr);

// Accessing array
let firstItem = arr1[0];
console.log(firstItem);
let secItem = arr1[1];
console.log(secItem);
let lastItem = arr1[5];
console.log(lastItem);

let lastIndex = arr1.length - 1;
console.log(arr1[lastIndex]);
console.log(arr1[5][1]);

// lenght of an array
console.log(arr1.length);

// Modifing array
arr1[2] = false
console.log(arr1);

let arr2 = [100, 200, 300, 400]

const myNewArray = arr1.concat(arr2);
console.log(myNewArray);

// spread operator
let [f, u, c, ...rest] = myNewArray
console.log(f);
console.log(c);
console.log(rest);

// Array methods slice, pop, shift, unshift, splice, reverse, sort

// Slice slice(start, end)
const myNum = [1, 2, 3, 4, 5, 6, 7]
console.log(myNum.slice());
console.log(myNum.slice(0,5));
console.log(myNum.slice(1,4));

myFruits = ["Mango", "Orange", "Apple", "Banana", "Grape", "Pawpaw"]
console.log(myFruits.slice(1,4));
console.log(myFruits);
// pop
myFruits.pop()
console.log(myFruits);
// shift
myFruits.shift()
console.log(myFruits);
// unshift
myFruits.unshift("Lemon")
console.log(myFruits);
// push
myFruits.push("lime")
console.log(myFruits);
// reverse
console.log(myNum.reverse());

sortArr = [30, 80, 60,10, 70, 23, 20]
console.log(sortArr);
console.log(sortArr.sort());

// Splice(start, remove_tems, add_items)
// console.log(sortArr.splice());
// console.log(sortArr.splice(0,3, 12, 15, 22, 60));
// console.log(sortArr);
console.log(sortArr.splice(0, 0, 12, 15, 22, 60));
console.log(sortArr);
console.log(sortArr.splice(4,3));



// Loops for, while, do-while, for-of, break, continue
// for
// syntax
// for(initializer, condition, increment/decrement){
//     block of code
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// for (let i = 5; i >= 0; i--) {
//     console.log(i);
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(`${i} * ${i} = ${i * i}`);
// }

// while loop
let i = 0;
while (i <= 5){
    console.log(i)
    i++;
}

let isAuth = true
while (isAuth){
    console.log('You have successfully login');
    break
}

for (let i = 0; i <= 5; i++){
    if (i % 2 != 0 || i == 0){
        continue;
    }
    console.log(i);
}


// Functions // Function // Function
console.log('///////Functions////////');
// -Function declaration
// -Function expression
// -Arrow Function
// -Higher Order Function

// hoisting
myFunction()
// myFunctionExpression()

// Function declaration
function myFunction(){
    // codes to be executed
    console.log('Hello PG');
}
// function exampleFunction(){  }

// Function Expression
const myFunctionExpression = function(){
    // codes to execute
    console.log('This function expression');
}

// Arrow Function
const myArrowFunction = ()=>{
    // codes to execute
    console.log('My arrow function');
}

// Calling or invoking a function
myFunction()
myFunctionExpression()
myArrowFunction()


// Functions with parameters & arguments
function greet(firstName="stranger", lastName="Alien"){
    console.log(`Hello ${firstName} ${lastName}`);
}
greet()
greet("Blard", "PG")

// return statement
const sum = function(a, b){
    return a + b;
}
console.log(sum(200,400));

// Variable Scope

const age = 23;

function myBio(fname, lstname){
    let age = 30;
    console.log(`My name is ${fname} ${lstname}, I am ${age} years old`);
}
console.log(`My name is ${fname} , I am ${age} years old`);
myBio("Blard", "Omu")


// function sumAllNums(){
//     console.log(arguments);
// }
// sumAllNums(1,2,3,4)
function sumAllNums(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum    
}

console.log(sumAllNums(1, 2, 3, 4, 5, 6));

console.log(sumAllNums(14, 59, 25, 40));


const sumAllNums2 = (...args)=>{
    console.log(args);
}
sumAllNums2(1, 2, 4, 6, 100)


const anonymous = function(){
    console.log("I am an anonymous function");
}
anonymous()









