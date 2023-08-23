let btnToTop = document.querySelector('#myBtn')
let scroll = document.querySelector('.scroll')
window.addEventListener('scroll',function(){
    if (window.scrollY>60) {
        scroll.style.backgroundColor='transparent'
    }
    else {
        scroll.style.backgroundColor='black'
    }

    if(window.scrollY>100){
        btnToTop.style.display='block'
    }
    else{
        btnToTop.style.display='none'
    }
})

btnToTop.addEventListener('click', function () {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})


