let main=document.querySelector('#main')
let sidebar=document.querySelector('.sidebar')
let btnOpen= document.querySelector('.openbtn')
btnOpen.addEventListener('click',function () {
    sidebar.style.left='0'
    main.style.marginLeft='200px'
})

let btnClose=document.querySelector('.closebtn')
btnClose.addEventListener('click',function () {
    sidebar.style.left='-200px'
    main.style.marginLeft='0'
})