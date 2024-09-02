// singleton

//object literals 

// Object.Create can also be used to create objects

const MySym = Symbol("Key1") //Symbol() oject is used to declare symbol datatype

const JsUser = {
    name: "aryan",
    age: 21,
    location: "mathura",
    [MySym]: "key1",
    email: "aryan@email.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturdays"] 
} 

//here, name is the key, and aryan is the value and pit a coma "," after each key

/*for symbol datatypes, keys are put within [] to make them symbols, either oject will bydefault take them as strings, 
 it'll show in Output that the key within [] is a symbol*/

// console.log(JsUser.email); //objects' values can be obtained by dot "." notations
// console.log(JsUser["email"]); //here put email within [""], since by default, with no conjuction, oject takes keys as strings

// console.log(JsUser[MySym]);

// console.log(typeof [MySym]); //symbol is an object, so it'll give object as it's type of

//to update values, just simply use dot "." notation again

JsUser.email = "aryan@gmail.com" //it'll update to gmail from email

//Object.freeze(JsUser) //using this, the changes will be freezed and futher changes cannot be made

JsUser.email = "mail@email.com" //this will not be done, as the JsUser is freezed now, it'll give aryan@gmail,.com

//console.log(JsUser);

//to add a function in the object :-

JsUser.greeting = function() {
    console.log("hello JsUser");
}

console.log(JsUser.greeting); //gives undefined as fucntion are defined with () at the end

console.log(JsUser.greeting());

JsUser.greetingTwo =  function(){ //function(), as it gives the output below when no parameter given

console.log(`Hello Js User, ${this.name}`); //using string interpolation

}

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());
