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





//OPERATIONS




