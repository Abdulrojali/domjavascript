let judul=document.querySelectorAll('.judul')

judul.forEach(el=>{
    el.addEventListener('click',function(){
        let sibling=el.nextElementSibling
        sibling.classList.toggle('active')
    })
})