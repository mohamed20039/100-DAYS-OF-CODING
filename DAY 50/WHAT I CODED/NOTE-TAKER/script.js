let button = document.querySelector(".Add")

let input = document.getElementById("input")

let ul = document.querySelector(".note")


button.addEventListener("click" ,  function(){
    if (input.value === ""){
        alert("Please write some notes to add in your notes")
    }
    else{
        let li = document.createElement('li')

        li.appendChild(document.createTextNode(input.value))

        ul.appendChild(li)

        input.value=''
    }
})