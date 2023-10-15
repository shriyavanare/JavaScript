const accountID = 144553
let accountEmail = "shriya@gmail.com"
var accountPassword = "12345"
accountCity = "Thane"
let accountState 

//accountID = 22   //not allowed

accountEmail = "ssv@gmail.com"
accountPassword = "091299"
accountCity = "Mumbai"

console.log(accountID);

/*
Preffered not to use var
as it has issues regarding funtional scope and block scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])