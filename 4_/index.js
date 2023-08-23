let accordion1=document.querySelector('.accordion1')
accordion1.addEventListener('click',function(){
    bool(document.querySelector('.panel1'))
})

let accordion2=document.querySelector('.accordion2')
accordion2.addEventListener('click',function(){
    bool(document.querySelector('.panel2'))
})

let accordion3=document.querySelector('.accordion3')
accordion3.addEventListener('click',function(){
    bool(document.querySelector('.panel3'))
})

function bool(obj) {
    if (obj.style.display=='none' || !obj.style.display) {
        obj.style.display='block'
    } else {
        obj.style.display='none'
    }
}