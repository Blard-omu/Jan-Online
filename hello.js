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