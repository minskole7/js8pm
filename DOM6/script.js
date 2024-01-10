
let ulList = document.querySelector('ul')
let input = document.querySelector('input')
let buttonOne = document.querySelector('#one')

buttonOne.addEventListener('click',function(){
    let frText = input.value
    let newli = document.createElement('li') // <li></li>
    newli.textContent = frText // <li>Papaya</li>
    createButton(newli)
    ulList.appendChild(newli)
    input.value = " "

})

function createButton(li){
    let r =  document.createElement('button') // <button></button>
    r.textContent =  "Remove" // <button>Remove<button>
    r.classList.add('remove') // <button class ="remove">Remove<button>
    li.appendChild(r)


    let u =  document.createElement('button') 
    u.textContent =  "Up" 
    u.classList.add('up') 
    li.appendChild(u)


    let d =  document.createElement('button') 
    d.textContent =  "Down" 
    d.classList.add('down') 
    li.appendChild(d)

}


ulList.addEventListener('click',function(e){
    //console.log(e.target)
    //console.log(e.target.tagName)
    //console.log(e.target.className)

    if(e.target.tagName = "BUTTON"){

        if(e.target.className == "remove"){
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)

        }
        else if(e.target.className == "up"){
            let li = e.target.parentElement
            let ul = li.parentElement
            let prevLi = li.previousElementSibling
            if(prevLi){
                ul.insertBefore(li,prevLi)
            }
            
        }
        else if(e.target.className == "down"){
            let li = e.target.parentElement
            let ul = li.parentElement
            let nextLi = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }
        }

    }
})








