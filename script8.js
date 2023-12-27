// push() , pop(), shift() , unshift()
// map() , filter() , reduce(),forEach(), some(),every()
// findIndex() , find()
// slice() , splice() , join() , concat()

// at()
//              0        1         2          3
let cities = ["pune","banglore","chennai","kolkata"]
let a = cities.at(2)
let b = cities.at(7)
console.log(a)
console.log(b)

// indexOf()
let c = cities.indexOf("chennai")
console.log(c)
let d  = cities.indexOf("Chennai")
console.log(d)

// sort()
let countries = ["india","srilanka","japan","bangladesh"]
countries.sort()
console.log(countries)

// reverse()
let names  = ["chinmay","shirish","poorva","kajal","amol"]
let q1 = names.reverse()
console.log(names)
console.log(q1)

// fill()
//           0  1  2  3  4  5  6  7  8
let marks = [11,22,33,44,55,66,77,88,99]
let q2 =marks.fill('-',2,6)
console.log(q2)

// flat()
//                0         1          2
//          0  1  2    0  1  2    0  1   2
let mks = [[11,22,33],[44,55,66],[77,88,99]]
console.log(mks[0][1])
console.log(mks[2][2])
console.log(mks[1][2])
let q3 = mks.flat()
console.log(q3)

// includes()
let fruits = ["apple","mango","banana","papaya","stawberry"]
let q4 = fruits.includes("apple")
console.log(q4)


