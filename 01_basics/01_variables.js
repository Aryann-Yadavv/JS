const accountID = 144573
let accountEmail = "email@google.com"
var accountPass = "1234"
accountCity = "jaipur"
// accountID = 2, not allowed as accountID is constant and can have only one value, once accountID is declared with const keyword, it does not need to be used again and again

accountEmail = "trivial@gmail.com"
accountCity = "delhi"
accountPass = "5678"
console.table([accountEmail,accountCity,accountPass])

//console.table is used to create a table of input given, it has [] within ()

/* let is more new and refined verison of var, refrain from using var keyword to declare variables, as var has a block scope and functoinal scope issue, that is 
curly brackets {} , which changed value of the variable, for ex, accountPass, whenever it is used again, like in a loop, to prevent that, let keyword was introduced */

let accountState; 
console.table([accountEmail,accountCity,accountPass, accountState])

// accountState was declared but it's value was not given, hence it gives undefined in table

