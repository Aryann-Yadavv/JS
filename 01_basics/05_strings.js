const name = "aryan"
const repositorycCount = 10

console.log(name + repositorycCount + "value");

//The method used above it outdated and not used anymore, new way is below

//we use backticks with ``, i.e string interpolation, we create placeholders with $ sign and place the variables in it

console.log(`HEllo my name is ${name} and my repo count is ${repositorycCount} `);

//new keyword for objects and string can also be used for declaration

const fullname = new String ('Aryan-Yadav')

console.log(fullname[2]); //to give the 2nd letter in the string

console.log(fullname);

//string has Protoype methods aka functions, which can be used to find specific property about a string, a string is an object in Js

// __proto__ as a concatenation is used, with a '.' to 

console.log(fullname.__proto__);

// it'll five {} as a result, which is an empty object, which is not empty but has values which can be obtained using prototype methods, example

console.log(fullname.length); //gives 11, where length is a prototype method

console.log(fullname.toUpperCase()); //gives ARYAN YADAV

console.log(fullname.charAt(2)); //to find position of a character, at 2, after 0 and 1, i.e = y

console.log(fullname.indexOf('r')); //for index of a string character, has to be put in '' since it's a character now a variable

let newname = fullname.substring(0, 5) //gives the substring upto 5, with excluding the 5th spot, with having 0,1,2,3,4th elements only

console.log(newname);

//slice can also be used in same ways

const anotherString = fullname.slice(0, -4) //gives everthing but the last 4 letters, SUBSTRING's does not obey that negative slice
const newstring = fullname.slice(-2, 4) //goes 2 steps back, and then counts 4 letters, i.e 'av-A'

console.log(anotherString);

console.log(newstring);

const newstring1 = "      aryan      " 

console.log(newstring1.trim()); //will cut off all the unnecessary spaces in the string, can be used while filling username, it'll give aryan only without spaces,

const url = "aryan.com/aryan_yadav"

console.log(url.replace('_', '-')); //aryan_yadav will have it's '_' replaced with '-' 

console.log(url.includes('yadav')); //to get if that substring is present in the main string or not

console.log(fullname.split('-')); //to split the string, can be on the basis of space or some icon like '-'















