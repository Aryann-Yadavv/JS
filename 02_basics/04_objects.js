// const TinderUser = new Object() - this is a singleton oject

//will give {} as the object is empty

const TinderUser = {} //this is a non-singleton object

/*A singleton has the property that every function from it to any arbitrary set is injective i.e a function that maps distinct elements of its domain to distinct elements of its codomain
The only non-singleton set with this property is the empty set. The only non-singleton set with this property is the empty set*/

TinderUser.id = "123abc"
TinderUser.name = "sammy"
TinderUser.isLoggedIn = false

// console.log(TinderUser);

// const regularUser = {
//     email: "some@gmail.com"
//     fullName: {
//         userFullName: {
//             firstName: "Aryan"
//             lastName: "Yadav"
//             }
//         } //objects within an object
//     }
// }

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {a: "1", b: "2"}
const obj2 = {c: "1", d: "2"}

//const obj3 = {obj1, obj2}

//console.log(obj3); //this will embed those two objects to 1, with 2 objects being obj 1 and obj2, will not make an object of all the keys wihtin obj1 and obj2

//for proper combination we use Object.assign

//const obj3 = Object.assign({}, obj1, obj2) //use {}, it's an optional parameter, 
//and it'll combine all the keys, where first input is always the target,
//so {} will act as the target and rest obj1 and obj2 will act as the source

// as Object.assign adds target to source, where object.assign(target, object) is it's psuedocode, where sources are added to objects


//best way to combine objects is same as arrays, i.e SPREAD

const obj3 = {...obj1, ...obj2}

console.log(obj3)

// "===" is a boolen equal sign, to check whether values on rhs and lhs are equal or not, it returns true if equal and false if not equal

//array of objects

const users = [
    {
        id: 1,
        email: "yadav@gmail.com",
    },
    {
        id: 1,
        email: "yadav@gmail.com",
    },
    {
        id: 1,
        email: "yadav@gmail.com",
    }
]

// array of objects can be made, and to access email of 1st object in the array, do 

console.log(users[1].email );

console.log(TinderUser);

console.log(Object.keys(TinderUser)); //dataype of the output will be an array
console.log(Object.values(TinderUser)); //gives values
console.log(Object.entries(TinderUser)); //gives both keys and values next to them

console.log(TinderUser.hasOwnProperty('isLoggedIn')); //to check whether the object has certain property or word or not, used in large database




//OBJECTS DESTRUCTURING and JSON API

const course = {
    courseName: "Js",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course /*this is destructuring of objects, so that we don't have to type Course.CourseInstructor everytime we want course instructor, 
now we can just type and input 'courseInstuctor' and we'll get courseInstructor, rather than course.CourseInstructor*/

console.log(courseInstructor); // O/P - Hitesh

//now for more simplicity, we can shorten it as well, and use it's short version we made to use it, here constInst is short form of courseInstuctor

const {courseInstructor: constInst} = course

console.log(constInst);

//JSON 
// {
//     "name" : "aryan",
//     "coursename" : "js",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]

//API can also be made in form of arrays of objects as mentioned above

//an object with no name is usually treated as a JSON , where keys are also stored within "", same as values

//JSON are used to make API