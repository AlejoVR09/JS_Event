window.addEventListener('load', function() {
    let loading = this.document.querySelector('.loading')
    let div = this.document.querySelector('.main')
    div.style.display="none"
    
    this.setTimeout(()=>{
        loading.style.display="none"
        div.style.display="block"
    },3000);
})