

// methods  and properties 

let first_name = "chinmay"
let q1 = first_name.length
console.log(q1)

// method 
// gym 
// action ---->excerecise
// return ----> health

// program 2 

let middleName = "shirish"

// UpperCase()
// Action - convert to character to UpperCase()
// Return - type 

let q11 = middleName.toUpperCase()
console.log(q11)


// program 3
let lastName = "Ram"
let q12 = lastName.toLowerCase()
console.log(q12)

// program 4
let city = "pune"
let city3 = city.toUpperCase().toLowerCase().length
// "PUNE"--> "pune" -----> 4.toUpperCase()
console.log(city3)

// program 5
let info = "i am learning javascript"
let q3 = info.includes("learning")
let q4 = info.includes("l")
let q5 = info.includes("L")
console.log(q3)
console.log(q4)
console.log(q5)

// program 6
let first_name2 = "chinmay"
let last_name2 = "deshpande"
let q6 = first_name2.concat(' ').concat(last_name2)
console.log(q6)

// program 7
// startsWith()
// endsWiths()

let fruit = "apple"
console.log(fruit)
let q7 = fruit.startsWith('a')
let q8 = fruit.startsWith('app')
console.log(q7)
console.log(q8)

let q9 = fruit.endsWith('e')
let q10 = fruit.endsWith('Le')
console.log(q9)
console.log(q10)

// program 8 
// replace()
let info2 = "I am learning js"
let q13 = info2.replace('js',"python")
console.log(q13)

// program 9

let h = " pune "
let q14 = h.length
console.log(q14)

let q15 = h.trim()
console.log(q15.length)

let q16 = h.trimStart()
console.log(q16.length)


let city6 = "goa " 
let q17 = city6.trimEnd()
console.log(q17.length)