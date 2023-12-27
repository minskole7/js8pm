let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23
}
console.log(info)
// string 


// Intializing the map 
let mapA = new Map()
console.log(mapA)

let initialdata = [['a',1],['b',2],['c',3]]
let mapB = new Map(initialdata)
console.log(mapB)

// program 2
mapA.set('name',"john") 
mapA.set(1,"one") 
mapA.set(true,"boolean") 
console.log(mapA)

//property
console.log(mapA.size)

//get()
let a = mapA.get(1)
let a1 = mapA.get('name')
let a2 = mapA.get(true)
console.log(a1)
console.log(a)
console.log(a2)

//has()
let q4 = mapA.has(true)
console.log(q4)

//delete()
console.log(mapA)
mapA.delete('name')
console.log(mapA)

mapA.forEach(function(val,key){
    console.log(val,key)
})


let roles = new Map(
    [
        [1,'admin'],
        [2 ,'customer'],
        [3,'manager']
    ]

)
console.log(roles)
for(let k of roles.keys()){
    console.log(k)
}

for(let k of roles.values()){
    console.log(k)
}

for(let [k,v] of roles.entries()){
    console.log(k,v)
}

// clear()
// roles.clear()
// console.log(roles)

let mapE = new Map([
    [{'firstName':"john",lastName:"deo"},"johninfo"],
    [[11,23,44],"marks"]
])
console.log(mapE)


// Set 

let setA = new Set()
console.log(setA)

setA.add(1)
setA.add(1)
setA.add(1)
setA.add(1)
setA.add(2)
console.log(setA)

