

let obj = {
    firstName:"chinmay",
    lastName:"despande"
}

// object ----> property --- string
// number , boolean , string , objects , htmlelement

let mapA = new Map()
console.log(mapA)
console.log(typeof mapA)

// Object ------>  properties and method
let mapN = new Map([
    [1,"manager"],
    [2,'customer'],
    [3,'admin'],
    [4,'support']
])
console.log(mapN)

// properties 
let mapC = new Map()
mapC.set(1,'admin')
mapC.set("firstName",'chinmay')
mapC.set("lastName",'deshpande')
mapC.set(true,'can drive')
console.log(mapC)

let q1 = mapC.size
console.log(q1)

// has()
let q2 = mapC.has(true)
console.log(q2)

// clear
// let q3 = mapC.clear()
// console.log(mapC)

// get()
// let q3 = mapC.get("firstName")
// console.log(q3)

//forEach()

mapC.forEach(function(v,k){
    console.log(v,k)
})


// keys()
for(let x of mapC.keys()){
    console.log(x)
}

// values()
for(let x of mapC.values()){
    console.log(x)
}

// entries()

for(let item of mapC.entries()){
    console.log(item)
}

