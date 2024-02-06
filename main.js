
let input = document.getElementsByClassName("input")[0]
let add = document.getElementsByClassName("add")[0]
let box = document.getElementsByClassName("tasks")[0]
let text = document.createElement("h3")


text.innerText = "no tasks entered"
box.append(text)
text.style.cssText="display:none; text-align: center"

let arr=[]


// action
add.addEventListener("click", () => {
    
    if(input.value){

        text.style.display="none"
        
        let div_new = document.createElement("div")
        let del = document.createElement("button")
        let p = document.createElement("p")


        div_new.style.cssText = "background:white;height:30px;margin:10px;display:flex; justify-content:center; "    
        p.innerText = input.value
        del.innerText = "Delete"
                
        del.style.cssText = "height:60%; width: 30%; margin-top:auto;margin-bottom:auto;"
        p.style.cssText = "height:100%; width: 60%; margin-top:auto;margin-bottom:auto;"

        div_new.append(p)
        div_new.append(del)
        box.append(div_new)

        arr.push(input.value)
        console.log(arr)


        // Note: we use   JSON.stringify()   to convert the array into a string representation that can be stored in localStorage
        window.localStorage.setItem("tasks", JSON.stringify(arr))
        

        del.onclick = () => {
            del.parentElement.style.display="none"
            window.localStorage.removeItem("tasks", input.value)
        }

    } else if (box.innerText === "" && input.value ==="") {
        
        text.style.display="block"
    }
    
    
})








