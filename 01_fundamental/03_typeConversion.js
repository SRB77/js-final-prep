/*
let score = 33 
let score = "33" 
let score = "33abc" 
let score = null ;
let score = undefined ;

console.log(typeof score);
console.log((typeof score));

let valueInNumber = Number(score);
console.log(valueInNumber , typeof valueInNumber);
*/

// Summary 
/* 
    "33" -> it is convertable to number becasue it's string of Number = 33
    "33ab" -> Not convertable to number so = 'Nan'
    "true or false" -> this will be converted to 1 or 0 
    "null" -> it will go to 0 why will investigate
    'undefined' -> it will converted to = 'NaN'
*/


// ************************* OPERATION ********************************

// let value = 3 ;
// let negValue = -value;
// console.log(negValue);

/* 
> There are multiple operation we have learnt already 

console.log(2+2) //> Addition 
console.log(2-2) //> Subtraction
console.log(2*2) //> Multiplication
console.log(2/2) //> Division 
console.log(2**2)//> Power calculation 

we know all these above operation 
*/

/* Some Tricky Conversion and Bad practice 

let str1 = "hello ";
let str2 = "chandan";
let str3 = str1 + str2;
console.log(str3);

console.log(1 + "2");
console.log("1" + 2);
console.log("1"+ 2 + 2 );
console.log(1 + 2 + "2");
console.log(+true);
console.log(+"");
let num1 , num2 , num3 = 4;
// console.log(num1 , num2 , num3); > output = undefined , undefined , 4 

*/ 

/*
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);
console.log(typeof id);
console.log(typeof anotherId);
*/

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// > String conversion 
/*
let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

let another = null;
console.log(typeof another);

another = String(another);
console.log(typeof another);
*/ 

// > Numeric Conversion 
// There some thing we should keep in my mind of Numeric conversion 
// let str = "123";
// console.log(typeof str , str);

// let num = Number(str);
// console.log(typeof num ,num);

// let age = Number("an apple is ther 345");
// console.log(typeof age , age);

// undefined ->	NaN
// null	     ->   0
// true-false->	1 and 0
// string	 -> Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
