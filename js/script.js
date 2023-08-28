const escolha = document.querySelectorAll(".rt")
let nota = 0;
const number = document.querySelector("#number")
const btn = document.querySelector(".submite")


for (let i = 0; i < escolha.length; i++){
    escolha[i].addEventListener('click' , () => {
        clearButons();
        escolha[i].classList.add("active")
        nota = i + 1;
        number.textContent = nota;
    })
  
}


function clearButons (){
    for (let i = 0; i < escolha.length; i++){
         escolha[i].classList.remove("active")
}
}

btn.addEventListener('click' , () => {
    if(nota < 1){
        alert("Chose one number!")
    }
    else{
    const body = document.querySelector("body");
    
    btn.classList.add("active")
    body.classList.add("active")
    }
})