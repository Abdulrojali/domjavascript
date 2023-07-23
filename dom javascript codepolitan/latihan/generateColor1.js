let load=document.querySelector('.loader')

function generateColor(){
    let r=Math.floor(Math.random()*255)
    let g=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)
    let a=Math.floor(Math.random()*5)
    document.body.style.backgroundColor=`rgba(${r},${g},${b},${a})`
}
load.addEventListener('click',generateColor)