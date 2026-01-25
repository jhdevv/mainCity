const propaganda = document.querySelector("#pops")

function pop(){
    if(propaganda.style.display == "none"){
    propaganda.style.display = "block"
    }else{
    propaganda.style.display = "none" 
    }
}


setInterval(pop, 30000)
