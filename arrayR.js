let x = 10 
console.log(x)

//             0  1  2  3
let numbers = [11,22,33,44]
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])

// string 

//              0         1         2        3        4
let cities = ["pune","banglore","kolkata","chennai","nagpur"]
console.log(cities[0])
for(let i = 0 ; i < 5 ; i++){ // 1 // 2 // 3 // 4 // 5
    //console.log(i) // 0 , 1 , 2 , 3 , 4
    console.log(cities[i])
}
// i = 0
// i = 1
// i = 2
// i = 3
// i = 4

//              0        1        2       3
let fruits = ["apple","banana","grapes","mango"]

for(let i = 0 ; i < 4; i++){
   // console.log(i)
    console.log(fruits[i])
}
for(let i = 3 ; i >= 0 ; i--){
    //console.log(i)
    console.log(fruits[i])
}


// Array object 
// Properties and methods 

// Human -->
// Property - age , heigth , weight 
// Method   - talk() , walk()

// Vehicle --> 
// Property  ---> color,regNo , model , company
// Method    ---> start() , stop()


// property 
//               0         1          2        3
let country = ["india","pakistan","srilanka","cuba"]
// length
let q1 = country.length
console.log(q1)
// print lastIndex of array 
console.log(country.length-1)
//                   0             1        2         3
let vegetable = ["cauliflower", "carrot","brinjal","tomato"]
for(let i = vegetable.length -1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(vegetable[i])
}

// methods 
// add element to last
let marks = [11,22,33,44]
marks.push(65)
console.log(marks)

// add element to first
marks.unshift(55)
console.log(marks)
// [ 55, 11, 22, 33, 44, 65 ]

// removes the last element
marks.pop()
console.log(marks)

// removes the firstElement
marks.shift()
console.log(marks)


// program 1
// Array ----> 
//                0     1   2     3
let birthYear = [1989,1990,1991,1992]
// [34,33,32,31]
let ages = []

for(let i = 0 ; i < birthYear.length ; i++){ // 1 // 2 // 3 // 4
    //console.log(i) // 0
    //console.log(birthYear[i])
    //console.log(2023 - birthYear[i])
    ages.push(2023 - birthYear[i])
}
console.log(ages)

// 0 < 4 ==> True 
// 1 < 4 ==> True 
// 2 < 4 ==> True
// 3 < 4 ==> True

// program 2
//            0     1    2   3
birthYear = [1989,1990,1991,1992]
let q2 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(q2)

// program 2

let numbersB = [11,22,33,44,55]
let q3 = numbersB.map(function(el,index,arr){
    return el + 2
})

// program 3
//            0   1  2  3  4
let markss = [33,44,55,66,77]
let above50 = []
for(let i = 0 ; i < markss.length ; i++){
   // console.log(i)
   //console.log(markss[i])
   if(markss[i] > 50){
        above50.push(markss[i])
   }
}
console.log(above50)


let q4 = markss.filter(function(el,index,arr){
    return el > 50
})
console.log(q4)


// program 4

let sum = [11,22,33]
let total = 0
for(let i = 0 ; i < sum.length ; i++){
    console.log(sum[i])

    total = sum[i] + total
    //        11    +  0   =====> 11
    //        22    +  11  =====> 33
    //        33    +  33   =====> 66 
}
console.log(total)
sum = [11,22,33]
let q5 = sum.reduce(function(acc,el,index,arr){
        return acc + el
},0)
console.log(q5)