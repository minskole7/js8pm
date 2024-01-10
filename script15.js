
let first_name = "chinmay"

// Javascript -- everything 
// Object -- properties and methods
// Action  and return type 


// program 1
// Method 
// Action - to convert everycharacter to uppercase()
// Return - string

first_name = "chinmay"
let q1 = first_name.toUpperCase()
console.log(q1)

// program2
first_name = "Chinmay"
let q2 = first_name.toLowerCase()
console.log(q2)

// program3
city = "pune"
let q3 = city.includes('p')
let q4 = city.includes('Pu')
console.log(q3)
console.log(q4)

// program 4
let city2 = "goa"
// 0     1     2
// g     o     a
let q5 = city2.indexOf('o')
let q6 = city2.indexOf('a')
let q7 = city2.indexOf("G")
console.log(q5)
console.log(q6)
console.log(q7)

// program 5
// method chaining
// properties and methods 
let q8 = "poorva".toUpperCase().toLowerCase().length
 //"POORVA" --------------> "poorva" --- 6
console.log(q8)

// program 6

let city10 = "jaipur"
let q9 = city10.startsWith('j')
let q10 = city10.startsWith('jai')
console.log(q9)


let q11 = city10.endsWith('r')
let q12 = city10.endsWith('pur')
let q13 = city10.endsWith('puR')
console.log(q11)
console.log(q12)
console.log(q11)
console.log(q13)

// program 7

let city11 = " goa "
let city12 = " goa"
let city13 = "pune "

let q14 = city11.trim()
console.log(q14.length)

let q15 = city12.trimStart()
console.log(q15.length)

let q16 = city13.trimEnd()
console.log(q16.length)

// program 8
let info = "i am learning javascript"
let q22 = info.replace('javascript','python')
console.log(q22)

// program 9 

let a = "shivani"
let b = "dani"

let q23 = a.concat(" ").concat(b)
console.log(q23)

// program 10
let j = "hello"
console.log(j.repeat(3))