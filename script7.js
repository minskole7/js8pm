{/* <h1 id="one"class ="two" name = "nm">HeadingOne</h1>
<input type="text">
<button id = "three">Add element</button> */}

//<h1 id="one" class ="two" name = "nm">HeadingOne</h1>

// program
let headOne = document.querySelector('h1')
console.log(headOne.textContent)
console.log(headOne.tagName)
console.log(headOne.className)


// program2 
headOne.classList.add("three")
console.log(headOne)
headOne.classList.remove("two")
console.log(headOne)
headOne.classList.toggle("four") // add
console.log(headOne)
headOne.classList.toggle("four")// remove
console.log(headOne)

// program 3 

let idValue = headOne.getAttribute('id')
console.log(idValue)

// updating the attribute
headOne.setAttribute('id',"five")
console.log(headOne)

// adding the attribute
headOne.setAttribute('data-cy','name')
console.log(headOne)

//removing the attribute
headOne.removeAttribute('id')
console.log(headOne)



// Javascript ???

// html element 

// style 

// javascript 
// creating the html
// udpdating the html element 
// deleting the html element 
// retriving the html element 

// javascript update the attribute of the element 
// delte the attribute of the element 
// adding the attribute of the element 
// retriving the value of the attribute

// useraction 


// click()


// dbClick()


// mouseover()


// mouseout()


// reload()





