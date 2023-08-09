let icon=document.querySelector('.icon')
        icon.addEventListener('click',function(){
            let menu = document.querySelector('#myNavbar')
            console.log(menu)
            menu.classList.toggle('responsive')
        })