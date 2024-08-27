//dates

let today = new Date() //takes date of current instance

console.log(today.toString()); //toString is used to convert the date into a string and get readable date

console.log(today.toISOString()); 

console.log(today.toJSON());

console.log(today.toLocaleDateString()); //gives output upto your choice, with no choice, it gives date only, not time and day

console.log(today.toDateString()); //day and date only, not time

//date is also an object

console.log(typeof today); //object



let MyCreatedDate =  new Date(2024, 0, 23) //month is a string, so it starts with a zero too, so 0th month is Jan, format is Year, Month, Day

console.log(MyCreatedDate.toDateString());

let timeAndDate = new Date(2023, 1, 21, 5, 7) //further info turns into date and time

console.log(timeAndDate.toString()); 


//to compare dates and timestamps 

let MyTimeStamp = Date.now() //current date

console.log(MyTimeStamp); //gives the value of current time in mili-second 

console.log(MyCreatedDate.getTime()); //used to get time, i.e in miliseconds again

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //gives month, +1 so that Output is not 0,
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `  is used for string and dates, string interpolation for Output

newDate.toLocaleString('default', {
    weekday: "long"
    
}) //default is for internationalisation, i.e US date and time system

//press CTRL + spacebar for suggestions