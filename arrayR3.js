
// map()
//             0  1  2  3  4  
let numbers = [11,22,33,44,55]
let q1 = numbers.map(function(el,index,arr){
    //console.log(el,index,arr)
    return el + 2
})
console.log(q1)

let birthYear = [1989,1990,1991,1992]
let q2 = birthYear.map(function(el,index,arr){
    return 2023 - el
})
console.log(q2)

// filter()
let marks = [33,44,55,66,22,33,55,77,88]
let q3 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)

// reduce()
let mks = [11,22,33] // 6
let q4 = mks.reduce(function(acc,el,index,arr){
    return el + acc
},0)
console.log(q4)


// forEach()
//             0       1         2
let cities =["pune",'mumbai',"banglore"]
cities.forEach(function(el,index,arr){
   console.log("welcome "+el)
})

// find()
//           0   1  2  3  4  5   6  7  8  9  10
let numsB = [11,22,33,44,55,66,77,55,66,77,88,99]
let q5 = numsB.filter(function(el,index,arr){
    return el > 40
})
console.log(q5)

let q6 = numsB.find(function(el,index,arr){
    return  el > 40
})
console.log(q6)


// findIndex()
let q7 = numsB.findIndex(function(el,index,arr){
    return  el > 40
})
console.log(q7)

//every()

let n = [11,22,33,44]
let q9 = n.every(function(el,index,arr){
    return el > 12
})
console.log(q9)

//some()
let q10 = n.some(function(el,index,arr){
    return el > 120
})
console.log(q10)
