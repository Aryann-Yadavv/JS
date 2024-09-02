const Marvel_Heroes = ["ironman", "thor", "spiderman"]
const dc_heroes =  ["superman", "batman", "flash"]

// Marvel_Heroes.push(dc_heroes) //this will put an array wihtin an array, will not merge them

// console.log(Marvel_Heroes); 

const marvel_and_dc = Marvel_Heroes.concat(dc_heroes) //this will merge them, it combines two arrays to one, so the new one needs a new name

console.log(marvel_and_dc);

//SPREAD is even easier

const all_new_heroes = [...Marvel_Heroes, ...dc_heroes] //... is used to spread the array elemnts, spread simply spreads the array elements into indivisuals

console.log(all_new_heroes);

const complex_array = [1,2,3 , [4,5], 6, [7,8,[9,10]]]

const simple_array = complex_array.flat(Infinity) /*Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth,
you have to give depth in the parameter, to how deep you want this to give sub arrays, where if u write infinity, it goes to full depth*/

console.log(simple_array);

console.log(Array.isArray("Aryan")); //checks whether the input/paramter is an array or not
console.log(Array.from("Aryan")); //makes an array from the gives input
console.log(Array.from({name : "Aryan"})); //gives [], since it from() cannot figure out of which thing inside the parameter, it has to make an array of

let score = 1
let score2 = 2
let score3 = 3

console.log(Array.of(score,score2,score3)); //of() returns a new array of all the parameters combined



