let nieve=document.querySelector('.nieve')
let resultado=document.querySelector('.resultado')
nieve.addEventListener("change",function () {
    resultado.textContent=`Te gusta el sabor ${nieve.value}`  
})
