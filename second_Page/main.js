const propaganda = document.querySelector("#pops")
let nome; 
function pop(){
    if(propaganda.style.display == "none"){
    propaganda.style.display = "block"
    }else{
    propaganda.style.display = "none" 
    }
}


do{
    nome = prompt("Qual seu nome?")
    if(nome.match(/[0-9]/g) || nome == ""){
    alert("Não Inclua números em seu nome!")
        continue;
} 
}while(nome.match(/[0-9]/g) || nome == ""){
    console.log("enviado!")
  localStorage.setItem("Nome", nome)
}

setInterval(pop, 5000)
