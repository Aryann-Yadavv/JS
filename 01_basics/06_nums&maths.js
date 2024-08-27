//const score = 10 //a constant variable that has a number

//but if we wanna set a variable which can only have a number, we will use 'new' object method

//const number1 = new Number(100) //output : [number: 100]

//console.log(number1);

//console.log(number1.toString()); //to convert the Number into a string
//console.log(number1.toString().length); //to get it's length

//console.log(number1.toFixed(2)); //gives output 100.00, used to give fixed value with 2 more digits after decimal as per choice

//const number2 = new Number(29.456)

//console.log(number2.toPrecision(3)); //can only be between 1 to 21, and returns a string with a more precised value and can be decided how much precision we want

//for example toprecision(3) gives precesion value upto 3 values from the start

//console.log(number2.toPrecision(5)); //will give 5 digits precised

//console.log(number2.toPrecision(1)) //will give 1 digit and rest in exponential


const value1 = 1000000000

console.log(value1.toLocaleString('en-IN')); //to simplify the big number by putting in commas in the output, en-IN is used to put commas on indian standards, US is default




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++    MATHS     +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math); //basic syntax for Math object

// console.log(Math.abs(-5)); //will give the absolute value of the number, i.e 5 here, for -5

// console.log(Math.round(4.6)); //rounds off the value

// console.log(Math.ceil(4.5)); //round off to value above it

// console.log(Math.floor(4.5)); //round off to value below it



//min() and max() can be used to find minimum and maximum values

console.log(Math.random()); //random gives value between 0 or 1 after every execution of code, can be used to programs like dice game somewhere we need random results

console.log(Math.floor((Math.random()*10) + 1)); //add 1 more so it does not give a zero, and put random()*10 inside () for simplification, 
//and put it all in a floor() for further simplificaiton


//to apply this in a range, we take a example of range from 10 to 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); //here (max - min + 1) is done to find the range of numbers we can get, i.e 20-10=10, 
//and we add 1 so we dont get 0 as out result, and add 'min' again to get the result in between min and max