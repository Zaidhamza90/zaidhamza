const accountId = 144553
let accountEmail = "zaidhamza90@gmail.com"
var accountPassowrd = "123456"
accountCity = "Karachi"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassowrd = "21212122"
accountCity = "Islamabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassowrd, accountCity, accountState])
