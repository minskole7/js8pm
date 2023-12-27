
// comparison 
// entity < entity  ======> boolean ====> true or false
// < , > , <= , >= , != , == ,=== , !==
//== ,!=       ======> value 
// === , !==   ======> type

console.log(2 === 2) // True
console.log(2 !== '2') // True
console.log(2 === 2) // True
console.log(2 !== 2) // False
console.log(2 == 2) //True
console.log(2 == '2') // True
console.log(2 != 2) // False
console.log(2 != '2') // False
console.log(3 > 2) // True
console.log(3 > 1) // True
console.log(3 != 1) // True
console.log(3 == 1) // False
console.log(3 == 2) // False
console.log(3 >= 1) // True
console.log(3 <= 1) //False
console.log(3 >= 3) // True
console.log(3 <= 3) // True

// Logical operator 


// AND 

// true   &&    true   ======> true 
// false  &&    true   ======> false
// true   &&    false  ======> false 
// false  &&    false  ======> false

console.log(7 === 7 && 8 !== '8') // true
console.log(7 == 8 && 7 == 7) // false
console.log(8 == 8 && 7 === '7') // false
console.log(8 != 8 && 9 != 9) // false


// OR 
// true  ||  true  =========> true 
// false ||  true  =========> true
// true  ||  false =========> true
// false ||  false =========> false

console.log(7 == 7 || 8 == 8)
console.log(7 != 7 || 8 == 8)
console.log(7 == 7 || 8 != 8)
console.log(7 != 7 || 8 != 8)


// NOT
// True  ------- false 
// False ------- true

console.log(!(7 != '7'))
console.log(!7 === 7)


// conditional statement
// condition --- boolean
// if(condition){
//     // statement
// }

// one input and multiple outcomes -- conditional statement

// numT > 0 && numT <= 5   --------> 5 % discount
// numT > 5 && numT <= 10  --------> 10 % discount
// numT > 10               --------> 30 % discount

let numT  = 17

if(numT > 0 && numT <= 5){
 console.log("5 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("10 % discount")
}
if(numT > 10){
    console.log("30 % discount")
}















