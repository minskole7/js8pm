// //             0          1       2   3
// let info = ["chinmay","deshpande",23,45]
// // object 
// let info2 = {
//     // key:value
//     // property:value
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollNo:45
// }

// //console.log(info2[0])

//              0       1          2         3
let cities = ["pune","mumbai","banglore","kolkata"]
// retrive 
console.log(cities[0])
// update 
cities[0] = "nagpur"
// add
cities.push("wardha")
cities.unshift("yavatmal")
// delete
cities.pop()
cities.shift()

// program 2 

let vehicle = {
    color:"red",
    type:"sedane"
}

// retrive (dot notation and bracker notation)
console.log(vehicle.color)
console.log(vehicle['color'])
// update (dot notation and bracker notation)
vehicle.color = "blue"
vehicle['color'] = "red"
// add (dot notation and bracker notation)
vehicle.city = "pune"
vehicle['regNo'] = 123
console.log(vehicle)
// delete (dot notation and bracker notation)
delete vehicle.color
delete vehicle['type']

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:13,
    rollNo:45
}

// dot notation
console.log(info.firstName)
info.firstName = "tanmay"
info.city = "pune"
delete info.city 

console.log(info['age'])
info['age'] = 34
info['language'] = "marathi"
delete info['language']

//console.log(info)



