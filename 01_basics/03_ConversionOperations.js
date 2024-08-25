let score = 56 // can't tell if score is supposed to be a string or number or object, when it is sent from front end to the back end, for that conversion is used

// you may use typeof function to get it's dataype

console.log(typeof score); //will give u a number since it's a number, and when I'll make score = "56" rather than score = 56, it'll become a string


/* here we used () within log(), these are used to represent methods, 
methods are usually used to access and manipulate the data stored in an object */

let valueInNumber = Number(score) // now with this, it guarentees that the score is a number, similiarly 'String' keyword can be used just like Number, this is CONVERSION!!!
console.log(typeof valueInNumber);
console.log(valueInNumber);


/*NaN may comes when the input is not a number, but it's conversion is done to a number,
 for ex, score = 33abc, is a string, but if it's conversion is done to a number i'e Number(score), it'll show NaN (Not a Number) when done console.log(valueInNumber) */


// it score was NULL, it'll give 0 as it's value

//conversion, "33" = 33, "33abc" = NaN, true = 1, false = 0, these are results of conversion on the basis of input and Number() conversion

let usLoggedIn = "" //boolean 1 gives true, and 0 or no input, i.e "", gives false

let booleanLoggedIn = Boolean(usLoggedIn)

console.log(booleanLoggedIn);

//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);




//OPERATIONS




