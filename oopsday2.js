
// //object literal 

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollNO:45,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }

// }
// chinmay.display()



// program 2
// function Person(fn,ln,ag,rn){
//     this.firstName = fn 
//     this.lastName = ln 
//     this.age = ag 
//     this.rollNo = rn
//     // this.display= function(){
//     //     console.log(this.firstName+ this.lastName)
//     // }
// }
// let amol = new Person("amol","rao",34,66)
// let chinmay = new Person("chinmay","deshpande",13,4)

// console.log(amol)
// console.log(chinmay)

// Person.prototype.display = function(){
//     console.log(this.firstName + this.lastName)
// }

// console.log(amol instanceOf person)
// console.log(chinmay instanceOf person)

// chinmay.display()
// amol.display()

// Every object has one __proto__ === Parent.protype
//console.log(amol.__proto__ === Person.prototype)

// program 2

// let names = ["chinmay","shirish","ramesh","satish"]
// console.log(names)
// names.push("snehal")

// console.log(names.__proto__ == Array.prototype)
// Array.prototype.hello = function(){
//     console.log("hi chinmay")
// }

// names.hello()
// console.log(names instanceof Array)

// program 3
// function Vehicle(cl, ty){
//     this.color = cl
//     this.type = ty
//    // this.country = "India"
//     this.displayColor = function(){
//         console.log(this.color)
//     }
// }

// let maruti = new Vehicle("red","sedane")
// let audi = new Vehicle("blue","SUV")

// console.log(maruti)
// console.log(audi)

// Vehicle.prototype.country = "India"
// console.log(maruti.country)
// console.log(audi.country)
// console.log(audi.hasOwnProperty('color'))
// console.log(audi.hasOwnProperty('country'))

// Es6 class

class PersonD {
    constructor(fn, ln, rn, age) {
        this.firstName = fn
        this.lastName = ln
        this.rollNo = rn
        this.age = age

    }
    display() {
        console.log(this.firstName + this.lastName)
    }
}
let amol2 = new PersonD("amol2", "rao2", 23, 45)
let amol3 = new PersonD("amol3", "rao3", 23, 45)

console.log(amol2)
console.log(amol3)

amol3.display()
amol2.display()

// Object.create()

let obj = {
    init:function(fn,ln,ag,roll){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag 
        this.roll = roll
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let amol4 = Object.create(obj)
console.log(amol4)
amol4.init("amol4","rao4",35,66)
console.log(amol4)
amol4.display()