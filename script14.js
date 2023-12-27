// oops 

// program 1
// object literal 
let amol = {
    firstName:"amol",
    lastName:"rao",
    age:12,
    rollNo:15
}

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:45
}

// retrive , update , add , delete

// console.log(chinmay.firstName)
// console.log(chinmay['firstName'])

// chinmay.firstName = "chinmayee"
// chinmay['firstName'] = "ninad"

// chinmay.city = "pune"
// chinmay['language'] = "marathi"

// delete chinmay.city
// delete chinmay['city']


// template 

// function contructor 

function Person(fn,ln,ag,rn){
    this.firstName  = fn 
    this.lastName = ln
    this.age = ag 
    this.rollNo = rn
}

let poorva = new Person("poorva","vyas",34,55)
let pooja = new Person("pooja","joshi",33,56)

console.log(pooja)
console.log(poorva)

poorva.firstName = "poorva sharma"
poorva.city = "ujjain"
delete poorva.lastName
console.log(poorva)


// Es6 class 




// Object.create()












