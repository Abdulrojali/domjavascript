

function handlerClick(){
    let r=Math.floor(Math.random()*225)
    let g=Math.floor(Math.random()*225)
    let b=Math.floor(Math.random()*225)
    
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`
}

let click=document.querySelectorAll('.click')

click.forEach(el=>{
    el.addEventListener('click',handlerClick)
})