console.log(2 > 1); //gives true

//while comparing make sure the datatype of both items being compared is same

console.log(null > 0); // == gives true as equality check works differently compared to comparison operations, here it treats null as 0, hence it gives null==0 true
console.log(null <= 0);
console.log(null == 0);

// === is a strict check, it compares the values strictly, while also strictly checking their data types

console.log("2" == 2);
console.log("2" === 2); //gives false as "2" is string and 2 is number, can't be compared