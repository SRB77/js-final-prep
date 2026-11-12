// let score = 33 
// let score = "33" 
// let score = "33abc" 
// let score = null ;
let score = undefined ;

console.log(typeof score);
console.log((typeof score));

let valueInNumber = Number(score);
console.log(valueInNumber , typeof valueInNumber);


// Summary 
/* 
    "33" -> it is convertable to number becasue it's string of Number = 33
    "33ab" -> Not convertable to number so = 'Nan'
    "true or false" -> this will be converted to 1 or 0 
    "null" -> it will go to 0 why will investigate
    'undefined' -> it will converted to = 'NaN'
*/
