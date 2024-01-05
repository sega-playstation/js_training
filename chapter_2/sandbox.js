// alert("hello, world");

// console.log(1);
// console.log(2);

//const and let are new to js and the main ways to make variables, const cant be reassigned
// let age = 25;
// let year = 2019
// console.log(age, year);


// //reset a variables value linke this
// age = 30;
// console.log(age);

// const points = 100;
// //points = 50;
// console.log(points);

// //there is an older way to make variables and it is with var keyword
// var score = 75;
// console.log(score);

//naming constraints are that there cant be spaces between words and camel case is typical
//variables can contain only letters, numbers or dollar signs, and cannot start with a number
//reserved words can also never be used as variable names

//JS DATA TYPES
//there are 7 js datatypes and they are:
//number, string, boolean, null, undefined, object and symbol
// JavaScript Data Types

// Number    1, 2, 3, 100, 3.14
// String    'hello, world' "mario@thenetninja.co.uk"
// Boolean   true / false
// Null      Explicitly set a variable with no value
// Undefined For variables that have not yet been defined
// Object    Complex data structures - Arrays, Dates, Literals etc
// Symbol    Used with objects

//js is called a loosley typed language as opposed to ruby or py that is strongly typed

//strings go in quotes to display in console
// console.log('hello world');

// //string concatenation
// let email = 'mario@mario.com';
// console.log(email);

// // string concatenation
// let firstName = 'Brandon';
// let lastName = 'Sanderson';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // getting characters
// console.log(fullName[2]);

// // string length
// console.log(fullName.length);

// // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// common string methods

// let email = 'mario@thenetninja.co.uk';

// // let result = email.lastIndexOf('n');

// // let result = email.slice(2,5);

// // let result = email.substr(4,10);

// // let result = email.replace('m', 'w');

// let result = email.replace('n', 'w');

// console.log(result);



//MATH

// let radius = 10;
// const pi = 3.14;

//console.log(radius, pi);

// math operators +, -, *, /, **, %

//console.log(10 / 2);
//let result = radius % 3;
//let result = pi * radius**2;

// order of operation - B I D M A S

//let result = 5 * (10-3)**2;

//console.log(result);

// let likes = 10;

//likes = likes + 1;
//likes++;

//likes--;

//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;

// console.log(likes);

//NaN - not a number
// this happens when you do non-sense math operations such as 1 * 'dog'
//to use both we concat like this:

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);
//this is an ok way to concat with just a few strings and numbers,
//but if there becomes many of them it is better to use Template strings
//This is Template Strings:


// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// // concatenation way
// // let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// // console.log(result);

// //TEMPLATE STRING uses backticks!
// // template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;

// console.log(result);

// // creating html templates
// let html = `
//   <h2>${title}</h2>
//   <p>By ${author}</p>
//   <span>This blog has ${likes} likes</span>
// `;

// console.log(html);


//ARRAYS type: object
//js is a zero based language

// let ninjas = ['shaun', 'ryu', 'chun-li'];

// // ninjas[1] = 'ken';
// // console.log(ninjas[1]);

// // let ages = [20,25,30,35];
// // console.log(ages[2]);

// // let random = ['shaun', 'crystal', 30, 20];
// // console.log(random);

// //console.log(ninjas.length);

// // array methods

// //let result = ninjas.join('-');
// //let result = ninjas.indexOf('chun-li');
// //let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken');
// result = ninjas.pop();

// console.log(ninjas);


//NULL AND UNDEFINED
//if we use this it will says NaN in console
// let age;
// console.log(age, age + 3, `the age is ${age}`);

// by doing this the value will be set to null, if we desire to have a value with nothing in it
//such as deleted feild on form or starting place
// let age = null;
// console.log(age, age + 3, `the age is ${age}`);
