

// variable 
// arithmetic operator 
// types 
// comparison 
// logical operator 
// conditional statement
// switchcase
// loops  (break and continue)
// array and methods
// string and methods
// objects 
//             0          1       2  3
let info = ['chinmay','deshpande',34,22]

// retrive 
console.log(info[0])

// update
info[0] = "tanmay"
console.log(info[0])

// add 
info.push("pune")
info.unshift("pune")
console.log(info)

// delete
//[ 'pune', 'tanmay', 'deshpande', 34, 22, 'pune' ]
info.pop()
info.shift()
console.log(info)

let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:22
}

// object does not stores the value by index
//console.log(info2[0])

// retrive  [dot notation and bracket notation]
console.log(info2.firstName)
console.log(info2['firstName'])

// update  [dot notation and bracket notation]

info2['firstName'] = "tanmay"
info2.firstName = "ninad"
console.log(info2)

// add  [dot notation and bracket notation]
info2.city = "pune"
info2['language'] = "marathi"
console.log(info2)
// delete  [dot notation and bracket notation]

delete info2.firstName
delete info2['city']
console.log(info2)
