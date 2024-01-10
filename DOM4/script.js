
let adduser= document.querySelector('button')
adduser.addEventListener("click",function(){
    getUser()
})

function getUser(){
    fetch(`https://reqres.in/api/users?page=2`).then(function(res){
        return res.json().then(function(res){
            res.data.forEach(element => {
                document.write(`<h1>${element.id}</h1>`)
                document.write(`<h1>${element.email}</h1>`)
                document.write(`<h1>${element.first_name}</h1>`)
                document.write(`<h1>${element.last_name}</h1>`)
                document.write(`<img src = ${element.avatar}>`)
            });

        })
    })
}