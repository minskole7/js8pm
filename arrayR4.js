// slice 
//               0        1       2         3         4
let names = ["chinmay","rakesh","sameer","santosh","sanjay"]
//             -5         -4      -3       -2          -1
//names.slice(startIndex,EndIndex(not included))

console.log(names.slice(2))
console.log(names.slice(1,4))
console.log(names.slice(-4))
console.log(names.slice(-4,-1))
console.log(names.slice(1,-1))
console.log(names.slice(-1,-4))

// splice
//               0       1      2        3
let fruits = ["apple","mango","banana","papaya"]

// fruits.splice(startIndex,numberOfElementsToBeDeleted,rpl1,rpl2)

// fruits.pop()
// fruits.shift()
// fruits.splice(1,2)
// console.log(fruits)

// fruits.splice(3,1)
// console.log(fruits)

// fruits.splice(1,1,"chikoo","berry")
// console.log(fruits)

// contact 


let a = [11,22,33]
let b  = [44,55,66]
let c = a.concat(b)
console.log(c)


// at
//        0  2  3  4 5
let g = [11,22,33,44,5]
let g1 = g.at(2)
console.log(g1)


// flat
//                     0                        1                  2
//               0        1         0          1         0          1
let states = [["mumbai","nagpur"],["bhopal","indore"],["udaipur","jaipur"]]

console.log(states[0][0])
console.log(states[1][0])
console.log(states[2][1])

let f = states.flat()
console.log(f)

// fill
//              0   1  2  3  4 5
let numbersA = [22,33,44,55,66,77]
let oo = numbersA.fill('@',2,5)
console.log(oo)

// join

let info = ["chinmay","shirish","raj","satish"]
let q4 = info.join("-")
console.log(q4)
let q5 = info.join("@")
console.log(q5)
// sort

let names2 = ["chinmay","abhisha","manshi","rahul"]
let q55 = names2.sort()
console.log(q55)

// reverse
//               0           1            2      3
let country = ["india","bangladesh","srilanka","cuba"]
// country.reverse()
// console.log(country)

// indexOf

let q222 = country.indexOf('srilanka')
let q2223 = country.indexOf('Srilanka')
console.log(q222)
console.log(q2223)


