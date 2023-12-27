
let fname = "chinmay"

// 0   1  2  3  4  5  6
// c   h  i  n  m  a  y
console.log(fname[0])
for(let i = 0 ; i <= 6 ; i++){ // 1 // 2 //3 // 4 // 5 // 6
    //console.log(i) // 0 // 1 // 2 // 3 // 4 // 5
    console.log(fname[i])
}

// properties and method

// 0  1   2   3
// p  u   n   e

let cityOne = "pune"
let q1 = cityOne.length
console.log(q1)

// length -1 is always is lastIndex

let q2 = cityOne.toUpperCase()
console.log(q2)


// program 2 
let cityTwo = "Chandrapur"
let q3 =cityTwo.toLowerCase()
console.log(q3)


// program 3
let cityThree = "nagpur"
let q4 = cityThree.includes('G')
console.log(q4)

let q5 = cityThree.includes('nag')
console.log(q5)

let q6 = cityThree.includes('naG')
console.log(q6)

// program 4 
let cityFour = "wardha"
let q7  =cityFour.startsWith('w')
let q8  =cityFour.startsWith('war')
console.log(q7)
console.log(q8)

// program 5
let q9 = cityFour.endsWith('dha')
let q10 = cityFour.endsWith('A')
console.log(q9)
console.log(q10)




