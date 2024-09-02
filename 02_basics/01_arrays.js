//array representation

const MyArr = [0,1,2,3,4] //arrays are always in square brackets []

const MyHeroes = ["hulk", "batman", "spiderman"]

const myArr2 = new Array(1,2,3,4,5) //since new Array() is used here

console.log(myArr2[1]);


//arrays in Js are resizable, can be increased in size or vice versa

//can be mix, can have numbers, characters, and boolean

//zero based indexing, i.e the indexing starts form zero

/*js array copy operations create shallow copies, i.e shallow copy of an object is a copy whose properties share 
same references (point to the same underlying values) as those of source object from which the copy was made. 
While in Deep copies, properties do not share the same reference point*/



//array methods

//push, it simply adds new values to the arrays

myArr2.push(6)

console.log(myArr2);

//pop removes value, the last value in the array, get's no parameter, just pop()

//unshift, it inserts a new value at the start of the array 

myArr2.unshift(20)

console.log(myArr2);

//shift removes the first value in array, get's no parameter, just shift()

myArr2.shift()

console.log(myArr2);

console.log(myArr2.includes(9)); //result of this will be boolean, whether there's a 9 in the array or not

console.log(myArr2.indexOf(8)); //will give -1 if there's no such array object is not present in that array


const newArr = MyArr.join() //join adds all the array elements into a string

console.log(typeof newArr);

// slice and Splice

console.log("A ", MyArr);

const myArr3 = MyArr.slice(1,3) //will give 1,2 not 3

console.log(myArr3);

console.log("B ", MyArr);

const myn2 = MyArr.splice(1,3) //will give 1,2,3

console.log(myn2);

console.log(MyArr); //will give 0,4 since 1,2,3 was removed by splice


/*BUT THE MAIN DIFFERENCE BETWEEN SLICE AND SPLICE IS THAT SLICE GIVES YOU A PORTION OF THE ARRAY, 
WHEREAS, SPLICE GIVES IT TO YOU AND REMOVES IT FROM THE ORIGINAL ARRAY AS WELL*/













