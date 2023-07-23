let judul=document.querySelectorAll('h3')


judul.forEach(el=>{
    el.addEventListener('click',function(){
        let sibling=el.nextElementSibling
        sibling.classList.toggle('active')
    })
})