
// <h1 id = "one">Javascript</h1>
// <p class = "two">i am learning javascript</p>
// <p name = "three">I am learning python</p>
// <ul>
//     <li class = "it">Front End</li>
//     <li class = "it">Back End</li>
//     <li class = "it">SQl</li>
// </ul>
// <button>Add Element</button>

// program 1

let byId = document.querySelector('#one')
console.log(byId)

let byGetId = document.getElementById('one')
console.log(byGetId)


// program 2
// document.querySelector() // document.querySelectorAll()
let byClassName = document.querySelector('.it') // single element
let byClassNames = document.querySelectorAll('.it') // multiple element
console.log(byClassName)
console.log(byClassNames) // nodeList

for(let i = 0 ; i < byClassNames.length ; i++){
    //console.log(i)
    //console.log(byClassNames[i])
    byClassNames[i].style.color = "red"
}

// program 3
let allFe = document.querySelectorAll('.fe') // node List
console.log(allFe)
for(let i = 0 ; i < allFe.length ; i++){
    if(i % 2 == 0){
        allFe[i].style.color  = "purple" 
    }
    else {
        allFe[i].style.color  = "green" 
    }
}

let allFeByHTMLC = document.getElementsByClassName('fe')
console.log(allFeByHTMLC)

for(let i = 0 ; i < allFeByHTMLC.length ; i++){
    console.log(i)
    console.log(allFeByHTMLC[i])
    allFeByHTMLC[i].style.color = "red"
}

// html collection and node list

// program 4
let byNodeList = document.querySelectorAll('.be')
console.log(byNodeList)

let byHtmlCollection = document.getElementsByClassName('be')
console.log(byHtmlCollection)


// html

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body>
//     <h1 id="one">Javascript</h1>
//     <p class="two">i am learning javascript</p>
//     <p name="three">I am learning python</p>
//     <ul>
//         <li class="it">Front End</li>
//         <li class="it">Back End</li>
//         <li class="it">SQl</li>
//     </ul>
//     <ol>
//         <li class="fe">Js</li>
//         <li class="fe">Css</li>
//         <li class="fe">Html</li>
//         <li class="fe">React js</li>
//         <li class="fe">Typescript</li>
//         <li class="fe">Jquery</li>
//         <li class="fe">Boostrap</li>
//     </ol>

//     <ul>
//         <li class="be">Python</li>
//         <li class="be">Java</li>
//         <li class="be">C#</li>
//         <li class="be">Node js</li>
//     </ul>
//     <button>Add Element</button>
//     <script src='script5.js'></script>
// </body>

// </html>


