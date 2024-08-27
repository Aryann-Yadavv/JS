//types of datatypes--

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);





//memory (types)
// stack (has primitive datatypes) and heap memory (has non primitive datatypes)

// in stack their is a copy of previous memory taken given to new variables, we use primitive data types here, for example,

let abc = "name"

let xyz = abc

xyz = "new name"

console.log(xyz);
console.log(abc);

//in heap, we use non-primitive data types,

//create an Object called "user1"

let user1 = {

    email : "user@gmail.com",
    bank : "user@abc"
}

//all of the data in object will go in the heap, and if we create another user, user2, it will not take it from user1 if we do user2 = user1 
//it'll refernce the data in the heap that is the data in the object, not the object, whereas, in primitive or stack, we get a copy of the data we took reference from

let user2 = user1

user2.email = "user2@gmail.com" //email in the object user can be changed with a dot and email next to it

console.log(user2);
console.log(user1);

//value of email will be changed in both in the output



